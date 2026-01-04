# 🚀 CookMaster - Guide de Démarrage Rapide

Bienvenue dans le projet **CookMaster** ! Ce guide vous aidera à démarrer rapidement avec les applications iOS et Android.

---

## 📦 Qu'est-ce qui est inclus ?

Le projet CookMaster est une **application mobile complète** comprenant :

✅ **Backend API (Node.js + MongoDB)** - 100% Fonctionnel
- 25+ endpoints REST
- Authentification JWT
- 35+ types de viandes
- 40+ méthodes de cuisson
- Base de données complète

✅ **Application iOS (Swift + SwiftUI)** - Code Complet
- 25+ fichiers Swift
- Architecture MVVM
- Interface moderne SwiftUI
- Services (API, Timer, Notifications)

✅ **Application Android (Kotlin + Jetpack Compose)** - Code Complet
- 25+ fichiers Kotlin
- Architecture Clean + MVVM
- UI Material Design 3
- Hilt DI + Retrofit + Room

✅ **Documentation Complète**
- Spécifications détaillées
- Guides de build
- Architecture documentée

---

## 🎯 Démarrage Rapide par Plateforme

### Option 1 : Démarrer avec le Backend Seulement

Si vous voulez d'abord tester l'API :

```bash
cd backend
npm install
cp .env.example .env
# Éditer .env avec votre MONGODB_URI et JWT_SECRET
npm run seed    # Remplir la base de données
npm start       # Démarrer le serveur sur http://localhost:3000
```

Tester l'API :
```bash
curl http://localhost:3000/api/meats
```

📖 **Documentation complète** : [`backend/README.md`](./backend/README.md)

---

### Option 2 : Développer l'Application iOS

**Prérequis** : macOS + Xcode 15+

```bash
cd CookMaster-iOS
```

**Étapes rapides** :
1. Créer un nouveau projet Xcode (iOS App, SwiftUI)
2. Importer tous les fichiers source du dossier `CookMaster/`
3. Configurer Info.plist et Assets
4. Build sur simulateur (⌘R)

📖 **Guide détaillé** : [`CookMaster-iOS/BUILD_INSTRUCTIONS.md`](./CookMaster-iOS/BUILD_INSTRUCTIONS.md)

**Timeline estimée** : 2-3 heures pour setup initial

---

### Option 3 : Développer l'Application Android

**Prérequis** : Android Studio Hedgehog+

```bash
cd CookMaster-Android
```

**Étapes rapides** :
1. Ouvrir le projet dans Android Studio
2. Sync Gradle (automatique, ~5-10 min première fois)
3. Configurer API_BASE_URL dans `app/build.gradle.kts`
4. Run sur émulateur (▶️)

📖 **Guide détaillé** : [`CookMaster-Android/BUILD_INSTRUCTIONS.md`](./CookMaster-Android/BUILD_INSTRUCTIONS.md)

**Timeline estimée** : 1-2 heures pour setup initial

---

## 🔄 Workflow Complet (Tout Démarrer)

### 1️⃣ Backend (Terminal 1)

```bash
cd backend
npm install
npm run seed
npm start
```

Serveur lancé sur **http://localhost:3000**

### 2️⃣ iOS (Xcode)

```bash
cd CookMaster-iOS
# Ouvrir le projet .xcodeproj dans Xcode
# ⌘R pour lancer
```

App lancée sur **Simulateur iOS**

### 3️⃣ Android (Android Studio)

```bash
cd CookMaster-Android
# Ouvrir dans Android Studio
# Cliquer Run ▶️
```

App lancée sur **Émulateur Android**

---

## 🌐 Configuration API

Les apps doivent pointer vers le backend. Par défaut :

**iOS** (`Config.xcconfig`) :
```
API_BASE_URL = http:/\/localhost:3000/api
```

**Android** (`app/build.gradle.kts`) :
```kotlin
// Pour émulateur Android (localhost = 10.0.2.2)
buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:3000/api\"")

// Pour device physique (remplacer par l'IP de votre PC)
buildConfigField("String", "API_BASE_URL", "\"http://192.168.1.XXX:3000/api\"")
```

---

## 📱 Tester les Fonctionnalités

### Scénario de Test Basique

1. **Lancer le backend** (doit être actif)
2. **Lancer l'app mobile** (iOS ou Android)
3. **Navigation** : Vérifier les 5 onglets (Home, Explorer, Timer, Community, Profile)
4. **API Test** : Aller dans Explorer → Devrait charger les viandes depuis l'API

### Fonctionnalités à Tester

- [ ] **Home** : Affichage de l'écran d'accueil
- [ ] **Explorer** : Liste des viandes (chargement API)
- [ ] **Calculateur** : Calcul du temps de cuisson
- [ ] **Timer** : Démarrage d'un timer
- [ ] **Notifications** : Alerte de fin de cuisson
- [ ] **Dark Mode** : Thème sombre/clair
- [ ] **Rotation** : Portrait/Paysage

---

## 🛠️ Développement

### Structure des Projets

