import SwiftUI

struct ContentView: View {
    @EnvironmentObject var appState: AppState
    @EnvironmentObject var authViewModel: AuthenticationViewModel

    var body: some View {
        Group {
            if !appState.hasCompletedOnboarding {
                OnboardingView()
            } else if authViewModel.isAuthenticated {
                MainTabView()
            } else {
                AuthenticationView()
            }
        }
    }
}

// MARK: - Main Tab View
struct MainTabView: View {
    @State private var selectedTab = 0

    var body: some View {
        TabView(selection: $selectedTab) {
            // Home
            HomeView()
                .tabItem {
                    Label("Accueil", systemImage: "house.fill")
                }
                .tag(0)

            // Explorer
            ExplorerView()
                .tabItem {
                    Label("Explorer", systemImage: "book.fill")
                }
                .tag(1)

            // Calculator (Center)
            CalculatorView()
                .tabItem {
                    Label("Calculer", systemImage: "flame.fill")
                }
                .tag(2)

            // History
            HistoryView()
                .tabItem {
                    Label("Historique", systemImage: "clock.arrow.circlepath")
                }
                .tag(3)

            // Profile
            ProfileView()
                .tabItem {
                    Label("Profil", systemImage: "person.fill")
                }
                .tag(4)
        }
        .accentColor(Color.Theme.gold)
        .onAppear {
            let appearance = UITabBarAppearance()
            appearance.configureWithOpaqueBackground()
            appearance.backgroundColor = UIColor(Color.Theme.surface)
            UITabBar.appearance().standardAppearance = appearance
            UITabBar.appearance().scrollEdgeAppearance = appearance
        }
    }
}

// MARK: - Loading Overlay
struct LoadingOverlay: View {
    var body: some View {
        ZStack {
            Color.black.opacity(0.4)
                .ignoresSafeArea()

            VStack(spacing: 16) {
                ProgressView()
                    .scaleEffect(1.5)
                    .tint(Color.Theme.gold)

                Text("Chargement...")
                    .font(.body)
                    .foregroundColor(.white)
            }
            .padding(32)
            .background(Color.Theme.surface)
            .cornerRadius(16)
        }
    }
}

// MARK: - Preview
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(AppState())
            .environmentObject(AuthenticationViewModel())
    }
}
