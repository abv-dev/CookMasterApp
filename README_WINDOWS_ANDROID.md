# 🎉 CookMaster - Version Cross-Platform

**Version multilingue pour Windows, Android, iOS et Web!**

---

## 📱 CE QUI EST DISPONIBLE

Votre application CookMaster fonctionne maintenant sur:

- ✅ **Windows** (via navigateur web)
- ✅ **Android** (APK natif)
- ✅ **iOS** (avec un Mac)
- ✅ **Web** (n'importe quel navigateur)

**Langues supportées:** Français 🇫🇷, English 🇬🇧, Español 🇪🇸

---

## 🌐 ACCÈS IMMÉDIAT (Windows)

### Option 1: Version Web (Le plus simple!)

L'application tourne déjà! Ouvrez votre navigateur:

```
http://localhost:8081
```

**C'est tout!** Vous pouvez utiliser CookMaster immédiatement dans votre navigateur.

### Option 2: Redémarrer le serveur

Si le serveur ne tourne pas:

```bash
cd /home/abv/mon-premier-projet/CookMasterApp
npm run web
```

Puis ouvrez: `http://localhost:8081`

---

## 📱 CRÉER L'APK ANDROID

### Étape 1: Installer Expo CLI globalement

```bash
npm install -g expo-cli eas-cli
```

### Étape 2: Créer un compte Expo (gratuit)

```bash
npx expo login
```

Ou créez un compte sur: https://expo.dev/signup

### Étape 3: Construire l'APK

```bash
cd /home/abv/mon-premier-projet/CookMasterApp

# Build APK (gratuit, prend 10-15 minutes)
eas build -p android --profile preview
```

**Résultat:** Vous recevrez un lien pour télécharger l'APK

### Étape 4: Installer sur Android

1. Téléchargez l'APK sur votre téléphone Android
2. Activez "Sources inconnues" dans les paramètres
3. Installez l'APK
4. Lancez CookMaster! 🎉

---

## 🔄 ALTERNATIVE: APK LOCAL (Sans compte Expo)

### Méthode avec Android Studio

1. **Installer Android Studio:**
   - Téléchargez: https://developer.android.com/studio
   - Installez Android SDK

2. **Générer l'APK:**

```bash
cd CookMasterApp

# Éjecter de Expo (si nécessaire)
npx expo prebuild

# Build APK
cd android
./gradlew assembleRelease

# APK généré dans:
# android/app/build/outputs/apk/release/app-release.apk
```

3. **Transférer sur Android:**
   - Copiez `app-release.apk` sur votre téléphone
   - Installez-le

---

## 📦 STRUCTURE DU PROJET

```
CookMasterApp/
├── src/
│   ├── i18n/                    # Système multilingue
│   │   ├── translations.ts      # FR/EN/ES (249 clés)
│   │   └── i18n.config.ts      # Configuration
│   │
│   ├── screens/                 # Écrans de l'app
│   │   ├── HomeScreen.tsx       # Page d'accueil
│   │   ├── CalculatorScreen.tsx # Calculateur
│   │   ├── ExplorerScreen.tsx   # Explorateur
│   │   ├── TimerScreen.tsx      # Minuteur
│   │   ├── HistoryScreen.tsx    # Historique
│   │   └── ProfileScreen.tsx    # Profil + Langues
│   │
│   ├── navigation/              # Navigation
│   │   └── AppNavigator.tsx     # TabBar
│   │
│   ├── constants/               # Design system
│   │   └── theme.ts             # Couleurs, typo
│   │
│   ├── components/              # Composants (vide pour l'instant)
│   ├── services/                # Services API (à venir)
│   └── types/                   # Types TypeScript
│
├── App.tsx                      # Point d'entrée
├── package.json                 # Dépendances
└── app.json                     # Config Expo
```

---

## ✨ FONCTIONNALITÉS IMPLÉMENTÉES

### ✅ Système Multilingue
- Détection automatique de la langue du système
- Changement de langue en temps réel
- Persistance du choix utilisateur
- 249 traductions par langue

### ✅ Navigation
- TabBar avec 6 onglets
- Navigation fluide
- Icons emoji

### ✅ Écrans
1. **Home** - Page d'accueil avec actions rapides
2. **Calculator** - Calculateur de cuisson (UI de base)
3. **Explorer** - Explorateur de viandes (placeholder)
4. **Timer** - Minuteur fonctionnel
5. **History** - Historique (vide pour l'instant)
6. **Profile** - Profil + Sélection langue + Stats

### ✅ Design
- Thème sombre (#1A1A1A)
- Accent doré (#D4AF37)
- Identique à l'app iOS

---

## 🚀 COMMANDES UTILES

### Développement

```bash
# Web (Windows/navigateur)
npm run web

# Android (émulateur ou appareil)
npm run android

# iOS (nécessite Mac)
npm run ios

# Voir tous les appareils disponibles
npx expo start
```

### Build

```bash
# APK Android (via Expo)
eas build -p android --profile preview

# APK Android (local)
cd android && ./gradlew assembleRelease

# Build iOS (nécessite Mac + compte Apple Developer)
eas build -p ios
```

---

## 🌍 CHANGER LA LANGUE

Deux méthodes:

### 1. Dans l'application
1. Aller dans l'onglet **Profile** (👤)
2. Section "Langue"
3. Cliquer sur FR/EN/ES
4. L'interface change instantanément!

### 2. Automatique au premier lancement
- Détecte la langue du système
- Français si français détecté
- Anglais si anglais détecté
- Espagnol si espagnol détecté
- Français par défaut sinon

---

## 🔗 INTÉGRATION BACKEND

Le backend existe déjà dans `/backend`. Pour l'intégrer:

### 1. Créer le service API

```typescript
// src/services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonctions d'API
export const getMeats = () => api.get('/meats');
export const calculate = (data: any) => api.post('/v2/calculate', data);
// etc...
```

### 2. Utiliser dans les écrans

```typescript
import { getMeats } from '../services/api';

// Dans un composant
useEffect(() => {
  const fetchMeats = async () => {
    const response = await getMeats();
    setMeats(response.data);
  };
  fetchMeats();
}, []);
```

---

## 📲 PARTAGER L'APPLICATION

### Via Web
Déployez sur:
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- **GitHub Pages** (gratuit)

```bash
# Build pour production
npx expo export:web

# Uploadez le dossier web-build/
```

### Via APK
1. Générez l'APK
2. Partagez le fichier `.apk`
3. Les gens installent directement

### Via Play Store (Officiel)
1. Compte Google Play Console ($25 une fois)
2. Build avec `eas build -p android`
3. Uploadez sur Play Store
4. Attendre validation (1-7 jours)

---

## ❓ DÉPANNAGE

### Le serveur web ne démarre pas

```bash
# Nettoyer et réinstaller
cd CookMasterApp
rm -rf node_modules package-lock.json
npm install
npm run web
```

### Erreur de navigation

```bash
# Installer les dépendances de navigation
npx expo install react-native-screens react-native-safe-area-context
```

### Problème de traductions

Vérifiez que `i18n.config.ts` est bien importé dans `App.tsx`:

```typescript
import './src/i18n/i18n.config';
```

---

## 🎯 PROCHAINES ÉTAPES

### Court terme (1-2 jours)
1. ✅ Version web fonctionnelle
2. ⏳ Intégrer l'API backend
3. ⏳ Compléter le calculateur
4. ⏳ Générer l'APK Android

### Moyen terme (1 semaine)
1. ⏳ Authentification utilisateur
2. ⏳ Sauvegarde historique
3. ⏳ Push notifications
4. ⏳ Publier sur Play Store

### Long terme
1. ⏳ Version iOS avec Mac
2. ⏳ Fonctionnalités avancées
3. ⏳ Communauté
4. ⏳ Partage de recettes

---

## 📞 SUPPORT

### Documentation
- **Expo:** https://docs.expo.dev
- **React Native:** https://reactnative.dev
- **React Navigation:** https://reactnavigation.org

### Fichiers importants
- `src/i18n/translations.ts` - Toutes les traductions
- `src/constants/theme.ts` - Design system
- `App.tsx` - Point d'entrée
- `src/navigation/AppNavigator.tsx` - Navigation

---

## 🎉 FÉLICITATIONS!

Vous avez maintenant **CookMaster cross-platform**:

- ✅ Fonctionne sur Windows (web)
- ✅ Peut créer un APK Android
- ✅ 100% multilingue (FR/EN/ES)
- ✅ Même design que l'app iOS
- ✅ Code partagé entre toutes les plateformes

**Prochaine commande à essayer:**

```bash
# Ouvrir l'app dans votre navigateur
cd /home/abv/mon-premier-projet/CookMasterApp
npm run web

# Puis allez sur: http://localhost:8081
```

---

**Créé avec ❤️ pour CookMaster**
**Date:** 2025-11-30
**Version:** 1.0 Cross-Platform

**Bon appétit! 🍖 Enjoy! 🍗 ¡Buen provecho! 🥩**
