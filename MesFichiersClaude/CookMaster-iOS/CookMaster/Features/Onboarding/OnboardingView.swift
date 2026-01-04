import SwiftUI

// MARK: - Onboarding View
struct OnboardingView: View {
    @EnvironmentObject var appState: AppState
    @State private var currentPage = 0

    private let pages: [OnboardingPage] = [
        OnboardingPage(
            icon: "flame.fill",
            title: "Bienvenue sur CookMaster",
            description: "Maîtrisez la cuisson parfaite de vos viandes grâce à des calculs précis et des températures professionnelles.",
            gradient: [Color.Theme.gold, Color.Theme.gold.opacity(0.7)]
        ),
        OnboardingPage(
            icon: "thermometer.medium",
            title: "Températures Précises",
            description: "Accédez à plus de 35 types de viandes avec des températures exactes basées sur les standards gastronomiques européens.",
            gradient: [Color.Theme.accent, Color.Theme.accent.opacity(0.7)]
        ),
        OnboardingPage(
            icon: "timer",
            title: "Timer Intelligent",
            description: "Suivez votre cuisson en temps réel avec des notifications progressives et des rappels intelligents.",
            gradient: [Color.Theme.secondary, Color.Theme.secondary.opacity(0.7)]
        )
    ]

    var body: some View {
        ZStack {
            Color.Theme.background
                .ignoresSafeArea()

            VStack(spacing: 0) {
                // Skip Button
                HStack {
                    Spacer()
                    Button("Passer") {
                        withAnimation {
                            appState.hasCompletedOnboarding = true
                        }
                    }
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                    .font(Font.Theme.caption)
                    .padding()
                }

                // Page Content
                TabView(selection: $currentPage) {
                    ForEach(0..<pages.count, id: \.self) { index in
                        OnboardingPageView(page: pages[index])
                            .tag(index)
                    }
                }
                .tabViewStyle(PageTabViewStyle(indexDisplayMode: .never))
                .animation(.easeInOut, value: currentPage)

                // Page Indicator
                HStack(spacing: Spacing.sm) {
                    ForEach(0..<pages.count, id: \.self) { index in
                        Circle()
                            .fill(currentPage == index ? Color.Theme.gold : Color.Theme.textPrimary.opacity(0.3))
                            .frame(width: 8, height: 8)
                            .animation(.easeInOut, value: currentPage)
                    }
                }
                .padding(.vertical, Spacing.lg)

                // Navigation Buttons
                HStack(spacing: Spacing.md) {
                    if currentPage > 0 {
                        Button(action: { withAnimation { currentPage -= 1 } }) {
                            Image(systemName: "chevron.left")
                                .font(.system(size: 20, weight: .semibold))
                                .foregroundColor(Color.Theme.textPrimary)
                                .frame(width: 50, height: 50)
                                .background(Color.Theme.surface)
                                .cornerRadius(CornerRadius.medium)
                        }
                    }

                    Spacer()

                    Button(action: {
                        if currentPage < pages.count - 1 {
                            withAnimation { currentPage += 1 }
                        } else {
                            withAnimation {
                                appState.hasCompletedOnboarding = true
                            }
                        }
                    }) {
                        HStack(spacing: Spacing.xs) {
                            Text(currentPage == pages.count - 1 ? "Commencer" : "Suivant")
                                .font(Font.Theme.bodyBold)
                            Image(systemName: "chevron.right")
                                .font(.system(size: 16, weight: .semibold))
                        }
                        .foregroundColor(.white)
                        .frame(maxWidth: currentPage == pages.count - 1 ? .infinity : nil)
                        .frame(height: 50)
                        .padding(.horizontal, Spacing.lg)
                        .background(
                            LinearGradient(
                                colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.8)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .cornerRadius(CornerRadius.medium)
                        .shadow(color: Color.Theme.gold.opacity(0.3), radius: 8, y: 4)
                    }
                }
                .padding(.horizontal, Spacing.lg)
                .padding(.bottom, Spacing.xl)
            }
        }
    }
}

// MARK: - Onboarding Page View
struct OnboardingPageView: View {
    let page: OnboardingPage

    var body: some View {
        VStack(spacing: Spacing.xl) {
            Spacer()

            // Icon
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: page.gradient,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 140, height: 140)
                    .shadow(color: page.gradient[0].opacity(0.4), radius: 20, y: 10)

                Image(systemName: page.icon)
                    .font(.system(size: 60, weight: .semibold))
                    .foregroundColor(.white)
            }
            .padding(.bottom, Spacing.xl)

            // Title
            Text(page.title)
                .font(Font.Theme.title1)
                .foregroundColor(Color.Theme.gold)
                .multilineTextAlignment(.center)
                .padding(.horizontal, Spacing.lg)

            // Description
            Text(page.description)
                .font(Font.Theme.bodyRegular)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                .multilineTextAlignment(.center)
                .lineSpacing(6)
                .padding(.horizontal, Spacing.xxl)

            Spacer()
            Spacer()
        }
    }
}

// MARK: - Onboarding Page Model
struct OnboardingPage {
    let icon: String
    let title: String
    let description: String
    let gradient: [Color]
}

// MARK: - Preview
struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
            .environmentObject(AppState())
    }
}
