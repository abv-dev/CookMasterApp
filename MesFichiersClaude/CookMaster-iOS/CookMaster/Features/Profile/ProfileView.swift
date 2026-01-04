import SwiftUI

// MARK: - Profile View
struct ProfileView: View {
    @EnvironmentObject var authViewModel: AuthenticationViewModel
    @EnvironmentObject var appState: AppState
    @State private var showLogoutConfirmation = false
    @State private var showSettings = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // User Profile Header
                        profileHeader

                        // Stats
                        statsSection

                        // Settings Sections
                        settingsSection

                        // About Section
                        aboutSection

                        // Logout Button
                        logoutButton

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                    .padding(.top, Spacing.md)
                }
            }
            .navigationTitle("Profil")
            .navigationBarTitleDisplayMode(.large)
            .alert("Déconnexion", isPresented: $showLogoutConfirmation) {
                Button("Annuler", role: .cancel) {}
                Button("Déconnexion", role: .destructive) {
                    authViewModel.logout()
                }
            } message: {
                Text("Êtes-vous sûr de vouloir vous déconnecter?")
            }
        }
    }

    // MARK: - Profile Header

    private var profileHeader: some View {
        VStack(spacing: Spacing.md) {
            // Avatar
            if let user = authViewModel.currentUser {
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.7)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 100, height: 100)
                        .shadow(color: Color.Theme.gold.opacity(0.3), radius: 15, y: 8)

                    Text(user.name.prefix(1).uppercased())
                        .font(.system(size: 42, weight: .bold))
                        .foregroundColor(.white)
                }

                Text(user.name)
                    .font(Font.Theme.title1)
                    .foregroundColor(Color.Theme.textPrimary)

                Text(user.email)
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.lg)
    }

    // MARK: - Stats Section

    private var statsSection: some View {
        HStack(spacing: Spacing.md) {
            StatCard(
                icon: "flame.fill",
                value: "24",
                label: "Cuissons",
                color: Color.Theme.gold
            )

            StatCard(
                icon: "clock.fill",
                value: "580",
                label: "Minutes",
                color: Color.Theme.accent
            )

            StatCard(
                icon: "chart.line.uptrend.xyaxis",
                value: "95%",
                label: "Réussite",
                color: Color.Theme.secondary
            )
        }
    }

    // MARK: - Settings Section

    private var settingsSection: some View {
        VStack(spacing: Spacing.sm) {
            Text("Paramètres")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)
                .frame(maxWidth: .infinity, alignment: .leading)

            // Preferences
            SettingsCard(icon: "slider.horizontal.3", title: "Préférences") {
                // Open preferences
            }

            // Notifications
            SettingsCard(icon: "bell.fill", title: "Notifications") {
                // Open notifications settings
            }

            // Units
            SettingsCard(icon: "ruler.fill", title: "Unités de mesure") {
                // Open units settings
            }

            // Language
            SettingsCard(icon: "globe", title: "Langue", badge: "Français") {
                // Open language settings
            }
        }
    }

    // MARK: - About Section

    private var aboutSection: some View {
        VStack(spacing: Spacing.sm) {
            Text("À propos")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)
                .frame(maxWidth: .infinity, alignment: .leading)

            // Help
            SettingsCard(icon: "questionmark.circle.fill", title: "Aide & FAQ") {
                // Open help
            }

            // Terms
            SettingsCard(icon: "doc.text.fill", title: "Conditions d'utilisation") {
                // Open terms
            }

            // Privacy
            SettingsCard(icon: "hand.raised.fill", title: "Confidentialité") {
                // Open privacy
            }

            // Version
            HStack {
                Image(systemName: "info.circle.fill")
                    .foregroundColor(Color.Theme.gold)

                Text("Version")
                    .font(Font.Theme.bodyRegular)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Text("\(appState.appVersion) (\(appState.buildNumber))")
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
            }
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
        }
    }

    // MARK: - Logout Button

    private var logoutButton: some View {
        Button(action: { showLogoutConfirmation = true }) {
            HStack {
                Image(systemName: "rectangle.portrait.and.arrow.right")
                Text("Déconnexion")
                    .font(Font.Theme.bodyBold)
            }
            .frame(maxWidth: .infinity)
            .padding()
            .background(Color.Theme.error.opacity(0.15))
            .foregroundColor(Color.Theme.error)
            .cornerRadius(CornerRadius.medium)
        }
        .padding(.top, Spacing.lg)
    }
}

// MARK: - Settings Card

struct SettingsCard: View {
    let icon: String
    let title: String
    var badge: String?
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(Color.Theme.gold)
                    .frame(width: 24)

                Text(title)
                    .font(Font.Theme.bodyRegular)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                if let badge = badge {
                    Text(badge)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
                }

                Image(systemName: "chevron.right")
                    .font(.system(size: 14))
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.3))
            }
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
        }
    }
}

// MARK: - Preview

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
            .environmentObject(AuthenticationViewModel())
            .environmentObject(AppState())
    }
}
