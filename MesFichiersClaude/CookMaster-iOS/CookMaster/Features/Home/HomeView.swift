import SwiftUI

// MARK: - Home View
struct HomeView: View {
    @StateObject private var viewModel = HomeViewModel()
    @EnvironmentObject var authViewModel: AuthenticationViewModel
    @State private var showCalculator = false
    @State private var showTimer = false
    @State private var selectedMeat: String?

    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: Spacing.lg) {
                    // Header
                    headerView

                    // Active Timer Card (if running)
                    if let timerInfo = viewModel.currentTimer {
                        activeTimerCard(timerInfo)
                    }

                    // Quick Actions
                    quickActionsSection

                    // Suggestions
                    if !viewModel.cookingSuggestions.isEmpty {
                        suggestionsSection
                    }

                    // Popular Meats
                    if !viewModel.popularMeats.isEmpty {
                        popularMeatsSection
                    }

                    // Recent Cookings
                    if !viewModel.recentCookings.isEmpty {
                        recentCookingsSection
                    }

                    Spacer(minLength: Spacing.xl)
                }
                .padding(.horizontal, Spacing.lg)
                .padding(.top, Spacing.md)
            }
            .background(Color.Theme.background)
            .navigationBarHidden(true)
            .refreshable {
                viewModel.refresh()
            }
            .sheet(isPresented: $showCalculator) {
                // CalculatorView will be created next
                Text("Calculator View")
            }
            .sheet(isPresented: $showTimer) {
                // TimerView will be created next
                Text("Timer View")
            }
        }
    }

    // MARK: - Header

    private var headerView: some View {
        HStack(alignment: .center) {
            VStack(alignment: .leading, spacing: Spacing.xs) {
                Text(greetingText)
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                if let userName = authViewModel.currentUser?.name {
                    Text(userName)
                        .font(Font.Theme.title1)
                        .foregroundColor(Color.Theme.gold)
                } else {
                    Text("CookMaster")
                        .font(Font.Theme.title1)
                        .foregroundColor(Color.Theme.gold)
                }
            }

            Spacer()

            // Profile Button
            Button(action: {}) {
                if let user = authViewModel.currentUser {
                    Text(user.name.prefix(1).uppercased())
                        .font(Font.Theme.title2)
                        .foregroundColor(.white)
                        .frame(width: 44, height: 44)
                        .background(Color.Theme.gold)
                        .clipShape(Circle())
                } else {
                    Image(systemName: "person.circle.fill")
                        .font(.system(size: 44))
                        .foregroundColor(Color.Theme.gold)
                }
            }
        }
        .padding(.vertical, Spacing.sm)
    }

    // MARK: - Active Timer Card

    private func activeTimerCard(_ timerInfo: TimerInfo) -> some View {
        Button(action: { showTimer = true }) {
            HStack(spacing: Spacing.md) {
                // Progress Circle
                ZStack {
                    Circle()
                        .stroke(Color.Theme.surface, lineWidth: 4)
                        .frame(width: 60, height: 60)

                    Circle()
                        .trim(from: 0, to: timerInfo.progress)
                        .stroke(
                            Color.Theme.accent,
                            style: StrokeStyle(lineWidth: 4, lineCap: .round)
                        )
                        .frame(width: 60, height: 60)
                        .rotationEffect(.degrees(-90))
                        .animation(.linear, value: timerInfo.progress)

                    Image(systemName: "flame.fill")
                        .foregroundColor(Color.Theme.accent)
                        .font(.system(size: 24))
                }

                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Cuisson en cours")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Text(timerInfo.meatName)
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.textPrimary)

                    Text(timerInfo.formattedTime)
                        .font(Font.Theme.title2)
                        .foregroundColor(Color.Theme.accent)
                }

                Spacer()

                Image(systemName: "chevron.right")
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.3))
            }
            .padding(Spacing.md)
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.large)
            .shadow(color: Color.Theme.accent.opacity(0.2), radius: 10, y: 5)
        }
    }

    // MARK: - Quick Actions

    private var quickActionsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            Text("Actions rapides")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            HStack(spacing: Spacing.md) {
                QuickActionButton(
                    icon: "timer",
                    title: "Calculer",
                    gradient: [Color.Theme.gold, Color.Theme.gold.opacity(0.8)],
                    action: { showCalculator = true }
                )

                QuickActionButton(
                    icon: "book.fill",
                    title: "Explorer",
                    gradient: [Color.Theme.secondary, Color.Theme.secondary.opacity(0.8)],
                    action: {}
                )

                QuickActionButton(
                    icon: "clock.arrow.circlepath",
                    title: "Historique",
                    gradient: [Color.Theme.accent, Color.Theme.accent.opacity(0.8)],
                    action: {}
                )
            }
        }
    }

    // MARK: - Suggestions

    private var suggestionsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            Text("Suggestions pour vous")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            ForEach(viewModel.cookingSuggestions) { suggestion in
                SuggestionCard(suggestion: suggestion) {
                    selectedMeat = suggestion.meatType
                    showCalculator = true
                }
            }
        }
    }

    // MARK: - Popular Meats

    private var popularMeatsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Text("Viandes populaires")
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Button("Voir tout") {}
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.gold)
            }

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: Spacing.md) {
                    ForEach(viewModel.popularMeats) { meat in
                        MeatCardCompact(meat: meat) {
                            selectedMeat = meat.name
                            showCalculator = true
                        }
                    }
                }
            }
        }
    }

    // MARK: - Recent Cookings

    private var recentCookingsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Text("Cuissons récentes")
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Button("Voir tout") {}
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.gold)
            }

            ForEach(viewModel.recentCookings) { cooking in
                RecentCookingCard(cooking: cooking) {
                    viewModel.continueCooking(history: cooking)
                    showTimer = true
                }
            }
        }
    }

    // MARK: - Computed Properties

    private var greetingText: String {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 6..<12: return "Bonjour"
        case 12..<18: return "Bon après-midi"
        default: return "Bonsoir"
        }
    }
}

