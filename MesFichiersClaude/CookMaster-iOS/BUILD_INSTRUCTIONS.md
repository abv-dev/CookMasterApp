# 🍎 CookMaster iOS - Instructions de Build

## 📋 Prérequis

- **macOS** 13.0 ou supérieur
- **Xcode** 15.0 ou supérieur
- **iPhone/iPad** avec iOS 16.0+ (pour tests sur device)
- **Compte Apple Developer** (optionnel pour tests, obligatoire pour publication)

## 🚀 Installation et Configuration

### Étape 1 : Cloner le Projet

```bash
cd CookMaster-iOS
```

### Étape 2 : Créer le Projet Xcode

Comme le code Swift existe déjà, vous devez créer un nouveau projet Xcode :

1. **Ouvrir Xcode**
2. **File > New > Project**
3. Choisir **iOS > App**
4. Configuration :
   - Product Name: `CookMaster`
   - Organization Identifier: `com.cookmaster` (ou votre identifiant)
   - Interface: **SwiftUI**
   - Language: **Swift**
   - Include Tests: Oui (recommandé)
5. Sauvegarder dans le dossier `CookMaster-iOS`

### Étape 3 : Importer les Fichiers Source

1. Dans le navigateur de projet Xcode, **supprimer** :
   - `ContentView.swift` (par défaut)
   - `CookMasterApp.swift` (par défaut)

2. **Glisser-déposer** tous les dossiers depuis le Finder vers Xcode :
   - `CookMaster/App/`
   - `CookMaster/Core/`
   - `CookMaster/Features/`
   - `CookMaster/Models/`
   - `CookMaster/Shared/`
   - `CookMaster/Resources/`

3. Quand la popup apparaît :
   - ✅ Cocher "Copy items if needed"
   - ✅ Sélectionner "Create groups"
   - ✅ Ajouter à la target "CookMaster"

### Étape 4 : Ajouter Info.plist

1. Dans Xcode, sélectionner le projet (racine)
2. Aller dans **Build Settings**
3. Rechercher "Info.plist"
4. Définir le chemin vers : `CookMaster/Info.plist`

### Étape 5 : Configurer les Assets

1. Ouvrir `Resources/Assets.xcassets` dans Xcode
2. Les couleurs sont déjà définies :
   - `BackgroundColor` : #1A1A1A
   - `GoldColor` : #D4AF37
   - `SurfaceColor` : #2D2D2D
   - `AccentColor` : #FF6B35

3. **Ajouter l'icône de l'app** :
   - Sélectionner `AppIcon` dans Assets
   - Glisser vos images d'icônes (1024×1024 pour App Store)
   - Ou générer temporairement via [appicon.co](https://appicon.co)

### Étape 6 : Configuration du Signing

1. Sélectionner le projet > Target "CookMaster"
2. Onglet **Signing & Capabilities**
3. Cocher **Automatically manage signing**
4. Sélectionner votre **Team** (compte Apple Developer)
5. Changer le **Bundle Identifier** si nécessaire

### Étape 7 : Configurer l'API Backend

Éditer `Config.xcconfig` et remplacer :

```
API_BASE_URL = http:/\/localhost:3000/api
```

Par l'URL de votre backend :
- **Local** : `http://localhost:3000/api`
- **Production** : `https://your-api-domain.com/api`

### Étape 8 : Ajouter les Permissions (déjà dans Info.plist)

Les permissions suivantes sont configurées :
- ✅ Camera (scan code-barres)
- ✅ Microphone (commandes vocales)
- ✅ Notifications (timer)
- ✅ Speech Recognition (assistant vocal)

## 🔨 Build et Test

### Build sur Simulateur

1. Sélectionner un simulateur (iPhone 15, iPhone 15 Pro, etc.)
2. **Product > Build** (⌘B)
3. **Product > Run** (⌘R)

L'app devrait se lancer dans le simulateur.

### Build sur Device Réel

1. Connecter votre iPhone/iPad via USB
2. Sélectionner votre device dans la barre d'outils Xcode
3. **Product > Run** (⌘R)
4. Sur votre device :
   - **Settings > General > Device Management**
   - Faire confiance au certificat de développeur

### Tests Unitaires

```bash
# Dans Xcode
Product > Test (⌘U)
```

## 🐛 Résolution de Problèmes

### Erreur : "No such module 'Combine'"

- Solution : Vérifier que le Deployment Target est bien iOS 16.0+

### Erreur : "Missing required modules"

- Solution : **Product > Clean Build Folder** (⌘⇧K), puis rebuild

### L'app crash au démarrage

- Vérifier que toutes les permissions sont dans Info.plist
- Vérifier que l'API_BASE_URL est correcte
- Consulter les logs Xcode (Console en bas)

### Erreurs de signing

- Vérifier que votre compte Apple Developer est actif
- Changer le Bundle Identifier si déjà utilisé
- Ou désactiver "Automatically manage signing" et configurer manuellement

## 📦 Build pour Production

### Créer une Archive

1. Sélectionner **Any iOS Device (arm64)**
2. **Product > Archive**
3. Attendre la fin du build (plusieurs minutes)
4. Xcode Organizer s'ouvre automatiquement

### Distribuer sur TestFlight

1. Dans Organizer, sélectionner votre archive
2. Cliquer **Distribute App**
3. Choisir **App Store Connect**
4. Suivre les étapes :
   - Upload
   - Automatically manage signing
   - Upload

5. Aller sur [App Store Connect](https://appstoreconnect.apple.com)
6. TestFlight > Ajouter des testeurs

### Soumettre à l'App Store

1. Dans App Store Connect
2. **My Apps > CookMaster**
3. Ajouter :
   - Screenshots (obligatoire)
   - Description
   - Keywords
   - Privacy Policy URL
4. **Submit for Review**

## 🎨 Personnalisation

### Changer les Couleurs

Éditer `Shared/Styles/Theme.swift` :

```swift
struct Theme {
    static let background = Color("BackgroundColor")
    static let gold = Color("GoldColor")
    // ...
}
```

### Ajouter des Fonts Custom

1. Ajouter les fichiers `.ttf` ou `.otf` dans Resources
2. Info.plist > Ajouter "Fonts provided by application"
3. Utiliser dans SwiftUI :

```swift
Text("Title")
    .font(.custom("PlayfairDisplay-Bold", size: 32))
```

## 📚 Ressources

- [Documentation SwiftUI](https://developer.apple.com/documentation/swiftui)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

## ✅ Checklist Avant Publication

- [ ] Toutes les features fonctionnent
- [ ] Aucun crash sur tests (1h minimum)
- [ ] Screenshots préparés (5-10 images)
- [ ] Icône app 1024×1024
- [ ] Privacy Policy URL
- [ ] Description App Store (FR + EN)
- [ ] Keywords (100 caractères max)
- [ ] Video preview (optionnel mais recommandé)
- [ ] Testé sur iOS 16, 17, 18
- [ ] Testé sur iPhone et iPad
- [ ] Dark mode testé
- [ ] VoiceOver accessibility testée

---

**Besoin d'aide ?** Ouvrir une issue sur GitHub ou contacter support@cookmaster.app
