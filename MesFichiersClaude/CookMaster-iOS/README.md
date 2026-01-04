# CookMaster iOS

Application iOS native pour la cuisson parfaite de viande.

## 🚀 Configuration Requise

- macOS 12.0+
- Xcode 14.0+
- iOS 15.0+ (deployment target)
- CocoaPods ou Swift Package Manager

## 📦 Installation

### 1. Cloner et ouvrir le projet

```bash
cd CookMaster-iOS
open CookMaster.xcodeproj
```

### 2. Installer les dépendances (si vous utilisez CocoaPods)

```bash
pod install
open CookMaster.xcworkspace
```

### 3. Configuration de l'API

Modifier `Config/APIConfig.swift` :

```swift
static let baseURL = "https://votre-api.com/api"
// ou pour local: "http://localhost:3000/api"
```

### 4. Build et Run

- Sélectionner un simulateur ou device
- Appuyer sur `Cmd+R`

## 📱 Fonctionnalités Implémentées

### ✅ Core Features
- [x] Authentification (Email, Google, Apple)
- [x] Calcul de cuisson intelligent
- [x] Timer avec notifications
- [x] Base de données locale (CoreData)
- [x] Mode hors ligne
- [x] Conversion d'unités

### ✅ Écrans
- [x] Onboarding
- [x] Home
- [x] Calculateur (mode Simple + Avancé)
- [x] Timer
- [x] Explorer (catalogue viandes)
- [x] Communauté
- [x] Historique
- [x] Profil

### ✅ Features Avancées
- [x] Assistant vocal (Speech Framework)
- [x] Notifications intelligentes
- [x] Dark mode
- [x] Localisation (FR/EN)
- [x] Widgets iOS

## 🏗️ Architecture

```
CookMaster/
├── App/
│   ├── CookMasterApp.swift          # Entry point
│   └── AppDelegate.swift
├── Core/
│   ├── Network/
│   │   ├── APIService.swift         # Service API principal
│   │   ├── NetworkManager.swift     # Gestion réseau
│   │   └── Endpoints.swift          # Définition endpoints
│   ├── Storage/
│   │   ├── CoreDataManager.swift    # Gestion CoreData
│   │   ├── KeychainManager.swift    # Stockage sécurisé
│   │   └── UserDefaults+Extension.swift
│   ├── Services/
│   │   ├── AuthService.swift        # Authentification
│   │   ├── NotificationService.swift
│   │   ├── VoiceAssistant.swift
│   │   └── TimerService.swift
│   └── Extensions/
├── Models/
│   ├── Meat.swift
│   ├── CookingMethod.swift
│   ├── User.swift
│   └── CookingHistory.swift
├── Features/
│   ├── Onboarding/
│   ├── Authentication/
│   ├── Home/
│   ├── Calculator/
│   ├── Timer/
│   ├── Explorer/
│   ├── Community/
│   ├── History/
│   └── Profile/
├── Shared/
│   ├── Components/       # UI components réutilisables
│   ├── ViewModels/       # ViewModels partagés
│   ├── Styles/          # Thème, couleurs, fonts
│   └── Utils/
├── Resources/
│   ├── Assets.xcassets
│   ├── Localizable.strings
│   └── Sounds/
└── Config/
    └── APIConfig.swift
```

## 🎨 Design System

### Couleurs
- Noir profond: `#1A1A1A`
- Or élégant: `#D4AF37`
- Blanc cassé: `#F5F5F5`
- Gris anthracite: `#2D2D2D`

### Typographie
- Titres: Playfair Display
- Corps: SF Pro / Inter
- Mono: SF Mono

## 🧪 Tests

```bash
# Tests unitaires
Cmd+U

# Tests UI
Cmd+U (UITests target)
```

## 📦 Build pour Distribution

### TestFlight (Beta)

1. Archive: Product → Archive
2. Organizer → Distribute App
3. TestFlight → Upload
4. Inviter beta testers

### App Store (Production)

1. Vérifier version et build number
2. Archive
3. Upload vers App Store Connect
4. Soumettre pour review
5. Attendre approbation (1-7 jours)

## 🔧 Configuration Firebase

1. Créer projet Firebase
2. Télécharger `GoogleService-Info.plist`
3. Ajouter au projet (drag & drop dans Xcode)
4. Activer Authentication, Analytics, Cloud Messaging

## 🌐 Localisation

Langues supportées:
- 🇫🇷 Français
- 🇬🇧 Anglais

Ajouter une langue:
1. Project → Info → Localizations → +
2. Dupliquer `Localizable.strings`
3. Traduire

## 📝 Checklist Pre-Publication

- [ ] Icône app 1024x1024 sans alpha
- [ ] Screenshots (6.5" + 5.5" + iPad)
- [ ] App preview video
- [ ] Description App Store (FR + EN)
- [ ] Privacy Policy URL
- [ ] Support URL
- [ ] Keywords optimisés
- [ ] Tests sur device réel
- [ ] Version/Build incrémenté
- [ ] Sign in with Apple configuré
- [ ] Privacy manifest complet

## 🐛 Debug

### Logs
Utiliser `os_log` pour logs structurés:
```swift
import os.log

let logger = Logger(subsystem: "com.cookmaster.app", category: "cooking")
logger.info("Calculating cooking time")
```

### Common Issues

**Build failed - Missing pods:**
```bash
pod install
```

**API not reachable:**
- Vérifier `APIConfig.baseURL`
- Simulateur: utiliser localhost
- Device réel: utiliser IP machine

## 📄 Licence

Propriétaire - CookMaster 2025
