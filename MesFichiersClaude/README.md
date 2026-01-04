# 🥩 Meat Cooking - Application de Cuisson de Viande

Application mobile complète pour calculer les temps et températures de cuisson de viande avec précision.

## 📱 Vue d'ensemble

**Meat Cooking** est une application mobile native (iOS et Android) qui aide les cuisiniers à obtenir la cuisson parfaite pour tous types de viandes. L'application utilise des algorithmes précis et des normes européennes/françaises de dégustation gustative pour garantir les meilleurs résultats.

### ✨ Fonctionnalités principales

- 🥩 **Base de données complète** : Tous types de viandes (bœuf, porc, agneau, volaille, gibier, poisson, fruits de mer)
- 🔪 **Morceaux détaillés** : Filet, entrecôte, côte, épaule, etc. avec recommandations spécifiques
- 🔥 **40+ modes de cuisson** : Four, poêle, plancha, grill, barbecue, sous-vide, mijoteuse, fumoir, etc.
- 🌡️ **Températures européennes** : Normes françaises/européennes de dégustation (pas de normes américaines)
- ⏱️ **Calcul précis** : Basé sur le poids, l'épaisseur, le mode de cuisson et la température
- 🔔 **Timer intégré** : Notifications et alarmes pour ne jamais rater une cuisson
- 📊 **Historique** : Sauvegarde des cuissons avec notes, photos et évaluation
- 🔄 **Conversion d'unités** : kg/lbs, °C/°F, cm/inches
- ⭐ **Favoris** : Recettes préférées pour un accès rapide

## 🏗️ Architecture du projet

Le projet est divisé en trois parties :

```
mon-premier-projet/
├── backend/         # API REST Node.js/Express + MongoDB
├── ios-app/         # Application native iOS (Swift + SwiftUI)
├── android-app/     # Application native Android (Kotlin + Jetpack Compose)
└── shared/          # Documentation et données partagées
```

### Backend - API REST
- **Technologie** : Node.js, Express, MongoDB
- **Fonctionnalités** :
  - Base de données complète des viandes et modes de cuisson
  - Algorithme de calcul du temps de cuisson
  - Gestion des utilisateurs et authentification JWT
  - Historique des cuissons
  - Conversion d'unités
- [Documentation détaillée du backend →](./backend/README.md)

### iOS - Application native
- **Technologie** : Swift, SwiftUI, Combine
- **Minimum** : iOS 15.0+
- **Features** : Timer avec notifications, widgets, dark mode
- [Documentation détaillée iOS →](./ios-app/README.md)

### Android - Application native
- **Technologie** : Kotlin, Jetpack Compose, Coroutines
- **Minimum** : Android 7.0+ (API 24)
- **Features** : Timer avec notifications, widgets, Material Design 3
- [Documentation détaillée Android →](./android-app/README.md)

## 🚀 Démarrage rapide

### Prérequis
- **Backend** :
  - Node.js >= 16.x
  - MongoDB >= 5.0
- **iOS** :
  - macOS avec Xcode 14+
- **Android** :
  - Android Studio Giraffe+
  - JDK 17

### Installation

#### 1. Backend API

```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances
npm install

# Créer le fichier .env
cp .env.example .env

# Modifier .env avec vos paramètres MongoDB

# Remplir la base de données
node seed/seedDatabase.js

# Démarrer le serveur
npm run dev
```

L'API sera accessible sur `http://localhost:3000`

#### 2. Application iOS

```bash
cd ios-app

# Ouvrir le projet dans Xcode
open MeatCooking.xcodeproj

# Modifier Constants.swift avec l'URL de votre API
# Build et Run (Cmd+R)
```

#### 3. Application Android

```bash
cd android-app

# Ouvrir dans Android Studio
# Modifier gradle.properties avec l'URL de l'API
# Build et Run (Shift+F10)
```

## 🎯 Modes de cuisson supportés

L'application supporte plus de 40 modes de cuisson différents :

### Cuissons au four
- Four traditionnel, Four à convection, Four vapeur, Four chaleur tournante

### Poêle et plancha
- Poêle, Plancha, Wok, Sauteuse

### Grillades
- Grill électrique/gaz
- Barbecue (charbon, gaz, électrique)
- Salamandre

### Cuissons mijotées
- Cocotte, Mijoteuse, Braisage, Ragoût

### Basse température
- Sous-vide
- Basse température au four

### Rôtissage
- Rôtissoire horizontale/verticale

### Cuissons vapeur et humides
- Vapeur, Court-bouillon, Pochage

### Cuissons rapides
- Saisie, Flambé

### Fumage
- Fumoir chaud (60-90°C)
- Fumoir froid (< 30°C)

### Cuissons spéciales
- Air fryer, Micro-ondes, Pierre chaude

### Cuissons traditionnelles
- Tajine, Papillote, Croûte de sel, Croûte d'argile

### Cuissons professionnelles
- Plancha professionnelle
- Grill pierre de lave
- Grill salamandre

## 🌡️ Températures de cuisson à cœur

