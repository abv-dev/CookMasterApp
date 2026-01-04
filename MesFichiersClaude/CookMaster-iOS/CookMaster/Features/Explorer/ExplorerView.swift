import SwiftUI

// MARK: - Explorer View
struct ExplorerView: View {
    @StateObject private var viewModel = ExplorerViewModel()
    @State private var selectedMeat: Meat?
    @State private var showCalculator = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // Search Bar
                        searchBar

                        // Category Filter
                        categoryFilter

                        // Meat Grid
                        if viewModel.isLoading {
                            ProgressView()
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, Spacing.xxl)
                        } else if viewModel.filteredMeats.isEmpty {
                            emptyStateView
                        } else {
                            meatGrid
                        }

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                    .padding(.top, Spacing.md)
                }
            }
            .navigationTitle("Explorer")
            .navigationBarTitleDisplayMode(.large)
            .sheet(item: $selectedMeat) { meat in
                MeatDetailView(meat: meat) {
                    showCalculator = true
                }
            }
            .sheet(isPresented: $showCalculator) {
                if let meat = selectedMeat {
                    CalculatorView()
                }
            }
            .refreshable {
                viewModel.loadMeats()
            }
        }
    }

    // MARK: - Search Bar

    private var searchBar: some View {
        HStack {
            Image(systemName: "magnifyingglass")
                .foregroundColor(Color.Theme.textPrimary.opacity(0.5))

            TextField("Rechercher une viande...", text: $viewModel.searchQuery)
                .foregroundColor(Color.Theme.textPrimary)
                .font(Font.Theme.bodyRegular)

            if !viewModel.searchQuery.isEmpty {
                Button(action: { viewModel.searchQuery = "" }) {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                }
            }
        }
        .padding()
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.medium)
    }

    // MARK: - Category Filter

    private var categoryFilter: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: Spacing.sm) {
                // All Category
                CategoryChip(
                    title: "Tous",
                    icon: "square.grid.2x2.fill",
                    isSelected: viewModel.selectedCategory == nil
                ) {
                    viewModel.selectedCategory = nil
                }

                // Specific Categories
                ForEach(MeatCategory.allCases, id: \.self) { category in
                    CategoryChip(
                        title: category.displayName,
                        icon: category.icon,
                        isSelected: viewModel.selectedCategory == category
                    ) {
                        viewModel.selectedCategory = category
                    }
                }
            }
        }
    }

    // MARK: - Meat Grid

    private var meatGrid: some View {
        LazyVGrid(
            columns: [
                GridItem(.flexible(), spacing: Spacing.md),
                GridItem(.flexible(), spacing: Spacing.md)
            ],
            spacing: Spacing.md
        ) {
            ForEach(viewModel.filteredMeats) { meat in
                MeatCard(meat: meat) {
                    selectedMeat = meat
                }
            }
        }
    }

    // MARK: - Empty State

    private var emptyStateView: some View {
        VStack(spacing: Spacing.lg) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 60))
                .foregroundColor(Color.Theme.textPrimary.opacity(0.3))

            Text("Aucune viande trouvée")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            Text("Essayez de modifier votre recherche")
                .font(Font.Theme.caption)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.xxl)
    }
}

// MARK: - Category Chip

struct CategoryChip: View {
    let title: String
    let icon: String
    let isSelected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: Spacing.xs) {
                Image(systemName: icon)
                    .font(.system(size: 14))

                Text(title)
                    .font(Font.Theme.caption)
            }
            .foregroundColor(isSelected ? .white : Color.Theme.textPrimary)
            .padding(.horizontal, Spacing.md)
            .padding(.vertical, Spacing.sm)
            .background(isSelected ? Color.Theme.gold : Color.Theme.surface)
            .cornerRadius(CornerRadius.small)
        }
    }
}

// MARK: - Meat Card

struct MeatCard: View {
    let meat: Meat
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(alignment: .leading, spacing: Spacing.sm) {
                // Image/Icon
                ZStack {
                    RoundedRectangle(cornerRadius: CornerRadius.medium)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color.Theme.gold.opacity(0.6),
                                    Color.Theme.gold.opacity(0.3)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(height: 120)

                    Image(systemName: meat.category.icon)
                        .font(.system(size: 40))
                        .foregroundColor(.white)
                }

                // Info
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(meat.name)
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.textPrimary)
                        .lineLimit(2)
                        .fixedSize(horizontal: false, vertical: true)

                    Text(meat.category.displayName)
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.6))

                    // Cuts Count
                    HStack(spacing: Spacing.xs) {
                        Image(systemName: "list.bullet")
                            .font(.system(size: 10))

                        Text("\(meat.cuts.count) coupes")
                            .font(Font.Theme.small)
                    }
                    .foregroundColor(Color.Theme.gold)
                    .padding(.top, 2)
                }
                .padding(.horizontal, Spacing.xs)
                .padding(.bottom, Spacing.xs)
            }
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.large)
            .shadow(color: Color.black.opacity(0.1), radius: 5, y: 2)
        }
    }
}

// MARK: - Explorer ViewModel

class ExplorerViewModel: ObservableObject {
    @Published var searchQuery = ""
    @Published var selectedCategory: MeatCategory?
    @Published var allMeats: [Meat] = []
    @Published var filteredMeats: [Meat] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    private var cancellables = Set<AnyCancellable>()
    private let apiService = APIService.shared

    init() {
        loadMeats()
        setupObservers()
    }

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
                    self?.filterMeats()
                }
            )
            .store(in: &cancellables)
    }

    private func setupObservers() {
        Publishers.CombineLatest($searchQuery, $selectedCategory)
            .debounce(for: .milliseconds(300), scheduler: DispatchQueue.main)
            .sink { [weak self] _, _ in
                self?.filterMeats()
            }
            .store(in: &cancellables)
    }

    private func filterMeats() {
        var filtered = allMeats

        // Filter by category
        if let category = selectedCategory {
            filtered = filtered.filter { $0.category == category }
        }

        // Filter by search
        if !searchQuery.isEmpty {
            filtered = filtered.filter { meat in
                meat.name.localizedCaseInsensitiveContains(searchQuery) ||
                meat.category.displayName.localizedCaseInsensitiveContains(searchQuery)
            }
        }

        filteredMeats = filtered
    }
}

// MARK: - Preview

struct ExplorerView_Previews: PreviewProvider {
    static var previews: some View {
        ExplorerView()
    }
}
