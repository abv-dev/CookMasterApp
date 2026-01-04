# 📱 Guide de Création du Projet Xcode - CookMaster iOS

Ce guide vous explique comment créer le projet Xcode et intégrer tous les fichiers Swift existants.

---

## ⚠️ Prérequis

- macOS 12.0 ou supérieur
- Xcode 14.0 ou supérieur
- Compte Apple Developer (gratuit pour test, 99€/an pour publication)

---

## 📋 Étape 1 : Créer le Projet Xcode

### 1.1 Ouvrir Xcode

1. Lancer **Xcode**
2. Sélectionner **"Create a new Xcode project"**

### 1.2 Choisir le Template

1. Sélectionner **iOS** > **App**
2. Cliquer sur **Next**

### 1.3 Configuration du Projet

Remplir les champs suivants :

```
Product Name:           CookMaster
Team:                   [Votre équipe Apple Developer]
Organization Identifier: com.yourcompany
Bundle Identifier:      com.yourcompany.cookmaster
Interface:              SwiftUI
Language:               Swift
Storage:                None (ou SwiftData si disponible)
```

**IMPORTANT** :
- Décochez "Use Core Data"
- Décochez "Include Tests" (vous les ajouterez plus tard)
- Décochez "Include UI Tests"

### 1.4 Choisir l'Emplacement

1. Sélectionner un dossier temporaire (pas le dossier CookMaster-iOS actuel)
2. Cliquer sur **Create**

---

## 📂 Étape 2 : Supprimer les Fichiers par Défaut

Xcode créera automatiquement certains fichiers. Supprimez-les :

1. Dans le navigateur de projet (⌘1), sélectionner :
   - `ContentView.swift` (généré par défaut)
   - `CookMasterApp.swift` (généré par défaut)
2. Clic droit > **Delete**
3. Choisir **"Move to Trash"**

---

## 📥 Étape 3 : Importer les Fichiers Swift Existants

### 3.1 Copier le Dossier CookMaster

1. Dans Finder, naviguer vers : `/home/abv/Cookmaster/MesFichiersClaude/CookMaster-iOS/`
2. Copier le dossier **CookMaster** (celui qui contient App/, Core/, Features/, etc.)

### 3.2 Ajouter au Projet Xcode

1. Glisser-déposer le dossier **CookMaster** dans le navigateur de projet Xcode
2. Dans la boîte de dialogue qui apparaît :
   - ✅ Cocher **"Copy items if needed"**
   - ✅ Cocher **"Create groups"**
   - ✅ Target: CookMaster
3. Cliquer sur **Finish**

---

## 🎨 Étape 4 : Configurer les Assets

### 4.1 Ajouter Assets.xcassets

1. Dans Finder, copier : `CookMaster-iOS/CookMaster/Resources/Assets.xcassets`
2. Dans Xcode, glisser-déposer dans le dossier `CookMaster/Resources/`

### 4.2 Créer les App Icons

**Option A : Utiliser un générateur en ligne**

1. Aller sur https://appicon.co/ ou https://www.appicon.build/
2. Uploader votre logo (1024×1024 PNG)
3. Générer les icônes pour iOS
4. Télécharger et glisser-déposer dans `Assets.xcassets/AppIcon`

**Option B : Créer manuellement**

1. Dans Xcode, sélectionner `Assets.xcassets`
2. Clic droit > **New App Icon**
3. Glisser-déposer vos icônes aux tailles requises :
   - 20pt (2x, 3x)
   - 29pt (2x, 3x)
   - 40pt (2x, 3x)
   - 60pt (2x, 3x)
   - 1024pt (App Store)

---

## ⚙️ Étape 5 : Configurer le Projet

### 5.1 General Settings

1. Sélectionner le projet **CookMaster** (icône bleue en haut)
2. Onglet **General**
3. Configurer :

```
Display Name:           CookMaster
Bundle Identifier:      com.yourcompany.cookmaster
Version:                1.0.0
Build:                  1

Deployment Info:
- Minimum iOS:          15.0
- Device Orientation:   Portrait only (décocher Landscape)
- Status Bar Style:     Dark Content
```

### 5.2 Signing & Capabilities

1. Onglet **Signing & Capabilities**
2. Cocher **"Automatically manage signing"**
3. Sélectionner votre **Team**
4. Ajouter les Capabilities :
   - Cliquer **+ Capability**
   - Ajouter :
     - **Push Notifications**
     - **Background Modes** (Audio, Background fetch)

### 5.3 Build Settings

1. Onglet **Build Settings**
2. Rechercher "Swift Language Version"
3. Définir à **Swift 5**

---

## 📦 Étape 6 : Ajouter les Dépendances

### 6.1 Swift Package Manager (Recommandé)

1. File > **Add Packages...**
2. Ajouter les packages suivants :

**Networking (si nécessaire)** :
```
https://github.com/Alamofire/Alamofire.git
Version: 5.8.0 ou supérieur
```

**Remarque** : Le projet utilise URLSession natif, donc Alamofire est optionnel.

### 6.2 Vérifier les Imports

