import SwiftUI
// Firebase désactivé temporairement (GoogleService-Info.plist manquant)
// import FirebaseCore

@main
struct CookMasterApp: App {
    @StateObject private var appState = AppState()
    @StateObject private var authViewModel = AuthenticationViewModel()

    init() {
        // Firebase désactivé temporairement
        // FirebaseApp.configure()

        // Configure app appearance
        setupAppearance()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
                .environmentObject(authViewModel)
                .preferredColorScheme(appState.colorScheme)
                .onAppear {
                    // Request notification permissions
                    NotificationService.shared.requestAuthorization()

                    // Check if user is authenticated
                    authViewModel.checkAuthStatus()
                }
        }
    }

    private func setupAppearance() {
        // Navigation Bar
        let navBarAppearance = UINavigationBarAppearance()
        navBarAppearance.configureWithOpaqueBackground()
        navBarAppearance.backgroundColor = UIColor(Color.Theme.background)

        // Use custom font if available, otherwise fallback to system font
        let titleFont: UIFont
        if let customFont = UIFont(name: "PlayfairDisplay-Bold", size: 20) {
            titleFont = customFont
        } else {
            // Fallback to system font if PlayfairDisplay is not available
            titleFont = UIFont.systemFont(ofSize: 20, weight: .bold)
        }

        navBarAppearance.titleTextAttributes = [
            .foregroundColor: UIColor(Color.Theme.gold),
            .font: titleFont
        ]

        UINavigationBar.appearance().standardAppearance = navBarAppearance
        UINavigationBar.appearance().scrollEdgeAppearance = navBarAppearance

        // Tab Bar
        let tabBarAppearance = UITabBarAppearance()
        tabBarAppearance.configureWithOpaqueBackground()
        tabBarAppearance.backgroundColor = UIColor(Color.Theme.surface)

        UITabBar.appearance().standardAppearance = tabBarAppearance
        UITabBar.appearance().scrollEdgeAppearance = tabBarAppearance
    }
}

// MARK: - App State
class AppState: ObservableObject {
    @Published var colorScheme: ColorScheme?
    @Published var isLoading = false
    @Published var showOnboarding = !UserDefaults.standard.bool(forKey: "hasCompletedOnboarding")

    init() {
        loadColorScheme()
    }

    private func loadColorScheme() {
        let themeMode = UserDefaults.standard.string(forKey: "themeMode") ?? "auto"
        switch themeMode {
        case "light": colorScheme = .light
        case "dark": colorScheme = .dark
        default: colorScheme = nil // Auto
        }
    }

    func completeOnboarding() {
        UserDefaults.standard.set(true, forKey: "hasCompletedOnboarding")
        showOnboarding = false
    }
}
