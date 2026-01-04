import Foundation
import Combine

// MARK: - Calculator ViewModel
class CalculatorViewModel: ObservableObject {
    // Input Parameters
    @Published var selectedMeat: Meat?
    @Published var selectedCut: Cut?
    @Published var weight: String = ""
    @Published var thickness: String = ""
    @Published var initialTemperature: Double = 4.0
    @Published var selectedDoneness: String = ""
    @Published var selectedMethod: CookingMethod = .poele
    @Published var selectedEquipment: String = "standard"

    // Advanced Mode
    @Published var isAdvancedMode = false
    @Published var altitude: String = ""
    @Published var humidity: String = ""
    @Published var customOvenTemp: String = ""

    // State
    @Published var isLoading = false
    @Published var errorMessage: String?
    @Published var calculationResult: CookingResult?
    @Published var showResult = false

    // Search
    @Published var searchQuery = ""
    @Published var allMeats: [Meat] = []
    @Published var filteredMeats: [Meat] = []

    private var cancellables = Set<AnyCancellable>()
    private let apiService = APIService.shared

    init() {
        loadMeats()
        setupSearchObserver()
    }

    // MARK: - Data Loading

    func loadMeats() {
        isLoading = true
        errorMessage = nil

        apiService.getMeats()
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] meats in
                    self?.allMeats = meats
                    self?.filteredMeats = meats
                }
            )
            .store(in: &cancellables)
    }

    private func setupSearchObserver() {
        $searchQuery
            .debounce(for: .milliseconds(300), scheduler: DispatchQueue.main)
            .sink { [weak self] query in
                self?.filterMeats(query: query)
            }
            .store(in: &cancellables)
    }

    private func filterMeats(query: String) {
        if query.isEmpty {
            filteredMeats = allMeats
        } else {
            filteredMeats = allMeats.filter { meat in
                meat.name.localizedCaseInsensitiveContains(query) ||
                meat.category.displayName.localizedCaseInsensitiveContains(query)
            }
        }
    }

    // MARK: - Selection Methods

    func selectMeat(_ meat: Meat) {
        selectedMeat = meat
        selectedCut = meat.cuts.first
        if let firstDoneness = selectedCut?.temperatures.first {
            selectedDoneness = firstDoneness.doneness
        }
    }

    func selectCut(_ cut: Cut) {
        selectedCut = cut
        if let firstDoneness = cut.temperatures.first {
            selectedDoneness = firstDoneness.doneness
        }
    }

    // MARK: - Calculation

    func calculate() {
        guard validateInputs() else { return }

        guard let meat = selectedMeat,
              let cut = selectedCut else {
            errorMessage = "Veuillez sélectionner une viande et une coupe"
            return
        }

        isLoading = true
        errorMessage = nil

        let parameters = CookingParameters(
            meatId: meat.id,
            cutName: cut.name,
            weight: Double(weight) ?? 0,
            thickness: thickness.isEmpty ? nil : Double(thickness),
            initialTemperature: initialTemperature,
            doneness: selectedDoneness,
            method: selectedMethod.rawValue,
            equipment: selectedEquipment,
            altitude: altitude.isEmpty ? nil : Int(altitude),
            humidity: humidity.isEmpty ? nil : Int(humidity),
            ovenTemperature: customOvenTemp.isEmpty ? nil : Int(customOvenTemp)
        )

        apiService.calculateCookingTime(parameters: parameters)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] result in
                    self?.calculationResult = result
                    self?.showResult = true
                }
            )
            .store(in: &cancellables)
    }

    // MARK: - Validation

    private func validateInputs() -> Bool {
        guard !weight.isEmpty, let weightValue = Double(weight), weightValue > 0 else {
            errorMessage = "Veuillez entrer un poids valide"
            return false
        }

        if !thickness.isEmpty {
            guard let thicknessValue = Double(thickness), thicknessValue > 0 else {
                errorMessage = "Veuillez entrer une épaisseur valide"
                return false
            }
        }

        if isAdvancedMode {
            if !altitude.isEmpty {
                guard let altitudeValue = Int(altitude), altitudeValue >= 0 else {
                    errorMessage = "Altitude invalide"
                    return false
                }
            }

            if !humidity.isEmpty {
                guard let humidityValue = Int(humidity), humidityValue >= 0, humidityValue <= 100 else {
                    errorMessage = "Humidité doit être entre 0 et 100%"
                    return false
                }
            }

            if !customOvenTemp.isEmpty {
                guard let tempValue = Int(customOvenTemp), tempValue >= 50, tempValue <= 300 else {
                    errorMessage = "Température du four doit être entre 50°C et 300°C"
                    return false
                }
            }
        }

        return true
    }

    // MARK: - Reset

    func reset() {
        selectedMeat = nil
        selectedCut = nil
        weight = ""
        thickness = ""
        initialTemperature = 4.0
        selectedDoneness = ""
        selectedMethod = .poele
        selectedEquipment = "standard"
        altitude = ""
        humidity = ""
        customOvenTemp = ""
        errorMessage = nil
        calculationResult = nil
        showResult = false
    }

    // MARK: - Computed Properties

    var isCalculateEnabled: Bool {
        selectedMeat != nil &&
        selectedCut != nil &&
        !weight.isEmpty &&
        !selectedDoneness.isEmpty
    }

    var availableDoneness: [Temperature] {
        selectedCut?.temperatures ?? []
    }

    var weightInGrams: Double? {
        Double(weight)
    }

    var thicknessInCm: Double? {
        guard !thickness.isEmpty else { return nil }
        return Double(thickness)
    }
}