L'application utilise les **normes européennes et françaises** de dégustation gustative (pas de normes américaines qui surcuisent la viande).

### Bœuf
- **Bleu** : 45°C - Centre froid et rouge
- **Saignant** : 50-52°C - Centre rouge et tiède
- **À point** : 55-58°C - Centre rosé et chaud
- **Bien cuit** : 63-65°C - Uniformément cuit, légèrement rosé

### Porc
- **Rosé** : 63°C - Légèrement rosé (cuisson moderne)
- **À point** : 68-70°C - Juste cuit et juteux
- **Bien cuit** : 72-75°C - Bien cuit traditionnel

### Agneau
- **Saignant** : 54-55°C - Rosé vif
- **À point** : 58-60°C - Rosé tendre
- **Bien cuit** : 65-70°C - Cuit mais juteux

### Volaille
- **Bien cuit** : 74°C - Jus clair, chair blanche et juteuse

## 💡 Algorithme de calcul

L'application utilise un algorithme sophistiqué qui prend en compte :

1. **Poids de la viande** : Temps de base par kilogramme
2. **Épaisseur** : Temps de base par centimètre (plus précis pour certains morceaux)
3. **Température de cuisson** : Ajustement en fonction de la chaleur (four, plancha, etc.)
4. **Mode de cuisson** : Facteur d'ajustement spécifique à chaque méthode
5. **Température à cœur cible** : Ajustement selon la cuisson désirée
6. **Temps de repos** : Recommandé pour chaque type de viande

### Formule de calcul
```
Temps = (Poids × TempsParKg × 0.6) + (Épaisseur × TempsParCm × 0.4)
      × AjustementTempérature
      × FacteurMethode
      × AjustementCuisson
      + TempsRepos
```

## 📊 API Endpoints

### Authentification
- `POST /api/auth/register` - Créer un compte
- `POST /api/auth/login` - Se connecter
- `GET /api/auth/verify` - Vérifier le token

### Viandes
- `GET /api/meats` - Liste des viandes
- `GET /api/meats/categories` - Catégories
- `GET /api/meats/:id/cuts/:cutName` - Détails d'un morceau

### Calcul
- `POST /api/cooking/calculate` - Calculer le temps de cuisson
- `POST /api/cooking/remaining-time` - Temps restant
- `GET /api/cooking/methods` - Liste des modes de cuisson

### Historique
- `GET /api/history` - Historique utilisateur
- `POST /api/history` - Sauvegarder une cuisson
- `GET /api/history/stats/summary` - Statistiques

### Utilisateur
- `GET /api/user/profile` - Profil
- `PUT /api/user/preferences` - Préférences (unités, etc.)
- `POST /api/user/favorites` - Ajouter aux favoris

[Documentation API complète →](./backend/README.md)

## 🔄 Conversion d'unités

L'application convertit automatiquement toutes les unités selon les préférences utilisateur :

### Poids
- Kilogrammes (kg)
- Grammes (g)
- Livres (lbs)
- Onces (oz)

### Température
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

### Dimensions
- Centimètres (cm)
- Millimètres (mm)
- Mètres (m)
- Pouces (inches)
- Pieds (ft)

## 🗃️ Base de données

La base de données inclut actuellement :

### Viandes disponibles
- ✅ **Bœuf** : Filet, Entrecôte, Faux-filet, Côte de bœuf, Bavette, Rumsteck, Paleron
- ✅ **Porc** : Filet mignon, Côte de porc, Rôti, Travers, Épaule
- ✅ **Agneau** : Gigot, Carré, Épaule, Côtelettes
- ✅ **Volaille** : Poulet (entier, blanc, cuisse)

### À venir
- 🔜 Canard
- 🔜 Dinde
- 🔜 Gibier (sanglier, cerf, chevreuil)

## 📸 Screenshots

[À ajouter : captures d'écran des applications iOS et Android]

## 🛠️ Technologies

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT pour l'authentification
- Bcrypt pour les mots de passe

### iOS
- Swift 5.7+
- SwiftUI
- Combine
- CoreData
- UserNotifications

### Android
- Kotlin
- Jetpack Compose
- Coroutines & Flow
- Room Database
- Retrofit
- Hilt (Dependency Injection)

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 TODO

### Backend
- [ ] Ajouter plus de types de viandes (canard, gibier, poisson)
- [ ] Upload et stockage de photos
- [ ] Recettes complètes avec étapes
- [ ] Cache Redis pour les performances
- [ ] Tests unitaires et d'intégration

### Mobile (iOS & Android)
- [ ] Implémenter le timer avec notifications
- [ ] Upload de photos dans l'historique
- [ ] Widgets pour l'écran d'accueil
- [ ] Mode hors ligne complet
- [ ] Partage de recettes entre utilisateurs
- [ ] Support de plusieurs langues
- [ ] Thème personnalisable

## 📄 Licence

ISC License

## 👨‍💻 Auteur

Projet créé pour l'apprentissage et la pratique du développement d'applications mobiles natives.

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Consulter la documentation dans chaque dossier

---

**Bon appétit ! 🍖**
