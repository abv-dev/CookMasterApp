# Meat Cooking - Application iOS

Application native iOS pour calculer les temps de cuisson de viande.

## 🚀 Prérequis

- macOS 12.0 ou supérieur
- Xcode 14.0 ou supérieur
- iOS 15.0+ (cible de déploiement)
- Swift 5.7+
- CocoaPods ou Swift Package Manager

## 📱 Fonctionnalités

### Principales
- ✅ Catalogue complet des viandes et morceaux
- ✅ 40+ modes de cuisson différents
- ✅ Calcul précis du temps de cuisson
- ✅ Températures européennes/françaises (normes gustatives idéales)
- ✅ Conversion automatique d'unités (kg/lbs, °C/°F, cm/inches)
- ✅ Timer intégré avec notifications
- ✅ Historique des cuissons avec notes et photos
- ✅ Favoris et recettes sauvegardées
- ✅ Mode hors ligne (données en cache)

### Interface
- Design moderne avec SwiftUI
- Dark mode supporté
- Accessibilité complète
- Animations fluides
- Widgets iOS

## 🏗️ Architecture

### Structure du projet
```
MeatCooking/
├── MeatCookingApp.swift          # Point d'entrée
├── Models/                        # Modèles de données
│   ├── Meat.swift
│   ├── CookingMethod.swift
│   ├── CookingHistory.swift
│   └── User.swift
├── Views/                         # Vues SwiftUI
│   ├── Main/
│   │   ├── MainTabView.swift
│   │   └── HomeView.swift
│   ├── Meats/
│   │   ├── MeatListView.swift
│   │   ├── MeatDetailView.swift
│   │   └── CutSelectionView.swift
│   ├── Cooking/
│   │   ├── CookingCalculatorView.swift
│   │   ├── CookingTimerView.swift
│   │   └── CookingResultView.swift
│   ├── History/
│   │   ├── HistoryListView.swift
│   │   └── HistoryDetailView.swift
│   └── Settings/
│       ├── SettingsView.swift
│       └── PreferencesView.swift
├── ViewModels/                    # View Models
│   ├── MeatViewModel.swift
│   ├── CookingViewModel.swift
│   ├── HistoryViewModel.swift
│   └── UserViewModel.swift
├── Services/                      # Services
│   ├── APIService.swift
│   ├── AuthService.swift
│   ├── CookingCalculatorService.swift
│   ├── NotificationService.swift
│   └── PersistenceService.swift
├── Utilities/                     # Utilitaires
│   ├── UnitConverter.swift
│   ├── Extensions/
│   └── Constants.swift
└── Resources/                     # Ressources
    ├── Assets.xcassets
    ├── Localizable.strings
    └── Sounds/
```

### Pattern MVVM
L'application utilise le pattern MVVM (Model-View-ViewModel) avec SwiftUI:
- **Models**: Structures de données
- **Views**: Interface utilisateur SwiftUI
- **ViewModels**: Logique métier et état

### Technologies utilisées
- **SwiftUI**: Framework UI moderne
- **Combine**: Programmation réactive
- **URLSession**: Requêtes réseau
- **CoreData**: Persistance locale
- **UserNotifications**: Notifications locales et push
- **PhotosUI**: Sélection de photos

## 🔧 Installation

### 1. Cloner le projet
```bash
cd ios-app
```

### 2. Installer les dépendances (si vous utilisez CocoaPods)
```bash
pod install
```

### 3. Ouvrir le projet
```bash
# Avec CocoaPods
open MeatCooking.xcworkspace

# Sans CocoaPods
open MeatCooking.xcodeproj
```

### 4. Configuration
1. Modifier `Constants.swift` avec l'URL de votre API:
```swift
enum API {
    static let baseURL = "http://localhost:3000/api"
    // Production: "https://your-api.com/api"
}
```

2. Configurer les capacités dans Xcode:
   - Push Notifications
   - Background Modes (Remote notifications, Background fetch)