// MARK: - Quick Action Button

struct QuickActionButton: View {
    let icon: String
    let title: String
    let gradient: [Color]
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: Spacing.sm) {
                ZStack {
                    RoundedRectangle(cornerRadius: CornerRadius.medium)
                        .fill(
                            LinearGradient(
                                colors: gradient,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(height: 70)
                        .shadow(color: gradient[0].opacity(0.3), radius: 8, y: 4)

                    Image(systemName: icon)
                        .font(.system(size: 28, weight: .semibold))
                        .foregroundColor(.white)
                }

                Text(title)
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary)
            }
        }
        .frame(maxWidth: .infinity)
    }
}

// MARK: - Suggestion Card

struct SuggestionCard: View {
    let suggestion: CookingSuggestion
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: Spacing.md) {
                Image(systemName: suggestion.icon)
                    .font(.system(size: 32))
                    .foregroundColor(Color.Theme.gold)
                    .frame(width: 50, height: 50)
                    .background(Color.Theme.gold.opacity(0.15))
                    .cornerRadius(CornerRadius.medium)

                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(suggestion.title)
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.textPrimary)

                    Text(suggestion.description)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                        .lineLimit(2)

                    Text(suggestion.meatType)
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.gold)
                }

                Spacer()

                Image(systemName: "chevron.right")
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.3))
            }
            .padding(Spacing.md)
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.large)
        }
    }
}

// MARK: - Meat Card Compact

struct MeatCardCompact: View {
    let meat: Meat
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(alignment: .leading, spacing: Spacing.sm) {
                Image(systemName: meat.category.icon)
                    .font(.system(size: 32))
                    .foregroundColor(.white)
                    .frame(width: 120, height: 80)
                    .background(
                        LinearGradient(
                            colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.7)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .cornerRadius(CornerRadius.medium)

                Text(meat.name)
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
                    .lineLimit(1)

                Text(meat.category.displayName)
                    .font(Font.Theme.small)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
            }
            .frame(width: 120)
        }
    }
}

// MARK: - Recent Cooking Card

struct RecentCookingCard: View {
    let cooking: CookingHistory
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: Spacing.md) {
                // Icon
                Image(systemName: cooking.result?.cookingInfo.method.icon ?? "flame.fill")
                    .font(.system(size: 24))
                    .foregroundColor(Color.Theme.gold)
                    .frame(width: 50, height: 50)
                    .background(Color.Theme.gold.opacity(0.15))
                    .cornerRadius(CornerRadius.medium)

                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(cooking.result?.meat.name ?? "Viande")
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.textPrimary)

                    HStack(spacing: Spacing.xs) {
                        Text(cooking.result?.cookingInfo.doneness ?? "")
                            .font(Font.Theme.caption)
                            .foregroundColor(Color.Theme.accent)

                        Text("•")
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.5))

                        Text("\(cooking.result?.calculation.cookingTime ?? 0) min")
                            .font(Font.Theme.caption)
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                    }

                    Text(cooking.date.formatted(date: .abbreviated, time: .shortened))
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                }

                Spacer()

                Image(systemName: "arrow.clockwise")
                    .foregroundColor(Color.Theme.gold)
            }
            .padding(Spacing.md)
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.large)
        }
    }
}

// MARK: - MeatCategory Extension (for icon)
extension MeatCategory {
    var icon: String {
        switch self {
        case .boeuf: return "flame.fill"
        case .porc: return "leaf.fill"
        case .agneau: return "sparkles"
        case .volaille: return "bird.fill"
        case .veau: return "star.fill"
        case .gibier: return "pawprint.fill"
        }
    }
}

// MARK: - CookingMethod Extension (for icon)
extension CookingMethod {
    var icon: String {
        switch self {
        case .fourTraditionnel, .fourChaleurTournante, .fourVapeur: return "oven.fill"
        case .poele, .wok: return "circle.grid.cross.fill"
        case .plancha: return "rectangle.fill"
        case .grill, .grillElectrique, .barbecueCharbon, .barbecueGaz: return "flame.fill"
        case .sousVide: return "waterbottle.fill"
        case .mijoter, .cuireALeau, .cocotte: return "drop.fill"
        default: return "flame.fill"
        }
    }
}

// MARK: - Preview

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
            .environmentObject(AuthenticationViewModel())
    }
}
