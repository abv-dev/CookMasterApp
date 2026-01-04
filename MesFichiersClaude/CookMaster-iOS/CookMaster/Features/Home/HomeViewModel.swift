import Foundation
import Combine

// MARK: - Home ViewModel
class HomeViewModel: ObservableObject {
    @Published var isLoading = false
    @Published var errorMessage: String?
    @Published var recentCookings: [CookingHistory] = []
    @Published var popularMeats: [Meat] = []
    @Published var cookingSuggestions: [CookingSuggestion] = []
    @Published var currentTimer: TimerInfo?

    private var cancellables = Set<AnyCancellable>()
    private let apiService = APIService.shared
    private let timerService = TimerService.shared

    init() {
        loadHomeData()
        observeTimer()
    }

    // MARK: - Data Loading

    func loadHomeData() {
        isLoading = true
        errorMessage = nil

        Publishers.Zip3(
            loadRecentCookings(),
            loadPopularMeats(),
            loadSuggestions()
        )
        .sink(
            receiveCompletion: { [weak self] completion in
                self?.isLoading = false
                if case .failure(let error) = completion {
                    self?.errorMessage = error.localizedDescription
                }
            },
            receiveValue: { [weak self] (cookings, meats, suggestions) in
                self?.recentCookings = cookings
                self?.popularMeats = meats
                self?.cookingSuggestions = suggestions
            }
        )
        .store(in: &cancellables)
    }

    func refresh() {
        loadHomeData()
    }

    // MARK: - Private Loading Methods

    private func loadRecentCookings() -> AnyPublisher<[CookingHistory], Error> {
        apiService.getCookingHistory()
            .map { Array($0.prefix(3)) }
            .replaceError(with: [])
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
    }

    private func loadPopularMeats() -> AnyPublisher<[Meat], Error> {
        apiService.getMeats()
            .map { meats in
                // Filter popular meats (beef, chicken, pork, lamb)
                meats.filter { meat in
                    ["boeuf", "poulet", "porc", "agneau"].contains(meat.category.rawValue)
                }
                .prefix(6)
                .map { $0 }
            }
            .replaceError(with: [])
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
    }

    private func loadSuggestions() -> AnyPublisher<[CookingSuggestion], Error> {
        // Generate suggestions based on time of day and season
        let hour = Calendar.current.component(.hour, from: Date())
        let suggestions = generateSuggestions(for: hour)
        return Just(suggestions)
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
    }

    private func generateSuggestions(for hour: Int) -> [CookingSuggestion] {
        var suggestions: [CookingSuggestion] = []

        switch hour {
        case 6..<11:
            suggestions.append(CookingSuggestion(
                title: "Petit-déjeuner protéiné",
                description: "Essayez du bacon croustillant ou des saucisses",
                meatType: "Porc - Lardons",
                icon: "sunrise.fill",
                cookingMethod: .poele
            ))
        case 11..<15:
            suggestions.append(CookingSuggestion(
                title: "Déjeuner savoureux",
                description: "Un steak parfaitement cuit pour le déjeuner",
                meatType: "Bœuf - Entrecôte",
                icon: "sun.max.fill",
                cookingMethod: .poele
            ))
        case 18..<23:
            suggestions.append(CookingSuggestion(
                title: "Dîner gastronomique",
                description: "Impressionnez avec un rôti au four",
                meatType: "Agneau - Gigot",
                icon: "moon.stars.fill",
                cookingMethod: .fourTraditionnel
            ))
        default:
            suggestions.append(CookingSuggestion(
                title: "Cuisson rapide",
                description: "Préparez quelque chose de rapide et délicieux",
                meatType: "Poulet - Blanc",
                icon: "clock.fill",
                cookingMethod: .poele
            ))
        }

        return suggestions
    }

    // MARK: - Timer Observation

    private func observeTimer() {
        timerService.$isRunning
            .combineLatest(
                timerService.$remainingSeconds,
                timerService.$meatName
            )
            .map { isRunning, remaining, meatName -> TimerInfo? in
                guard isRunning, let meatName = meatName else {
                    return nil
                }
                return TimerInfo(
                    meatName: meatName,
                    remainingSeconds: remaining,
                    formattedTime: self.timerService.formattedTime,
                    progress: self.timerService.progress
                )
            }
            .assign(to: &$currentTimer)
    }

    // MARK: - Quick Actions

    func startQuickCalculation(meatType: String) {
        // This will be handled by navigation in the view
    }

    func continueCooking(history: CookingHistory) {
        // Restart timer with same parameters
        if let result = history.result {
            timerService.start(
                totalMinutes: result.calculation.cookingTime,
                meatName: result.meat.name,
                targetTemp: result.calculation.targetTemperature,
                restingTime: result.calculation.restingTime
            )
        }
    }
}

// MARK: - Supporting Models

struct CookingSuggestion: Identifiable {
    let id = UUID()
    let title: String
    let description: String
    let meatType: String
    let icon: String
    let cookingMethod: CookingMethod
}

struct TimerInfo {
    let meatName: String
    let remainingSeconds: Int
    let formattedTime: String
    let progress: Double
}
