import SwiftUI

// MARK: - History View
struct HistoryView: View {
    @StateObject private var viewModel = HistoryViewModel()
    @State private var selectedHistory: CookingHistory?
    @State private var showDetail = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                if viewModel.isLoading {
                    ProgressView()
                } else if viewModel.cookingHistory.isEmpty {
                    emptyStateView
                } else {
                    ScrollView {
                        VStack(spacing: Spacing.lg) {
                            // Stats Summary
                            statsSection

                            // Filter Tabs
                            filterSection

                            // History List
                            historyList

                            Spacer(minLength: Spacing.xl)
                        }
                        .padding(.horizontal, Spacing.lg)
                        .padding(.top, Spacing.md)
                    }
                }
            }
            .navigationTitle("Historique")
            .navigationBarTitleDisplayMode(.large)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Menu {
                        Button(action: { viewModel.sortBy = .date }) {
                            Label("Date", systemImage: "calendar")
                        }
                        Button(action: { viewModel.sortBy = .meat }) {
                            Label("Viande", systemImage: "list.bullet")
                        }
                        Button(action: { viewModel.sortBy = .duration }) {
                            Label("Durée", systemImage: "timer")
                        }
                    } label: {
                        Image(systemName: "arrow.up.arrow.down")
                            .foregroundColor(Color.Theme.gold)
                    }
                }
            }
            .sheet(item: $selectedHistory) { history in
                HistoryDetailView(history: history)
            }
            .refreshable {
                viewModel.loadHistory()
            }
        }
    }

    // MARK: - Stats Section

    private var statsSection: some View {
        HStack(spacing: Spacing.md) {
            StatCard(
                icon: "flame.fill",
                value: "\(viewModel.totalCookings)",
                label: "Cuissons",
                color: Color.Theme.gold
            )

            StatCard(
                icon: "clock.fill",
                value: "\(viewModel.totalMinutes)",
                label: "Minutes",
                color: Color.Theme.accent
            )

            StatCard(
                icon: "star.fill",
                value: "\(viewModel.favoriteMeat ?? "N/A")",
                label: "Préférée",
                color: Color.Theme.secondary,
                isText: true
            )
        }
    }

    // MARK: - Filter Section

    private var filterSection: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: Spacing.sm) {
                FilterChip(
                    title: "Tous",
                    isSelected: viewModel.selectedFilter == .all
                ) {
                    viewModel.selectedFilter = .all
                }

                FilterChip(
                    title: "Cette semaine",
                    isSelected: viewModel.selectedFilter == .week
                ) {
                    viewModel.selectedFilter = .week
                }

                FilterChip(
                    title: "Ce mois",
                    isSelected: viewModel.selectedFilter == .month
                ) {
                    viewModel.selectedFilter = .month
                }

                FilterChip(
                    title: "Favoris",
                    isSelected: viewModel.selectedFilter == .favorites
                ) {
                    viewModel.selectedFilter = .favorites
                }
            }
        }
    }

    // MARK: - History List

    private var historyList: some View {
        LazyVStack(spacing: Spacing.md) {
            ForEach(viewModel.filteredHistory) { history in
                HistoryCard(history: history) {
                    selectedHistory = history
                }
            }
        }
    }

    // MARK: - Empty State

    private var emptyStateView: some View {
        VStack(spacing: Spacing.lg) {
            Image(systemName: "clock.arrow.circlepath")
                .font(.system(size: 60))
                .foregroundColor(Color.Theme.textPrimary.opacity(0.3))

            Text("Aucune cuisson enregistrée")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            Text("Commencez à cuisiner pour voir votre historique ici")
                .font(Font.Theme.caption)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
                .multilineTextAlignment(.center)
                .padding(.horizontal, Spacing.xl)
        }
    }
}

// MARK: - Stat Card

struct StatCard: View {
    let icon: String
    let value: String
    let label: String
    let color: Color
    var isText: Bool = false

    var body: some View {
        VStack(spacing: Spacing.sm) {
            Image(systemName: icon)
                .font(.system(size: 24))
                .foregroundColor(color)

            if isText {
                Text(value)
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
                    .lineLimit(1)
                    .minimumScaleFactor(0.7)
            } else {
                Text(value)
                    .font(.system(size: 28, weight: .bold, design: .rounded))
                    .foregroundColor(Color.Theme.textPrimary)
            }

            Text(label)
                .font(Font.Theme.small)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }
}

// MARK: - Filter Chip

struct FilterChip: View {
    let title: String
    let isSelected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(Font.Theme.caption)
                .foregroundColor(isSelected ? .white : Color.Theme.textPrimary)
                .padding(.horizontal, Spacing.md)
                .padding(.vertical, Spacing.sm)
                .background(isSelected ? Color.Theme.gold : Color.Theme.surface)
                .cornerRadius(CornerRadius.small)
        }
    }
}

