# 🚀 Guide de Démarrage Rapide

Ce guide vous permettra de lancer rapidement l'ensemble du projet Meat Cooking.

## ⚡ Installation express (15 minutes)

### Étape 1 : Backend API (5 minutes)

```bash
# 1. Installer MongoDB (si pas déjà installé)
# macOS :
brew tap mongodb/brew
brew install mongodb-community

# Linux (Ubuntu/Debian) :
sudo apt-get install -y mongodb

# Windows : Télécharger depuis mongodb.com

# 2. Démarrer MongoDB
# macOS/Linux :
brew services start mongodb-community
# ou
sudo systemctl start mongodb

# Windows : MongoDB démarre automatiquement après installation

# 3. Installer le backend
cd backend
npm install

# 4. Configuration
cp .env.example .env
# Laisser les valeurs par défaut pour un démarrage rapide

# 5. Remplir la base de données
node seed/seedDatabase.js

# 6. Démarrer le serveur
npm run dev

# ✅ Le serveur devrait être accessible sur http://localhost:3000
```

### Étape 2A : Application iOS (5 minutes)

**Prérequis** : macOS avec Xcode installé

```bash
# 1. Ouvrir le projet
cd ios-app
open MeatCooking.xcodeproj

# 2. Dans Xcode :
# - Sélectionner un simulateur (iPhone 14 par exemple)
# - Appuyer sur Cmd+R pour build et run

# 3. Modifier l'URL de l'API si nécessaire :
# Ouvrir Utilities/Constants.swift
# Changer API.baseURL = "http://localhost:3000/api"

# ✅ L'application devrait se lancer dans le simulateur
```

### Étape 2B : Application Android (5 minutes)

**Prérequis** : Android Studio installé

```bash
# 1. Ouvrir le projet
cd android-app
# Dans Android Studio : File → Open → Sélectionner android-app/

# 2. Créer gradle.properties
echo 'API_BASE_URL="http://10.0.2.2:3000/api"' >> gradle.properties

# 3. Sync Gradle
# Android Studio → File → Sync Project with Gradle Files

# 4. Créer un émulateur (si nécessaire)
# Tools → Device Manager → Create Device
# Sélectionner Pixel 6 avec Android 13

# 5. Run
# Appuyer sur Shift+F10 ou cliquer sur le bouton Run

# ✅ L'application devrait se lancer dans l'émulateur
```

## 🧪 Test rapide de l'API

### Test avec curl

```bash
# Test de connexion
curl http://localhost:3000

# Récupérer les catégories de viandes
curl http://localhost:3000/api/meats/categories

# Récupérer toutes les viandes
curl http://localhost:3000/api/meats

# Récupérer les modes de cuisson
curl http://localhost:3000/api/cooking/methods
```

### Test avec un client REST

Utiliser Postman, Insomnia ou un autre client REST :

**1. Créer un compte :**
```
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123",
  "name": "Test User"
}
```

**2. Calculer un temps de cuisson :**
```
POST http://localhost:3000/api/cooking/calculate
Content-Type: application/json

{
  "meatId": "<meat_id_from_meats_list>",
  "cutName": "Filet",
  "cookingMethod": "poele",
  "weight": { "value": 0.5, "unit": "kg" },
  "dimensions": {
    "thickness": 3,
    "unit": "cm"
  },
  "cookingTemperature": { "value": 180, "unit": "celsius" },
  "targetDoneness": "à point"
}
```

## 🐛 Problèmes courants

### Backend

**Problème** : "Error: connect ECONNREFUSED 127.0.0.1:27017"
**Solution** : MongoDB n'est pas démarré
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb

# Vérifier le statut
brew services list  # macOS
sudo systemctl status mongodb  # Linux
```

**Problème** : "Port 3000 already in use"
**Solution** : Un autre processus utilise le port 3000
```bash
# Trouver le processus
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Tuer le processus ou changer le port dans .env
PORT=3001
```

### iOS

**Problème** : "Cannot connect to localhost"
**Solution** : Vérifier l'URL dans Constants.swift
```swift
// Pour simulateur iOS
static let baseURL = "http://localhost:3000/api"

// Pour appareil physique (remplacer IP par l'IP de votre machine)
static let baseURL = "http://192.168.1.100:3000/api"
```

**Problème** : Build failed avec erreur de dépendances
**Solution** :
```bash
# Dans le dossier ios-app/
pod deintegrate
pod install
```

### Android

**Problème** : "Failed to connect to localhost"
**Solution** : L'émulateur Android n'accède pas à localhost
```properties
# Utiliser 10.0.2.2 pour l'émulateur
API_BASE_URL="http://10.0.2.2:3000/api"

