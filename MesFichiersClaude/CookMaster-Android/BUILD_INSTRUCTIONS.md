# 🤖 CookMaster Android - Instructions de Build

## 📋 Prérequis

- **Android Studio** Hedgehog (2023.1.1) ou supérieur
- **JDK** 17 ou supérieur
- **Android SDK** avec API Level 34
- **Device/Émulateur** Android 8.0+ (API 26+)
- **Compte Google Play Developer** (optionnel pour tests, obligatoire pour publication - 25€)

## 🚀 Installation et Configuration

### Étape 1 : Ouvrir le Projet dans Android Studio

```bash
cd CookMaster-Android
```

1. **Ouvrir Android Studio**
2. **File > Open**
3. Sélectionner le dossier `CookMaster-Android`
4. Cliquer **OK**

Android Studio va automatiquement :
- Détecter le projet Gradle
- Télécharger les dépendances
- Indexer les fichiers (peut prendre quelques minutes)

### Étape 2 : Configuration Gradle

Les fichiers sont déjà configurés :
- ✅ `build.gradle.kts` (root)
- ✅ `settings.gradle.kts`
- ✅ `app/build.gradle.kts`
- ✅ `gradle.properties`

**Premier sync Gradle** :
- Android Studio devrait proposer "Sync Now"
- Sinon : **File > Sync Project with Gradle Files**
- Attendre la fin du téléchargement (première fois ~5-10 min)

### Étape 3 : Configurer l'API Backend

Éditer `app/build.gradle.kts` ligne 27-28 :

**Pour l'émulateur Android** (localhost) :
```kotlin
buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:3000/api\"")
```

