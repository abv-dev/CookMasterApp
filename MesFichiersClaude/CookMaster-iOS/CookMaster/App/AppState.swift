import Foundation
import SwiftUI

// MARK: - App State
class AppState: ObservableObject {
    // Onboarding
    @AppStorage("hasCompletedOnboarding") var hasCompletedOnboarding = false

    // Theme
    @AppStorage("isDarkMode") var isDarkMode = true
    @AppStorage("useSystemTheme") var useSystemTheme = false

    // User Preferences
    @AppStorage("temperatureUnit") var temperatureUnit = "celsius"
    @AppStorage("weightUnit") var weightUnit = "grams"
    @AppStorage("language") var language = "fr"

    // Notifications
    @AppStorage("notificationsEnabled") var notificationsEnabled = true
    @AppStorage("soundEnabled") var soundEnabled = true

    // App Version
    let appVersion = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String ?? "1.0"
    let buildNumber = Bundle.main.infoDictionary?["CFBundleVersion"] as? String ?? "1"

    init() {
        // Check for first launch
        if !UserDefaults.standard.bool(forKey: "hasLaunchedBefore") {
            hasCompletedOnboarding = false
            UserDefaults.standard.set(true, forKey: "hasLaunchedBefore")
        }
    }

    // MARK: - Theme Methods

    func resetOnboarding() {
        hasCompletedOnboarding = false
    }

    func completeOnboarding() {
        hasCompletedOnboarding = true
    }

    func toggleTheme() {
        isDarkMode.toggle()
    }

    var colorScheme: ColorScheme? {
        if useSystemTheme {
            return nil
        }
        return isDarkMode ? .dark : .light
    }
}

// MARK: - User Defaults Extensions

extension UserDefaults {
    var hasCompletedOnboarding: Bool {
        get { bool(forKey: "hasCompletedOnboarding") }
        set { set(newValue, forKey: "hasCompletedOnboarding") }
    }
}