Ouvrir `CookMaster/Core/Network/APIService.swift` et vérifier que tout compile.

---

## 🔧 Étape 7 : Configurer Info.plist

### 7.1 Copier Info.plist

1. Copier `/home/abv/Cookmaster/MesFichiersClaude/CookMaster-iOS/Info.plist`
2. Le placer à la racine du projet dans Xcode

### 7.2 Vérifier dans les Build Settings

1. Onglet **Build Settings**
2. Rechercher "Info.plist File"
3. Vérifier que le chemin pointe vers `Info.plist`

---

## 🎯 Étape 8 : Build & Test

### 8.1 Premier Build

1. Sélectionner un simulateur : **iPhone 14 Pro** (iOS 16.0+)
2. Appuyer sur **⌘ + B** (Build)
3. Corriger les erreurs éventuelles :

**Erreurs communes** :

**A) "Cannot find type 'X' in scope"**
- Vérifier que tous les fichiers Swift sont ajoutés au target
- Project > Target > Build Phases > Compile Sources

**B) "Module 'X' not found"**
- Vérifier les imports
- Ajouter le package manquant via SPM

**C) Missing API models**
- Voir section suivante pour créer les modèles manquants

### 8.2 Lancer l'App

1. Appuyer sur **⌘ + R** (Run)
2. L'app devrait se lancer dans le simulateur

---

## 📝 Étape 9 : Créer les Modèles API Manquants

Si des modèles sont manquants, créez-les dans `CookMaster/Models/` :

### RegisterRequest.swift
```swift
struct RegisterRequest: Codable {
    let email: String
    let password: String
    let name: String
}
```

### LoginRequest.swift
```swift
struct LoginRequest: Codable {
    let email: String
    let password: String
}
```

### LoginResponse.swift
```swift
struct LoginResponse: Codable {
    let message: String
    let token: String
    let user: User
}
```

### CookingParameters.swift
```swift
struct CookingParameters: Codable {
    let meatId: String
    let cutName: String
    let weight: Double
    let thickness: Double?
    let cookingMethod: String
    let targetDoneness: String
    let cookingTemperature: Int?
}
```

### CreateHistoryRequest.swift
```swift
struct CreateHistoryRequest: Codable {
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let weight: Double
    let actualCookingTime: Int
    let targetDoneness: String
    let notes: String?
    let rating: Int?
}
```

### CookingHistory.swift
```swift
struct CookingHistory: Codable, Identifiable {
    let id: String
    let userId: String
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let weight: Double
    let actualCookingTime: Int
    let targetDoneness: String
    let notes: String?
    let rating: Int?
    let createdAt: Date
}
```

### FavoriteRecipe.swift
```swift
struct FavoriteRecipe: Codable, Identifiable {
    let id: String
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let createdAt: Date
}
```

---

## 🚀 Étape 10 : Configuration pour Publication

### 10.1 Version Release

1. Product > Scheme > **Edit Scheme...**
2. Run > Build Configuration > **Release**

### 10.2 Archive

1. Product > **Archive**
2. Attendre la fin du build
3. La fenêtre **Organizer** s'ouvre automatiquement

### 10.3 Distribution

1. Dans Organizer, sélectionner votre archive
2. Cliquer **Distribute App**
3. Choisir **App Store Connect**
4. Suivre les étapes

---

## ✅ Checklist Finale

Avant de publier, vérifier :

- [ ] Toutes les erreurs de compilation sont corrigées
- [ ] L'app se lance sans crash
- [ ] Les icônes sont ajoutées (toutes les tailles)
- [ ] Info.plist est configuré
- [ ] Les permissions sont décrites (Camera, Photos, etc.)
- [ ] Le bundle identifier est unique
- [ ] La version et le build sont corrects
- [ ] Signing & Capabilities configurés
- [ ] Tests effectués sur simulateur et device physique
- [ ] Firebase configuré (si utilisé)
- [ ] API URL configurée correctement (production)

---

## 🆘 Troubleshooting

### Build Failed

**Erreur** : "Command CompileSwift failed"
**Solution** :
1. Product > Clean Build Folder (⌘ + Shift + K)
2. Fermer Xcode
3. Supprimer `~/Library/Developer/Xcode/DerivedData`
4. Relancer Xcode et rebuild

### Simulator Issues

**Erreur** : "Unable to boot simulator"
**Solution** :
1. Xcode > Preferences > Locations
2. Vérifier que Command Line Tools est configuré
3. Relancer le simulateur

### Signing Issues

**Erreur** : "Failed to create provisioning profile"
**Solution** :
1. Aller sur https://developer.apple.com
2. Account > Certificates, IDs & Profiles
3. Créer manuellement les certificats et profils

---

## 📚 Ressources Utiles

- [Apple Developer Documentation](https://developer.apple.com/documentation/)
- [SwiftUI Tutorials](https://developer.apple.com/tutorials/swiftui)
- [App Distribution Guide](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

---

**Bon courage ! 🚀**

Si vous rencontrez des problèmes, consultez les logs détaillés dans Xcode (⌘ + 9 > Report Navigator).