### 5. Build et Run
Sélectionner un simulateur ou appareil et appuyer sur `Cmd+R`

## 📝 Exemples de code

### Service API

\`\`\`swift
// Services/APIService.swift
import Foundation
import Combine

class APIService {
    static let shared = APIService()
    private let baseURL = Constants.API.baseURL

    func fetchMeats() -> AnyPublisher<[Meat], Error> {
        guard let url = URL(string: "\\(baseURL)/meats") else {
            return Fail(error: URLError(.badURL)).eraseToAnyPublisher()
        }

        return URLSession.shared.dataTaskPublisher(for: url)
            .map(\\.data)
            .decode(type: [Meat].self, decoder: JSONDecoder())
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }

    func calculateCookingTime(params: CookingParameters) -> AnyPublisher<CookingResult, Error> {
        guard let url = URL(string: "\\(baseURL)/cooking/calculate") else {
            return Fail(error: URLError(.badURL)).eraseToAnyPublisher()
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONEncoder().encode(params)

        return URLSession.shared.dataTaskPublisher(for: request)
            .map(\\.data)
            .decode(type: CookingResult.self, decoder: JSONDecoder())
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
\`\`\`

### Timer avec notifications

\`\`\`swift
// Services/NotificationService.swift
import UserNotifications
import AVFoundation

class NotificationService: ObservableObject {
    static let shared = NotificationService()

    @Published var remainingTime: Int = 0
    private var timer: Timer?
    private var audioPlayer: AVAudioPlayer?

    func requestAuthorization() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            if granted {
                print("Notification authorization granted")
            }
        }
    }

    func startTimer(duration: Int, completion: @escaping () -> Void) {
        remainingTime = duration

        // Notification locale à la fin
        let content = UNMutableNotificationContent()
        content.title = "Cuisson terminée!"
        content.body = "Votre viande est prête"
        content.sound = .default

        let trigger = UNTimeIntervalNotificationTrigger(timeInterval: TimeInterval(duration * 60), repeats: false)
        let request = UNNotificationRequest(identifier: "cookingTimer", content: content, trigger: trigger)

        UNUserNotificationCenter.current().add(request)

        // Timer local
        timer = Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            self.remainingTime -= 1

            if self.remainingTime <= 0 {
                self.stopTimer()
                self.playSound()
                completion()
            }
        }
    }

    func stopTimer() {
        timer?.invalidate()
        timer = nil
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: ["cookingTimer"])
    }

    private func playSound() {
        guard let url = Bundle.main.url(forResource: "timer_done", withExtension: "mp3") else { return }

        do {
            audioPlayer = try AVAudioPlayer(contentsOf: url)
            audioPlayer?.play()
        } catch {
            print("Error playing sound: \\(error)")
        }
    }
}
\`\`\`

### Vue de calcul de cuisson

\`\`\`swift
// Views/Cooking/CookingCalculatorView.swift
import SwiftUI

struct CookingCalculatorView: View {
    @StateObject private var viewModel = CookingViewModel()
    @State private var selectedMeat: Meat?
    @State private var selectedCut: MeatCut?
    @State private var weight: Double = 0.5
    @State private var thickness: Double = 3.0
    @State private var cookingMethod: CookingMethod = .poele
    @State private var targetDoneness: Doneness = .aPoint

    var body: some View {
        NavigationView {
            Form {
                // Sélection de la viande
                Section("Viande") {
                    Picker("Type de viande", selection: $selectedMeat) {
                        ForEach(viewModel.meats) { meat in
                            Text(meat.name).tag(meat as Meat?)
                        }
                    }

                    if let meat = selectedMeat {
                        Picker("Morceau", selection: $selectedCut) {
                            ForEach(meat.cuts) { cut in
                                Text(cut.name).tag(cut as MeatCut?)
                            }
                        }
                    }
                }

                // Paramètres
                Section("Paramètres") {
                    HStack {
                        Text("Poids")
                        Spacer()
                        TextField("0.5", value: $weight, format: .number)
                            .keyboardType(.decimalPad)
                            .multilineTextAlignment(.trailing)
                        Text("kg")
                    }

                    HStack {
                        Text("Épaisseur")
                        Spacer()
                        TextField("3", value: $thickness, format: .number)
                            .keyboardType(.decimalPad)
                            .multilineTextAlignment(.trailing)
                        Text("cm")
                    }
                }

                // Mode de cuisson
                Section("Mode de cuisson") {
                    Picker("Méthode", selection: $cookingMethod) {
                        ForEach(CookingMethod.allCases) { method in
                            Text(method.displayName).tag(method)
                        }
                    }

                    Picker("Cuisson", selection: $targetDoneness) {
                        ForEach(Doneness.allCases) { doneness in
                            Text(doneness.displayName).tag(doneness)
                        }
                    }
                }

                // Bouton de calcul
                Section {
                    Button(action: calculate) {
                        HStack {
                            Spacer()
                            Text("Calculer le temps de cuisson")
                                .fontWeight(.semibold)
                            Spacer()
                        }
                    }
                    .disabled(!canCalculate)
                }

                // Résultat
                if let result = viewModel.cookingResult {
                    Section("Résultat") {
                        ResultRow(title: "Temps de cuisson", value: "\\(result.cookingTime) min")
                        ResultRow(title: "Temps de repos", value: "\\(result.restingTime) min")
                        ResultRow(title: "Temps total", value: "\\(result.totalTime) min")
                        ResultRow(title: "Température à cœur", value: "\\(result.targetCoreTemperature)°C")

                        NavigationLink(destination: CookingTimerView(result: result)) {
                            Text("Démarrer le timer")
                                .fontWeight(.semibold)
                        }
                    }
                }
            }
            .navigationTitle("Calcul de cuisson")
        }
        .onAppear {
            viewModel.loadMeats()
        }
    }

    private var canCalculate: Bool {
        selectedMeat != nil && selectedCut != nil && weight > 0
    }

    private func calculate() {
        guard let meat = selectedMeat, let cut = selectedCut else { return }

        viewModel.calculateCookingTime(
            meat: meat,
            cut: cut,
            weight: weight,
            thickness: thickness,
            method: cookingMethod,
            doneness: targetDoneness
        )
    }
}

struct ResultRow: View {
    let title: String
    let value: String

    var body: some View {
        HStack {
            Text(title)
            Spacer()
            Text(value)
                .fontWeight(.semibold)
        }
    }
}
\`\`\`

## 🎨 Personnalisation

### Thème et couleurs
Modifier `Assets.xcassets` pour changer les couleurs de l'application.

### Localisation
Ajouter des fichiers `.strings` dans `Resources/Localizable.strings` pour supporter plusieurs langues.

## 🧪 Tests

### Tests unitaires
```bash
Cmd+U
```

### Tests UI
Les tests UI sont disponibles dans le dossier `MeatCookingUITests/`.

## 📦 Build pour production

### 1. Configuration
- Changer l'URL de l'API vers la production
- Configurer les certificats de distribution
- Vérifier les capacités (Push Notifications, etc.)

### 2. Archive
Product → Archive

### 3. Distribution
- App Store Connect
- TestFlight pour les beta-testeurs
- Distribution Ad-Hoc ou Enterprise

## 🔐 Sécurité

- Les tokens JWT sont stockés dans le Keychain
- HTTPS uniquement en production
- Validation des données côté client
- Pas de données sensibles en clair

## 📱 Widgets (optionnel)

Des widgets iOS peuvent être ajoutés pour afficher:
- Les recettes favorites
- L'historique récent
- Un timer de cuisson en cours

## 🐛 Debug

### Logs
Utiliser `os_log` pour les logs structurés:
```swift
import os.log

let logger = Logger(subsystem: "com.meatcooking.app", category: "cooking")
logger.info("Calculating cooking time for \\(meatName)")
```

## 📄 Licence
ISC