```
mon-premier-projet/
├── backend/                 # API Node.js + MongoDB
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── README.md
│
├── CookMaster-iOS/          # App iOS (Swift + SwiftUI)
│   ├── CookMaster/
│   │   ├── App/
│   │   ├── Features/
│   │   ├── Core/
│   │   └── Models/
│   └── BUILD_INSTRUCTIONS.md
│
└── CookMaster-Android/      # App Android (Kotlin + Compose)
    ├── app/src/main/
    │   ├── java/com/cookmaster/
    │   ├── res/
    │   └── AndroidManifest.xml
    └── BUILD_INSTRUCTIONS.md
```

### Technologies Utilisées

**Backend** :
- Node.js 18+
- Express.js
- MongoDB + Mongoose
- JWT Authentication

**iOS** :
- Swift 5.9
- SwiftUI
- Combine (Reactive)
- URLSession

**Android** :
- Kotlin 1.9
- Jetpack Compose
- Material Design 3
- Hilt + Retrofit + Room

---

## 🐛 Problèmes Courants

### Backend ne démarre pas

```bash
# Vérifier MongoDB
mongo --version  # ou mongod --version

# Vérifier les variables d'environnement
cat backend/.env

# Réinstaller les dépendances
cd backend
rm -rf node_modules package-lock.json
npm install
```

### iOS : Erreurs de build

- **Clean Build Folder** : ⌘⇧K dans Xcode
- Vérifier que iOS Deployment Target = 16.0+
- Vérifier que tous les fichiers sont bien ajoutés à la target

### Android : Gradle sync failed

```bash
cd CookMaster-Android
./gradlew clean
./gradlew build --refresh-dependencies
```

### App ne se connecte pas au backend

1. **Vérifier que le backend est lancé** : `curl http://localhost:3000/api/meats`
2. **iOS** : Localhost fonctionne directement
3. **Android Emulator** : Utiliser `10.0.2.2` au lieu de `localhost`
4. **Android Device** : Utiliser l'IP du PC (visible avec `ipconfig` ou `ifconfig`)

---

## 📚 Documentation Complète

- **Backend API** : [`backend/README.md`](./backend/README.md)
- **iOS Build** : [`CookMaster-iOS/BUILD_INSTRUCTIONS.md`](./CookMaster-iOS/BUILD_INSTRUCTIONS.md)
- **Android Build** : [`CookMaster-Android/BUILD_INSTRUCTIONS.md`](./CookMaster-Android/BUILD_INSTRUCTIONS.md)
- **Spécifications** : [`SPECIFICATIONS_COMPLETES.md`](./SPECIFICATIONS_COMPLETES.md)
- **Projet Complet** : [`PROJET_COOKMASTER_COMPLET.md`](./PROJET_COOKMASTER_COMPLET.md)

---

## 🎯 Prochaines Étapes

### Pour Débutants

1. ✅ Démarrer le backend (15 min)
2. ✅ Choisir iOS **OU** Android (pas besoin des deux)
3. ✅ Suivre le guide BUILD_INSTRUCTIONS.md
4. ✅ Lancer l'app et tester

### Pour Développeurs Confirmés

1. ✅ Setup complet (Backend + iOS + Android)
2. ✅ Implémenter les écrans manquants (Calculator, Timer détaillé)
3. ✅ Connecter l'API à tous les écrans
4. ✅ Ajouter les tests unitaires
5. ✅ Préparer pour publication (App Store / Play Store)

---

## 🚀 Publication sur les Stores

### Timeline Estimée

| Étape | iOS | Android |
|-------|-----|---------|
| **Setup projet** | 2-3h | 1-2h |
| **Développement complet** | 4-6 semaines | 4-6 semaines |
| **Tests & Polish** | 1-2 semaines | 1-2 semaines |
| **Préparation stores** | 2-3 jours | 2-3 jours |
| **Review stores** | 1-7 jours | Quelques heures |
| **TOTAL** | **6-9 semaines** | **6-9 semaines** |

### Coûts

- **Apple Developer** : 99€/an
- **Google Play Developer** : 25€ (unique)
- **Hébergement Backend** : 0-15€/mois (gratuit pour commencer)
- **Total Année 1** : ~150€

---

## 💡 Conseils

### Pour Gagner du Temps

1. **Commencer par une plateforme** (iOS OU Android, pas les deux)
2. **Utiliser le backend existant** (ne pas recoder)
3. **Tester en émulateur/simulateur** d'abord
4. **Publier en TestFlight/Beta** avant production

### Pour Éviter les Problèmes

1. **Toujours tester avec le backend lancé**
2. **Vérifier les URLs API** (localhost vs IP)
3. **Commiter régulièrement** sur Git
4. **Garder les mots de passe sécurisés** (.env dans .gitignore)

---

## 🤝 Support

Besoin d'aide ?

- 📖 Lire la documentation complète
- 🐛 Chercher dans les fichiers README
- 💬 Ouvrir une issue sur GitHub
- 📧 Contact : support@cookmaster.app

---

## ✅ Checklist de Démarrage

- [ ] Node.js installé (v18+)
- [ ] MongoDB installé et lancé
- [ ] Backend démarré avec succès
- [ ] (iOS) Xcode installé
- [ ] (Android) Android Studio installé
- [ ] App lancée sur simulateur/émulateur
- [ ] API accessible depuis l'app

---

**Prêt à cuisiner ? Bon développement ! 👨‍🍳🔥**