**Pour un device physique** (remplacer par l'IP de votre PC) :
```kotlin
buildConfigField("String", "API_BASE_URL", "\"http://192.168.1.XXX:3000/api\"")
```

**Pour la production** :
```kotlin
buildConfigField("String", "API_BASE_URL", "\"https://your-api-domain.com/api\"")
```

> 💡 **Astuce** : Sur Windows avec WSL, utilisez l'IP du WSL visible avec `ip addr`

### Étape 4 : Configuration Firebase (Optionnel)

Pour Analytics, Crashlytics, et Auth :

1. Aller sur [Firebase Console](https://console.firebase.google.com)
2. **Ajouter un projet** > Nom: "CookMaster"
3. Ajouter une app Android :
   - Package name: `com.cookmaster`
   - Télécharger `google-services.json`
4. Placer `google-services.json` dans `app/`
5. Si non utilisé, commenter dans `build.gradle.kts` :
   ```kotlin
   // id("com.google.gms.google-services")
   ```

### Étape 5 : Ajouter les Resources Manquantes

#### Icône de l'App

1. **Clic droit** sur `res` > **New > Image Asset**
2. **Icon Type** : Launcher Icons
3. **Path** : Sélectionner votre logo (PNG/SVG)
4. **Name** : ic_launcher
5. Cliquer **Next** puis **Finish**

Ou utiliser un générateur en ligne :
- [Icon Kitchen](https://icon.kitchen/)
- [App Icon Generator](https://www.appicon.co/)

#### Icône de Notification

Dans `res/drawable/`, créer `ic_notification.xml` :

```xml
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24"
    android:tint="@color/gold">
  <path
      android:fillColor="@android:color/white"
      android:pathData="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z"/>
</vector>
```

### Étape 6 : Créer les Fichiers XML Manquants

#### `res/xml/backup_rules.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<full-backup-content>
    <include domain="sharedpref" path="."/>
    <exclude domain="sharedpref" path="secure_prefs.xml"/>
</full-backup-content>
```

#### `res/xml/data_extraction_rules.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<data-extraction-rules>
    <cloud-backup>
        <include domain="sharedpref" path="."/>
        <exclude domain="sharedpref" path="secure_prefs.xml"/>
    </cloud-backup>
</data-extraction-rules>
```

### Étape 7 : Configuration ProGuard (Release)

Créer `app/proguard-rules.pro` (si absent) :

```proguard
# Keep data classes
-keep class com.cookmaster.data.models.** { *; }

# Retrofit
-keepattributes Signature, InnerClasses, EnclosingMethod
-keepattributes RuntimeVisibleAnnotations, RuntimeVisibleParameterAnnotations
-keepclassmembers,allowshrinking,allowobfuscation interface * {
    @retrofit2.http.* <methods>;
}

# Gson
-keepattributes Signature
-keepattributes *Annotation*
-keep class com.google.gson.** { *; }

# Hilt
-keep class dagger.hilt.** { *; }
-keep class javax.inject.** { *; }
```

## 🔨 Build et Test

### Build Debug (Développement)

1. **Sélectionner un device/émulateur** dans la barre d'outils
2. Cliquer sur le bouton **Run** (▶️) ou `Shift+F10`
3. L'app se lance automatiquement

### Créer un Émulateur

Si vous n'avez pas d'émulateur :

1. **Tools > Device Manager**
2. **Create Device**
3. Choisir un modèle (ex: Pixel 7)
4. Sélectionner une image système (ex: Android 14 - API 34)
5. Télécharger si nécessaire
6. Cliquer **Finish**

### Tests sur Device Physique

1. **Activer le mode développeur** sur votre Android :
   - Paramètres > À propos du téléphone
   - Appuyer 7 fois sur "Numéro de build"
2. **Activer USB Debugging** :
   - Paramètres > Options pour développeurs
   - Activer "Débogage USB"
3. Connecter via USB
4. Autoriser le débogage sur le téléphone
5. Le device apparaît dans Android Studio

### Logs et Debug

- **Logcat** : Voir les logs en temps réel (Alt+6)
- **Debug** : Placer des breakpoints et débugger (Shift+F9)

## 🏗️ Build Release (Production)

### Étape 1 : Créer un Keystore (Signature)

```bash
keytool -genkey -v -keystore cookmaster-release-key.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias cookmaster
```

**Remplir les informations demandées et NOTER le mot de passe !**

### Étape 2 : Configurer le Signing

Créer `keystore.properties` à la racine :

```properties
storePassword=YOUR_STORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=cookmaster
storeFile=../cookmaster-release-key.jks
```

⚠️ **Ajouter `keystore.properties` au `.gitignore` !**

Éditer `app/build.gradle.kts` :

```kotlin
// Avant android { }
val keystorePropertiesFile = rootProject.file("keystore.properties")
val keystoreProperties = Properties()
keystoreProperties.load(FileInputStream(keystorePropertiesFile))

android {
    // ...
    signingConfigs {
        create("release") {
            keyAlias = keystoreProperties["keyAlias"] as String
            keyPassword = keystoreProperties["keyPassword"] as String
            storeFile = file(keystoreProperties["storeFile"] as String)
            storePassword = keystoreProperties["storePassword"] as String
        }
    }
    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("release")
            // ...
        }
    }
}
```

### Étape 3 : Build Release APK/AAB

**Pour tester (APK) :**
```bash
./gradlew assembleRelease
```
Fichier généré : `app/build/outputs/apk/release/app-release.apk`

**Pour publier (AAB - recommandé) :**
```bash
./gradlew bundleRelease
```
Fichier généré : `app/build/outputs/bundle/release/app-release.aab`

Ou via Android Studio :
1. **Build > Generate Signed Bundle / APK**
2. Choisir **Android App Bundle**
3. Sélectionner le keystore
4. Build type : **release**
5. Cliquer **Create**

## 📱 Publication sur Google Play Store

### Étape 1 : Créer un Compte Developer

1. Aller sur [Google Play Console](https://play.google.com/console)
2. Payer les frais uniques de **25€**
3. Compléter le profil

### Étape 2 : Créer l'Application

1. **Créer une application**
2. Nom : "CookMaster"
3. Langue : Français
4. Type : Application
5. Gratuit / Payant : Gratuit

### Étape 3 : Remplir les Informations

**Fiche du Store :**
- Screenshots (minimum 2) :
  - Téléphone : 1080×1920 ou 1080×2340
  - Tablette 7" (optionnel)
- Icône haute résolution : 512×512 PNG
- Feature Graphic : 1024×500 PNG
- Description courte (80 caractères max)
- Description complète (4000 caractères max)
- Catégorie : **Cuisine et boissons**

**Contenu de l'app :**
- Privacy Policy URL (obligatoire)
- Questionnaire de contenu
- Classification par âge (probablement PEGI 3)

**Tarification et distribution :**
- Prix : Gratuit
- Pays : Tous (ou sélection)

### Étape 4 : Upload AAB

1. **Production > Créer une version**
2. Upload `app-release.aab`
3. Nom de version : 1.0.0 (1)
4. Notes de version (ce qui est nouveau)
5. **Enregistrer** puis **Examiner la version**
6. **Lancer le déploiement en production**

### Étape 5 : Examen Google

- Délai : Quelques heures à quelques jours
- Statut visible dans Play Console
- Si rejet : Corriger et re-soumettre

## 🐛 Résolution de Problèmes

### Erreur Gradle Sync Failed

```bash
# Dans le terminal Android Studio
./gradlew clean
./gradlew build --refresh-dependencies
```

### Erreur : "Manifest merger failed"

- Vérifier que tous les packages sont `com.cookmaster`
- Nettoyer le projet : **Build > Clean Project**
- Rebuild : **Build > Rebuild Project**

### App crash au démarrage

1. Vérifier les logs Logcat
2. Vérifier que l'API_BASE_URL est accessible
3. S'assurer que Hilt est bien configuré (`@HiltAndroidApp`)
4. Vérifier les permissions dans AndroidManifest.xml

### ProGuard supprime trop de code (Release)

- Ajouter des règles dans `proguard-rules.pro`
- Tester en release avant de publier
- Utiliser `-keep` pour les classes problématiques

### Firebase errors

Si vous n'utilisez pas Firebase :
- Commenter les lignes Firebase dans `build.gradle.kts`
- Supprimer les imports Firebase du code

## 🎨 Personnalisation

### Changer les Couleurs

Éditer `res/values/colors.xml` et `ui/theme/Theme.kt`.

### Changer le Nom de l'App

Éditer `res/values/strings.xml` :
```xml
<string name="app_name">VotreNom</string>
```

### Ajouter des Traductions

Créer `res/values-XX/strings.xml` (XX = code langue)
- `values-fr/` : Français
- etc.

## 📚 Ressources

- [Android Developers](https://developer.android.com)
- [Jetpack Compose](https://developer.android.com/jetpack/compose)
- [Material Design 3](https://m3.material.io/)
- [Play Console Help](https://support.google.com/googleplay/android-developer)

## ✅ Checklist Avant Publication

- [ ] Testé sur 3+ devices (émulateur + physiques)
- [ ] Testé sur Android 8, 10, 12, 14
- [ ] Aucun crash pendant 30min d'utilisation
- [ ] Screenshots préparés (phone + tablet)
- [ ] Feature graphic 1024×500
- [ ] Icône 512×512 haute résolution
- [ ] Description (FR + EN)
- [ ] Privacy Policy URL
- [ ] Permissions justifiées
- [ ] ProGuard testé (release build)
- [ ] Taille APK < 50MB
- [ ] Dark theme fonctionne
- [ ] TalkBack accessibility testée

---

**Besoin d'aide ?** Ouvrir une issue sur GitHub ou contacter support@cookmaster.app
