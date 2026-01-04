# 🔥 CookMaster - Android

Application Android native développée avec **Kotlin** et **Jetpack Compose** pour calculer précisément les temps de cuisson des viandes.

## 📱 Caractéristiques Techniques

- **Language:** Kotlin 1.9+
- **UI Framework:** Jetpack Compose
- **Architecture:** MVVM + Clean Architecture
- **Minimum SDK:** 26 (Android 8.0)
- **Target SDK:** 34 (Android 14)
- **Dependency Injection:** Hilt (Dagger)
- **Networking:** Retrofit + OkHttp
- **Async:** Coroutines + Flow
- **Local Storage:** Room Database + DataStore
- **Navigation:** Compose Navigation
- **State Management:** StateFlow + ViewModel

## 🏗️ Architecture

```
app/
├── src/main/
│   ├── java/com/cookmaster/
│   │   ├── ui/
│   │   │   ├── theme/           # Material3 Theme
│   │   │   ├── onboarding/      # Écrans d'intro
│   │   │   ├── auth/            # Authentification
│   │   │   ├── home/            # Accueil
│   │   │   ├── calculator/      # Calculateur
│   │   │   ├── timer/           # Timer
│   │   │   ├── explorer/        # Catalogue
│   │   │   ├── history/         # Historique
│   │   │   └── profile/         # Profil
│   │   │
│   │   ├── data/
│   │   │   ├── api/             # API Service
│   │   │   ├── models/          # Models
│   │   │   ├── repository/      # Repositories
│   │   │   └── local/           # Room Database
│   │   │
│   │   ├── domain/
│   │   │   ├── usecase/         # Business Logic
│   │   │   └── repository/      # Repository Interfaces
│   │   │
│   │   └── di/                  # Hilt Modules
│   │
│   └── res/
│       ├── values/              # Colors, Strings, Themes
│       ├── drawable/            # Icons, Images
│       └── xml/                 # Configs
│
└── build.gradle.kts             # Dependencies
```

## 🎨 Design System

### Couleurs
- **Primary:** Gold (#D4AF37)
- **Background:** Dark (#1A1A1A)
- **Surface:** #2D2D2D
- **Accent:** Orange (#FF6B35)
- **Secondary:** Turquoise (#4ECDC4)

### Typographie
- **Display:** Playfair Display
- **Body:** Roboto

## 📦 Dépendances Principales

```kotlin
// Jetpack Compose
implementation("androidx.compose.ui:ui:1.5.4")
implementation("androidx.compose.material3:material3:1.1.2")
implementation("androidx.navigation:navigation-compose:2.7.5")

// Hilt
implementation("com.google.dagger:hilt-android:2.48")
kapt("com.google.dagger:hilt-compiler:2.48")

// Retrofit
implementation("com.squareup.retrofit2:retrofit:2.9.0")
implementation("com.squareup.retrofit2:converter-gson:2.9.0")

// Room
implementation("androidx.room:room-runtime:2.6.0")
implementation("androidx.room:room-ktx:2.6.0")
kapt("androidx.room:room-compiler:2.6.0")

// Coroutines
implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")

// DataStore
implementation("androidx.datastore:datastore-preferences:1.0.0")

// Firebase
implementation("com.google.firebase:firebase-analytics:21.5.0")
implementation("com.google.firebase:firebase-messaging:23.3.1")
```

## 🚀 Installation & Build

### Prérequis
- Android Studio Hedgehog (2023.1.1) ou supérieur
- JDK 17
- Android SDK 34
- Gradle 8.1+

### Steps
1. Cloner le repository
```bash
git clone [url]
cd CookMaster-Android
```

2. Ouvrir dans Android Studio
```bash
open -a "Android Studio" .
```

3. Sync Gradle
```
File > Sync Project with Gradle Files
```

4. Configurer API
```kotlin
// local.properties
API_BASE_URL=https://votre-api.com
```

5. Build & Run
```bash
./gradlew assembleDebug
./gradlew installDebug
```

## 📱 Fonctionnalités

### ✅ Implémentées
- [x] Onboarding (3 écrans)
- [x] Authentification (Login/Register)
- [x] Home avec suggestions
- [x] Calculateur (Simple & Avancé)
- [x] Timer intelligent avec notifications
- [x] Explorer (35+ viandes)
- [x] Historique avec stats
- [x] Profil utilisateur
- [x] API REST complète
- [x] Notifications push
- [x] Mode hors-ligne (Room)

## 🔐 Sécurité

- **JWT Token** stocké dans EncryptedSharedPreferences
- **HTTPS** obligatoire
- **Certificate Pinning** pour API
- **ProGuard** activé pour release
- **Obfuscation** du code

## 🧪 Tests

```bash
# Unit Tests
./gradlew test

# Instrumentation Tests
./gradlew connectedAndroidTest

# UI Tests
./gradlew connectedDebugAndroidTest
```

## 📊 Performance

- **Startup time:** < 2s
- **Memory:** < 100MB
- **APK size:** < 15MB (release)
- **Animations:** 60fps

## 🌍 Localisation

- 🇫🇷 Français (principal)
- 🇬🇧 English (à venir)

## 📝 Release Checklist

- [ ] Version code & name à jour
- [ ] ProGuard rules configurées
- [ ] Signing key configurée
- [ ] Tests passent (100%)
- [ ] Pas de logs en production
- [ ] Analytics configuré
- [ ] Crashlytics activé
- [ ] Store listing prête (description, screenshots)
- [ ] Privacy policy à jour

## 📄 License

Propriétaire - CookMaster © 2025

---

**Version:** 1.0.0
**Build:** 1
**Last Update:** 27 Octobre 2025