# Pour appareil physique (remplacer IP)
API_BASE_URL="http://192.168.1.100:3000/api"
```

**Problème** : Gradle sync failed
**Solution** :
```bash
# Nettoyer et rebuild
./gradlew clean
./gradlew build

# Ou dans Android Studio
Build → Clean Project
Build → Rebuild Project
```

## 📱 Utilisation de l'application

### Premier lancement

1. **Créer un compte** : Écran d'inscription avec email/mot de passe
2. **Choisir la viande** : Sélectionner le type (bœuf, porc, etc.) et le morceau
3. **Entrer les paramètres** :
   - Poids (ou dimensions)
   - Mode de cuisson
   - Cuisson désirée (bleu, saignant, à point, etc.)
4. **Calculer** : L'app affiche le temps de cuisson et la température à cœur
5. **Timer** : Lancer le timer avec notifications

### Fonctionnalités à tester

- ✅ Calcul de temps de cuisson
- ✅ Conversion d'unités (kg ↔ lbs, °C ↔ °F)
- ✅ Timer avec notifications
- ✅ Historique des cuissons
- ✅ Favoris
- ✅ Dark mode (iOS/Android)

## 🔄 Workflow de développement

### Backend
```bash
# Terminal 1 : MongoDB
brew services start mongodb-community

# Terminal 2 : Backend en mode dev (auto-reload)
cd backend
npm run dev

# Terminal 3 : Tests
npm test
```

### iOS
```bash
# Ouvrir Xcode
cd ios-app
open MeatCooking.xcodeproj

# Build et run : Cmd+R
# Tests : Cmd+U
```

### Android
```bash
# Ouvrir Android Studio
cd android-app
studio .

# Build et run : Shift+F10
# Tests : Shift+F9
```

## 📊 Données de test

### Exemples de calculs

**Filet de bœuf à la poêle :**
- Poids : 0.5 kg
- Épaisseur : 3 cm
- Méthode : poêle (180°C)
- Cuisson : à point (55°C)
- **Résultat** : ~15-20 minutes + 5 minutes de repos

**Côte de bœuf au four :**
- Poids : 1.5 kg
- Épaisseur : 5 cm
- Méthode : four traditionnel (180°C)
- Cuisson : saignant (52°C)
- **Résultat** : ~40-50 minutes + 15 minutes de repos

**Poulet entier rôti :**
- Poids : 1.8 kg
- Méthode : four chaleur tournante (170°C)
- Cuisson : bien cuit (74°C)
- **Résultat** : ~75-80 minutes + 10 minutes de repos

## 🎯 Prochaines étapes

Une fois l'application lancée :

1. **Explorer le code** : Lire les README de chaque partie
2. **Personnaliser** : Modifier les thèmes, couleurs, textes
3. **Ajouter des données** : Compléter la base de viandes
4. **Implémenter le timer** : Suivre les exemples de code fournis
5. **Tester** : Utiliser l'app pour vos vraies cuissons !

## 💡 Astuces

### Développement rapide

**Hot reload :**
- Backend : `nodemon` recharge automatiquement
- iOS : SwiftUI Preview pour voir les changements en temps réel
- Android : Jetpack Compose Preview

**Debug efficace :**
```bash
# Backend : logs détaillés
DEBUG=* npm run dev

# iOS : breakpoints et console
# Android : Logcat
```

### Base de données

**Réinitialiser les données :**
```bash
cd backend
node seed/seedDatabase.js
```

**Ajouter une nouvelle viande :**
Éditer `backend/seed/meatData.js` et relancer le seed.

### Performance

**Optimiser les requêtes :**
- Utiliser le cache pour les données statiques
- Pagination pour l'historique
- Compression des images

## 📚 Ressources

- [Documentation Backend](./backend/README.md)
- [Documentation iOS](./ios-app/README.md)
- [Documentation Android](./android-app/README.md)
- [README Principal](./README.md)

## ✅ Checklist de vérification

Avant de commencer le développement :

- [ ] MongoDB installé et démarré
- [ ] Backend lancé et accessible sur http://localhost:3000
- [ ] Base de données remplie (au moins 4 catégories de viandes)
- [ ] iOS ou Android lancé dans un émulateur/simulateur
- [ ] Connexion API fonctionnelle (test d'une requête)
- [ ] Création de compte réussie
- [ ] Premier calcul de cuisson effectué

**Bon développement ! 🎉**