// MARK: - History Card

struct HistoryCard: View {
    let history: CookingHistory
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: Spacing.md) {
                // Icon
                ZStack {
                    RoundedRectangle(cornerRadius: CornerRadius.medium)
                        .fill(Color.Theme.gold.opacity(0.15))
                        .frame(width: 60, height: 60)

                    Image(systemName: history.result?.cookingInfo.method.icon ?? "flame.fill")
                        .font(.system(size: 24))
                        .foregroundColor(Color.Theme.gold)
                }

                // Info
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(history.result?.meat.name ?? "Viande")
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.textPrimary)

                    HStack(spacing: Spacing.xs) {
                        Text(history.result?.cookingInfo.doneness ?? "")
                            .font(Font.Theme.caption)
                            .foregroundColor(Color.Theme.accent)

                        Text("•")
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.5))

                        Text("\(history.result?.calculation.cookingTime ?? 0) min")
                            .font(Font.Theme.caption)
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                        Text("•")
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.5))

                        Text("\(Int(history.result?.cookingInfo.weight ?? 0))g")
                            .font(Font.Theme.caption)
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                    }

                    Text(history.date.formatted(date: .abbreviated, time: .shortened))
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                }

                Spacer()

                // Favorite Star
                Image(systemName: history.isFavorite ? "star.fill" : "star")
                    .foregroundColor(Color.Theme.gold)
                    .font(.system(size: 18))
            }
            .padding(Spacing.md)
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.large)
        }
    }
}

// MARK: - History ViewModel

class HistoryViewModel: ObservableObject {
    @Published var cookingHistory: [CookingHistory] = []
    @Published var filteredHistory: [CookingHistory] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    @Published var selectedFilter: HistoryFilter = .all {
        didSet { applyFilters() }
    }

    @Published var sortBy: HistorySortOption = .date {
        didSet { applyFilters() }
    }

    private var cancellables = Set<AnyCancellable>()
    private let apiService = APIService.shared

    init() {
        loadHistory()
    }

    func loadHistory() {
        isLoading = true
        errorMessage = nil

        apiService.getCookingHistory()
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] history in
                    self?.cookingHistory = history
                    self?.applyFilters()
                }
            )
            .store(in: &cancellables)
    }

    private func applyFilters() {
        var filtered = cookingHistory

        // Apply time filter
        switch selectedFilter {
        case .all:
            break
        case .week:
            let weekAgo = Calendar.current.date(byAdding: .day, value: -7, to: Date())!
            filtered = filtered.filter { $0.date >= weekAgo }
        case .month:
            let monthAgo = Calendar.current.date(byAdding: .month, value: -1, to: Date())!
            filtered = filtered.filter { $0.date >= monthAgo }
        case .favorites:
            filtered = filtered.filter { $0.isFavorite }
        }

        // Apply sort
        switch sortBy {
        case .date:
            filtered.sort { $0.date > $1.date }
        case .meat:
            filtered.sort { ($0.result?.meat.name ?? "") < ($1.result?.meat.name ?? "") }
        case .duration:
            filtered.sort { ($0.result?.calculation.cookingTime ?? 0) > ($1.result?.calculation.cookingTime ?? 0) }
        }

        filteredHistory = filtered
    }

    // MARK: - Computed Properties

    var totalCookings: Int {
        cookingHistory.count
    }

    var totalMinutes: Int {
        cookingHistory.reduce(0) { $0 + ($1.result?.calculation.cookingTime ?? 0) }
    }

    var favoriteMeat: String? {
        let meatCounts = Dictionary(grouping: cookingHistory) { $0.result?.meat.name ?? "" }
            .mapValues { $0.count }
        return meatCounts.max { $0.value < $1.value }?.key
    }
}

// MARK: - Supporting Types

enum HistoryFilter {
    case all, week, month, favorites
}

enum HistorySortOption {
    case date, meat, duration
}

// MARK: - CookingHistory Extension

extension CookingHistory {
    var isFavorite: Bool {
        // This would be stored in the backend
        // For now, return false
        return false
    }
}

// MARK: - Preview

struct HistoryView_Previews: PreviewProvider {
    static var previews: some View {
        HistoryView()
    }
}
