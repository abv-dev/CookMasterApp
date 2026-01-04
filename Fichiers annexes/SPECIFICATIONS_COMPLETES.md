# 📱 CookMaster - Spécifications Complètes
## Application Professionnelle de Cuisson de Viande

**Date** : 26 octobre 2025
**Version** : 1.0 (Production Ready)
**Plateformes** : iOS (App Store) + Android (Play Store)

---

## 🎯 Vision du Projet

**CookMaster** est une application mobile professionnelle qui permet aux cuisiniers de tous niveaux de réussir parfaitement la cuisson de leurs viandes grâce à des calculs précis, des températures certifiées et une interface élégante style "chef professionnel".

### Positionnement
- **Public cible** : Cuisiniers amateurs à confirmés, passionnés de gastronomie
- **Style** : Professionnel/Chef - Look premium, noir/or, haute gastronomie
- **Différenciation** : Températures européennes certifiées, mode expert optionnel, assistant vocal

---

## 📊 Caractéristiques Principales

### Plateformes
- ✅ **iOS** : Application native Swift + SwiftUI (iOS 15+)
- ✅ **Android** : Application native Kotlin + Jetpack Compose (Android 7.0+)
- ✅ Publication sur **App Store** et **Google Play Store**

### Modèle Économique
- 💰 **Gratuit sans publicité**
- 🎁 Toutes les fonctionnalités accessibles gratuitement
- 📈 Monétisation future possible (freemium) mais pas au lancement

### Langues Supportées
- 🇫🇷 **Français** (langue principale)
- 🇬🇧 **Anglais** (marché international)
- Traduction complète de l'interface et du contenu

### Budget et Timeline
- 💵 **Budget année 1** : < 200€
  - Apple Developer Account : 99€/an
  - Google Play Developer : 25€ (unique)
  - Hébergement : Gratuit (Railway/Render + MongoDB Atlas)
- ⏱️ **Délai** : 4-6 mois (Version premium complète)

---

## 🎨 Design et Expérience Utilisateur

### Style Visuel : Professionnel/Chef

#### Palette de Couleurs
**Couleurs principales :**
- Noir profond : `#1A1A1A` (fond principal)
- Or élégant : `#D4AF37` (accents, CTA)
- Blanc cassé : `#F5F5F5` (textes principaux)
- Gris anthracite : `#2D2D2D` (cartes, surfaces)

**Couleurs fonctionnelles :**
- Succès : `#4CAF50` (vert)
- Alerte : `#FF6B6B` (rouge doux)
- Information : `#D4AF37` (or)
- Températures : Dégradé rouge→orange→jaune

#### Typographie
- **Titres** : Playfair Display (élégant, serif)
- **Corps** : Inter / SF Pro (lisible, sans-serif)
- **Chiffres** : SF Mono (températures, timer)

#### Iconographie
- Icons minimalistes ligne fine (stroke width: 1.5)
- Illustrations custom pour types de viandes
- Photos haute qualité des plats (stock + user-generated)

#### Layout
- **Mode Simple** : 3 étapes maximum, gros boutons
- **Mode Expert** : Tous paramètres disponibles, interface dense
- Navigation par onglets (Material 3 / iOS native)
- Animations fluides (60fps minimum)

---

## 🎯 Fonctionnalités Détaillées

### 1. Core Features (MVP)

#### A. Calcul de Cuisson
**Écran principal - 3 modes :**

**Mode Simple (par défaut) :**
1. Sélectionner viande + morceau (visuel avec photos)
2. Entrer poids (slider + input manuel)
3. Choisir cuisson (saignant, à point, etc.) avec preview visuel
4. → Résultat instantané : temps + température + timer

**Mode Avancé (toggle) :**
- Tous paramètres du mode simple +
- Dimensions précises (épaisseur, longueur, largeur)
- Température four/plancha personnalisée
- Ajustements manuels (altitude, viande froide/ambiante)
- Historique des ajustements personnels

**Mode Expert (unlock après 10 utilisations) :**
- Graphique de température en temps réel
- Carry-over effect visualisé
- Suggestion ajustements selon conditions
- Mode multi-pièces (calcul pour plusieurs morceaux)

**Algorithme :**
```
Temps = (Poids × TempsParKg × 0.6) + (Épaisseur × TempsParCm × 0.4)
      × AjustementTempérature
      × FacteurMéthode
      × AjustementCuisson
      + TempsRepos

+ Carry-over effect : +3-5°C pendant repos
+ Indice de confiance : 0-100%
```

#### B. Timer Intelligent

**Fonctionnalités :**
- Timer haute précision (secondes)
- Notifications à paliers : 75%, 90%, 95%, 100%
- Vibration + son personnalisable
- Possibilité de pause (avec warning)
- Mode "Always On" (écran ne s'éteint pas)
- Widget iOS/Android (timer sur écran d'accueil)

**Notifications intelligentes :**
- "Dans 5 minutes, pensez à sortir votre viande"
- "Temps de repos : 10 minutes restantes"
- "Température cible atteinte : 55°C"

**Modes spéciaux :**
- Mode "Surveillance" : rappels toutes les X minutes
- Mode "Repos" : timer automatique après cuisson
- Multi-timers : jusqu'à 3 cuissons simultanées

#### C. Base de Données des Viandes

**Catégories (6) :**
1. Bœuf (5 morceaux)
2. Porc (5 morceaux)
3. Agneau (4 morceaux)
4. Veau (3 morceaux)
5. Volaille (Poulet 3, Canard 3, Dinde 2)
6. Gibier (Cerf, Chevreuil, Sanglier, Lièvre, Faisan)

**Total : 35+ morceaux**

**Pour chaque morceau :**
- Photo haute qualité (2-3 angles)
- Nom FR + EN + description
- Poids/dimensions typiques
- Températures : dégustation + sécurité UE
- 3-5 modes de cuisson recommandés
- Conseils de chef (marinade, repos, finition)
- Accords (vins, sauces suggérées)
- Vidéo courte (optionnel, YouTube embed)

**Modes de cuisson (40+) :**
Organisés par catégories :
- Four (4) : traditionnel, convection, vapeur, chaleur tournante
- Poêle/Plancha (4)
- Grillades (5) : grill, 3 barbecues, salamandre
- Mijotées (4)
- Basse température (2) : sous-vide, four BT
- Rôtissage (2)
- Vapeur/Humide (3)
- Rapides (2)
- Fumage (2)
- Spéciales (3)
- Traditionnelles (4)
- Professionnelles (3)

#### D. Conversion d'Unités

**Automatique selon préférences utilisateur :**
- Poids : kg ↔ lbs, g ↔ oz
- Température : °C ↔ °F ↔ K
- Dimensions : cm ↔ inches ↔ ft

**Convertisseur manuel intégré :**
- Accessible depuis menu outils
- Conversion instantanée
- Historique des conversions

### 2. Fonctionnalités Sociales

#### A. Partage de Recettes

**Système de communauté :**
- Partager ses cuissons réussies
- Feed communautaire avec filtres
- Recherche par viande/mode/difficulté
- Système de tags (#BBQ #Weekend #Festif)

**Une recette partagée contient :**
- Photos (1-5)
- Viande + morceau + mode de cuisson
- Paramètres utilisés (poids, temps, température)
- Notes personnelles du chef
- Astuces et modifications
- Évaluation personnelle (1-5 étoiles)

**Modération :**
- Signalement de contenu inapproprié
- Validation automatique (AI) + manuelle si besoin
- Badges pour contributeurs actifs

#### B. Photos et Notes

**Upload de photos :**
- 1-5 photos par cuisson
- Compression automatique (optimisation stockage)
- Filtres style "food photography"
- Possibilité d'ajouter légendes

**Notes personnelles :**
- Rich text editor (gras, italique, listes)
- Voice-to-text (dictée)
- Tags personnalisés
- Recherche full-text dans notes

**Stockage :**
- Firebase Storage / Cloudinary
- Optimisation images : WebP format
- Backup cloud automatique

#### C. Système de Notation

**Rating système :**
- Note 1-5 étoiles pour recettes communautaires
- Like/Unlike simple
- Commentaires (avec modération)
- Top recettes du mois/année

**Gamification légère :**
- Badges : "Premier partage", "10 recettes", "Chef populaire"
- Niveau utilisateur (1-10) selon activité
- Pas de points/XP (garde style pro)

### 3. Fonctionnalités Avancées

#### A. Mode Hors Ligne Complet

**Architecture :**
- Base de données locale (Room/CoreData)
- Sync automatique en arrière-plan
- Stratégie : "Online-first with offline fallback"

**Disponible hors ligne :**
- ✅ Toutes les viandes et températures
- ✅ Calcul de cuisson
- ✅ Timer
- ✅ Historique personnel
- ✅ Favoris
- ❌ Feed communautaire (nécessite internet)
- ❌ Partage (mis en file, envoyé quand connecté)

**Indicateur de statut :**
- Icône connexion en header
- Toast "Mode hors ligne" à l'ouverture
- Badge sur fonctions nécessitant internet

#### B. Assistant Vocal

**Fonctionnalités vocales :**

**Commandes principales :**
- "Lance le timer"
- "Pause le timer"
- "Quelle température pour bœuf saignant ?"
- "Combien de temps pour 500g de poulet ?"
- "Ajoute 5 minutes au timer"
- "Quelle est ma température actuelle ?"

**Assistant pendant cuisson :**
- Annonces automatiques : "Plus que 5 minutes"
- Réponse à questions contextuelles
- Mains-free complet (écran verrouillable)

**Technologies :**
- iOS : Speech Framework + Siri Shortcuts
- Android : Google Speech Recognition + Assistant Actions
- Support français + anglais

**Activation :**
- Bouton micro (toujours visible)
- Phrase magique : "Hey CookMaster"
- Widget Siri/Google Assistant

#### C. Notifications Intelligentes

**Types de notifications :**

1. **Timer** (haute priorité)
   - Sons personnalisables (8 choix)
   - Vibration patterns (3 niveaux)
   - Notification persistante (Android)
   - Badge icon (iOS)

2. **Rappels intelligents**
   - "Sortir viande du frigo" (30-45min avant)
   - "Préparer la poêle" (10min avant)
   - "Temps de retourner la viande" (mi-cuisson)

3. **Suggestions contextuelles**
   - "Week-end BBQ ?" (vendredi soir)
   - "Nouvelle recette de saison" (produits de saison)
   - "Votre gigot préféré est tendance" (communauté)

4. **Sécurité alimentaire**
   - "Attention : viande hachée à 71°C obligatoire"
   - "Zone de danger : réchauffer à 63°C minimum"

**Paramétrage granulaire :**
- On/off par catégorie
- Horaires silencieux
- Fréquence des suggestions
- Sons et vibrations

#### D. Scan de Code-Barres

**Fonctionnalité :**
- Scanner code-barres emballage viande
- Reconnaissance produit automatique
- Pré-remplissage poids + type + morceau
- Historique des scans

**Base de données produits :**
- Open Food Facts API (gratuit)
- Base propriétaire pour viandes courantes
- Contribution communautaire (signaler nouveaux produits)

**Information extraite :**
- Type de viande (bœuf, porc, etc.)
- Morceau (si indiqué)
- Poids net
- Date de péremption (rappel intelligent)
- Label qualité (Label Rouge, Bio, etc.)

**Fallback si produit inconnu :**
- Recherche manuelle assistée
- Contribution à la base (crowdsourcing)
- Sauvegarde pour amélioration future

### 4. Fonctionnalités Utilisateur

#### A. Compte Utilisateur

**Authentification :**
- Email + mot de passe (Firebase Auth)
- Connexion Google (OAuth)
- Connexion Apple (Sign in with Apple - obligatoire iOS)
- Mot de passe oublié (reset par email)

**Profil utilisateur :**
- Photo de profil
- Nom + pseudo
- Bio courte (50 caractères)
- Préférences de cuisson par défaut
- Statistiques personnelles

**Préférences :**
- Unités par défaut (métrique/impérial)
- Langue (FR/EN)
- Notifications (granulaire)
- Mode par défaut (Simple/Avancé)
- Dark mode : Auto/Toujours/Jamais

#### B. Historique et Favoris

**Historique des cuissons :**
- Liste chronologique illimitée
- Recherche et filtres avancés
- Export CSV/PDF
- Statistiques visuelles :
  - Graphique types de viandes cuisinées
  - Modes de cuisson préférés
  - Taux de réussite
  - Évolution dans le temps

**Favoris :**
- Sauvegarder recettes personnelles
- Favoris communautaires
- Collections personnalisées (ex: "BBQ été", "Fêtes")
- Accès rapide depuis home
- Widget favoris (iOS/Android)

**Statistiques avancées :**
- Total cuissons : X
- Viande préférée : Bœuf (45%)
- Mode de cuisson favori : Four (38%)
- Taux de réussite : 92%
- Temps total en cuisine : X heures
- Badges débloqués : X/50

#### C. Paramètres

**Organisation des settings :**

**Général :**
- Langue
- Unités (poids, température, dimensions)
- Mode par défaut (Simple/Avancé)
- Thème (Clair/Sombre/Auto)

**Notifications :**
- Timer (son, vibration)
- Rappels intelligents
- Suggestions
- Sécurité alimentaire
- Communauté (nouveau like, commentaire)

**Compte :**
- Modifier profil
- Changer email/mot de passe
- Confidentialité (profil public/privé)
- Données et stockage
- Supprimer compte

**Assistant vocal :**
- Activer/désactiver
- Langue de reconnaissance
- Phrase d'activation
- Feedback vocal (on/off)

**Avancé :**
- Cache (nettoyer)
- Synchronisation (forcer sync)
- Mode hors ligne (gérer stockage)
- Debug (logs, beta features)

**À propos :**
- Version app
- Crédits
- Licence
- Contact support
- CGU et politique confidentialité
- Rate app

---

## 🏗️ Architecture Technique

### Backend (Déjà développé ✅)

**Stack :**
- Node.js + Express
- MongoDB (Mongoose ODM)
- JWT Authentication
- RESTful API

**Hébergement Production :**
- **Railway** ou **Render** (gratuit tier)
- **MongoDB Atlas** (gratuit 512MB)
- **Cloudinary** (images, gratuit 25GB/mois)

**Endpoints API (25) :**
- `/api/auth/*` (3) - Auth
- `/api/meats/*` (6) - Viandes
- `/api/cooking/*` (3) - Calcul
- `/api/history/*` (7) - Historique
- `/api/user/*` (6) - Utilisateur

**Sécurité :**
- HTTPS obligatoire
- Rate limiting (100 req/min/IP)
- CORS configuré
- Helmet.js (headers sécurité)
- Input validation (express-validator)

### Frontend Mobile

#### iOS (Swift + SwiftUI)

**Architecture : MVVM + Clean Architecture**

```
CookMaster-iOS/
├── App/
│   └── CookMasterApp.swift
├── Core/
│   ├── Network/
│   │   ├── APIService.swift
│   │   ├── APIEndpoints.swift
│   │   └── APIError.swift
│   ├── Storage/
│   │   ├── CoreDataManager.swift
│   │   └── KeychainManager.swift
│   └── Extensions/
├── Features/
│   ├── Authentication/
│   │   ├── Views/
│   │   ├── ViewModels/
│   │   └── Models/
│   ├── Home/
│   ├── CookingCalculator/
│   ├── Timer/
│   ├── Community/
│   ├── History/
│   └── Profile/
├── Shared/
│   ├── Components/
│   ├── Styles/
│   └── Utils/
└── Resources/
    ├── Assets.xcassets
    ├── Localizable.strings (FR/EN)
    └── Sounds/
```

**Technologies iOS :**
- SwiftUI (UI framework)
- Combine (reactive programming)
- CoreData (local database)
- URLSession (networking)
- UserNotifications (notifications)
- AVFoundation (sons, vocal)
- Vision (scan code-barres)
- Speech (reconnaissance vocale)
- WidgetKit (widgets)
- Firebase Analytics & Crashlytics

**Minimum iOS : 15.0** (supporté sur iPhone 6S et +)

#### Android (Kotlin + Jetpack Compose)

**Architecture : Clean Architecture + MVVM**

```
CookMaster-Android/
└── app/src/main/
    ├── java/com/cookmaster/
    │   ├── data/
    │   │   ├── local/
    │   │   │   ├── dao/
    │   │   │   └── database/
    │   │   ├── remote/
    │   │   │   ├── api/
    │   │   │   └── dto/
    │   │   └── repository/
    │   ├── domain/
    │   │   ├── model/
    │   │   ├── usecase/
    │   │   └── repository/
    │   ├── presentation/
    │   │   ├── auth/
    │   │   ├── home/
    │   │   ├── calculator/
    │   │   ├── timer/
    │   │   ├── community/
    │   │   ├── history/
    │   │   └── profile/
    │   ├── di/ (Hilt modules)
    │   └── util/
    └── res/
        ├── drawable/
        ├── values/
        │   ├── strings.xml (FR/EN)
        │   ├── colors.xml
        │   └── themes.xml
        └── raw/
```

**Technologies Android :**
- Jetpack Compose (UI)
- Kotlin Coroutines + Flow (async)
- Room Database (local storage)
- Retrofit (networking)
- Hilt (dependency injection)
- WorkManager (background tasks)
- CameraX (scan code-barres)
- ML Kit (barcode scanning)
- Firebase Analytics & Crashlytics
- Coil (image loading)

**Minimum Android : 7.0 (API 24)** (96% des appareils)

### Services Tiers

**Analytics :**
- Firebase Analytics (gratuit)
- Événements trackés :
  - Ouverture app
  - Calcul cuisson
  - Timer démarré/complété
  - Partage recette
  - Navigation entre écrans
  - Crashs et erreurs

**Stockage Images :**
- Cloudinary (gratuit 25GB/mois)
- Upload optimisé (WebP, compression)
- CDN mondial (chargement rapide)
- Transformations à la volée (resize, crop)

**Notifications Push :**
- Firebase Cloud Messaging (gratuit)
- Pour notifications marketing futures
- Désactivable par utilisateur

**Assistant Vocal :**
- iOS : Speech Framework (natif)
- Android : Google Speech API (gratuit)

**Scan Code-Barres :**
- Open Food Facts API (gratuit, open source)
- ML Kit Barcode Scanning (gratuit)

---

## 📱 Parcours Utilisateur Détaillé

### 1. Première Ouverture (Onboarding)

**Écran 1 : Bienvenue**
- Logo CookMaster animé (or sur noir)
- Slogan : "Maîtrisez la cuisson parfaite"
- Bouton "Commencer"

**Écran 2 : Fonctionnalités (Swipe)**
- 3 slides illustrés :
  1. "Calcul précis" - Illustration timer + thermomètre
  2. "40+ modes de cuisson" - Illustrations four, bbq, poêle
  3. "Communauté de chefs" - Illustration personnes + plats
- Skip possible, ou swipe

**Écran 3 : Préférences Initiales**
- Langue : FR / EN (détection auto)
- Unités : Métriques (kg, °C) / Impériales (lbs, °F)
- Niveau : Débutant / Intermédiaire / Expert
- Bouton "Continuer"

**Écran 4 : Authentification (optionnel)**
- "Créer un compte pour sauvegarder"
- Sign up email
- Connexion Google
- Connexion Apple (iOS)
- **Bouton "Utiliser sans compte"** (mode local)

### 2. Écran Principal (Home)

**Layout :**

**Header :**
- Logo CookMaster (petit, coin haut gauche)
- Icône connexion/profil (coin haut droit)
- Icône vocal (micro flottant, toujours visible)

**Quick Actions (2 grands boutons) :**
1. **"Nouvelle cuisson"**
   - Icône : Thermomètre stylisé
   - Couleur : Or sur fond noir
   - Action : Ouvre calculateur

2. **"Mes favoris"**
   - Icône : Étoile
   - Badge : Nombre de favoris
   - Action : Liste favoris

**Section "Continuer" (si cuisson en cours) :**
- Card avec :
  - "Poulet entier - 45min restantes"
  - Barre de progression
  - Bouton "Ouvrir timer"

**Section "Suggéré pour vous" :**
- 3-4 recettes (carousel horizontal)
- Basé sur historique + saison + popularité
- Photo + nom + temps + difficulté

**Section "Communauté" :**
- "Tendances aujourd'hui"
- 3 recettes top du jour
- Bouton "Voir plus"

**Bottom Navigation (5 onglets) :**
1. **Accueil** (icône maison) - Écran actuel
2. **Explorer** (icône loupe) - Catalogue viandes
3. **Timer** (icône horloge) - Timers actifs
4. **Communauté** (icône personnes) - Feed social
5. **Profil** (icône personne) - Mon compte

### 3. Calculateur de Cuisson

**Mode Simple (par défaut) :**

**Étape 1 : Choix de la viande**
- Grid photos viandes (2 colonnes)
- 6 catégories :
  - Bœuf (image steak)
  - Porc (image côtelette)
  - Agneau (image gigot)
  - Veau (image escalope)
  - Volaille (image poulet)
  - Gibier (image cerf)
- Tap sur catégorie → Sous-sélection morceaux

**Sous-sélection morceau :**
- Liste avec photos + nom
- "Filet", "Entrecôte", "Côte", etc.
- Info bulle : Description courte
- Tap → Passe à étape 2

**Étape 2 : Paramètres de base**
- **Poids** :
  - Slider visuel (100g → 5kg)
  - Input numérique (tap sur valeur)
  - Conversion auto selon préférences

- **Mode de cuisson** :
  - Dropdown stylisé avec icons
  - Groupé par catégories (Four, Poêle, Grill, etc.)
  - Indication température standard

- **Cuisson désirée** :
  - 4-5 boutons visuels (selon viande)
  - Bleu / Saignant / À point / Bien cuit
  - Sous chaque option :
    - Température °C (ex: 52°C)
    - Mini illustration (gradient rouge→brun)

**Bouton "Calculer" (large, or sur noir)**

**Étape 3 : Résultat**

**Card Résultat (design soigné) :**
```
╔══════════════════════════════════╗
║  FILET DE BŒUF - À POINT         ║
║  ────────────────────────────    ║
║                                  ║
║  ⏱️  Temps de cuisson            ║
║     18 minutes                   ║
║                                  ║
║  🌡️  Température à cœur          ║
║     52-55°C                      ║
║                                  ║
║  ⏸️  Temps de repos              ║
║     5 minutes                    ║
║                                  ║
║  📊  Temps total                 ║
║     23 minutes                   ║
║                                  ║
║  ✨ Confiance : 95%              ║
║                                  ║
║  [  DÉMARRER LE TIMER  ]         ║
║     (Grand bouton or)            ║
║                                  ║
║  💡 Conseils du chef:            ║
║  "Sortez la viande 30min avant   ║
║   cuisson pour température       ║
║   ambiante uniforme"             ║
╚══════════════════════════════════╝
```

**Actions possibles :**
- Bouton "Démarrer timer" → Lance timer avec paramètres
- Bouton "Sauvegarder" (étoile) → Ajoute aux favoris
- Bouton "Partager" → Partage screenshot résultat
- Bouton "Mode expert" (toggle) → Passe en mode avancé

**Mode Avancé (toggle activé) :**

Ajoute ces paramètres supplémentaires :

- **Dimensions précises** :
  - Épaisseur (cm/inches)
  - Longueur (optionnel)
  - Largeur (optionnel)
  - Schéma visuel de mesure

- **Température de cuisson personnalisée** :
  - Slider four : 100°C → 250°C
  - Indication "standard" selon mode

- **Ajustements** :
  - Altitude (0-3000m) : Affecte temps
  - Viande sortie du frigo : Maintenant / 30min / 1h
  - Type de récipient : Poêle/Fonte/Inox/Antiadhésif

- **Résultat enrichi** :
  - Graphique température dans le temps
  - Carry-over effect visualisé
  - Plage de température optimale (chart)
  - Historique ajustements perso

### 4. Timer Intelligent

**Écran Timer (plein écran) :**

```
╔══════════════════════════════════╗
║                                  ║
║         FILET DE BŒUF            ║
║                                  ║
║      ╭───────────────╮           ║
║      │               │           ║
║      │   ⏱️          │           ║
║      │               │           ║
║      │   12:34       │           ║
║      │               │           ║
║      │  ▓▓▓▓▓▓▓▓░░░  │ 70%      ║
║      │               │           ║
║      ╰───────────────╯           ║
║                                  ║
║      5:26 restantes              ║
║                                  ║
║      Température cible: 52°C     ║
║                                  ║
║      [  ⏸️  PAUSE  ]              ║
║                                  ║
║      [  +5 MIN  ]  [  -2 MIN  ]  ║
║                                  ║
║      🔊  🔔  ⚙️                   ║
║    Volume Alert Settings         ║
║                                  ║
╚══════════════════════════════════╝
```

**Fonctionnalités :**
- Compte à rebours (grand, lisible de loin)
- Barre de progression circulaire animée
- Pourcentage avancement
- Actions rapides : Pause / +5min / -2min
- Boutons contextuels en bas

**Notifications paliers :**
- 75% : "Plus que 6 minutes"
- 90% : "Bientôt prêt, préparez l'assiette"
- 95% : "Plus qu'1 minute !"
- 100% : Notification haute priorité + vibration + son

**Mode repos automatique :**
- À 100%, demande "Lancer temps de repos ?" (5 min)
- Timer second s'enclenche
- Notification fin repos : "C'est le moment parfait !"

**Assistant vocal pendant timer :**
- "Combien de temps reste-t-il ?" → "5 minutes et 30 secondes"
- "Pause" → Met en pause
- "Reprendre" → Reprend
- "Ajoute 5 minutes" → Ajoute au timer

### 5. Communauté

**Feed Principal :**

**Layout style Instagram :**
- Card par recette :
  - Photo haute qualité
  - Nom recette + icône viande
  - Auteur (photo profil + nom)
  - Description courte (2 lignes)
  - Tags : #BBQ #Weekend
  - Stats : ❤️ 45 | 💬 12 | ⭐ 4.5
  - Bouton "Voir la recette"

**Filtres (top) :**
- Toutes / Suivis / Populaires / Récentes
- Filtres avancés (modal) :
  - Type viande
  - Mode cuisson
  - Difficulté
  - Temps < 30min / 30-60min / >1h

**Actions sur recette :**
- Tap photo → Détail complet recette
- ❤️ (like) → Toggle favori
- 💬 (commentaire) → Ouvre section commentaires
- ⭐ (noter) → Popup note 1-5
- 📤 (partager) → Sheet partage natif
- 🔖 (sauvegarder) → Ajoute à mes favoris

**Détail Recette Communautaire :**

**Header :**
- Carousel photos (swipe horizontal)
- Auteur (photo + nom + badge niveau)
- Date publication
- Bouton "Suivre" si pas déjà

**Infos Cuisson :**
- Viande + Morceau (avec icon)
- Poids utilisé
- Mode de cuisson
- Température atteinte
- Temps cuisson
- Note finale : ⭐⭐⭐⭐⭐

**Description & Astuces :**
- Texte de l'auteur (rich text)
- "Ce que j'ai fait de spécial..."
- Tips & tricks

**Bouton d'action :**
- "Essayer cette recette" (grand, or)
  → Pré-remplit calculateur avec params

**Commentaires :**
- Liste commentaires
- Input "Ajouter un commentaire"
- Possibilité de répondre
- Modération : Signaler

**Mes Recettes Partagées :**
- Section dans Profil
- Gérer mes publications
- Stats par recette (vues, likes)
- Modifier/Supprimer

### 6. Explorer (Catalogue)

**Vue Catalogue :**

**Tabs horizontaux :**
- Toutes | Bœuf | Porc | Agneau | Veau | Volaille | Gibier

**Grid de viandes (2 colonnes) :**
Chaque card :
```
╔═══════════════╗
║   [Photo]     ║
║               ║
║   FILET       ║
║   Bœuf        ║
║               ║
║   ⭐⭐⭐⭐⭐     ║
║   45 recettes ║
╚═══════════════╝
```

**Tap sur viande → Fiche Détaillée :**

**Header :**
- Grande photo haute qualité
- Nom + catégorie
- Description (100-150 mots)

**Infos Pratiques :**
- Poids typique : 400g - 2kg
- Dimensions : 30×8×8 cm
- Temps moyen : 15-25 min
- Prix moyen : €€ (indicatif)

**Températures Recommandées :**
Tableau :
```
Cuisson    | Temp à cœur | Aspect
─────────────────────────────────
Bleu       | 40°C        | ⬤⬤⚪⚪⚪
Saignant   | 44°C        | ⬤⬤⬤⚪⚪
À point    | 52°C        | ⬤⬤⬤⬤⚪
Bien cuit  | 60°C        | ⬤⬤⬤⬤⬤
```

**Modes de Cuisson Compatibles :**
- Liste avec icônes
- Poêle ✓ (⭐⭐⭐⭐⭐ Idéal)
- Grill ✓ (⭐⭐⭐⭐ Très bien)
- Four ✓ (⭐⭐⭐ Bien)
- Barbecue ✓ (⭐⭐⭐⭐ Très bien)
- Sous-vide ✓ (⭐⭐⭐⭐⭐ Excellent)

**Conseils du Chef :**
- Tips de préparation
- Marinade suggérée
- Assaisonnement
- Accompagnements

**Accords (optionnel) :**
- Vins suggérés (2-3)
- Sauces (2-3)
- Garnitures

**Recettes Communautaires :**
- Top 5 recettes avec ce morceau
- Bouton "Voir toutes"

**Boutons actions :**
- "Calculer ma cuisson" (CTA principal)
- "Sauvegarder" (favoris)
- "Partager" (fiche info)

### 7. Historique

**Vue Liste :**

**Filtres & Recherche :**
- Barre de recherche
- Filtres : Date, Viande, Mode cuisson, Note
- Tri : Récent / Ancien / Note / Viande

**Groupement par date :**
- Aujourd'hui
- Cette semaine
- Ce mois
- Plus ancien

**Card Historique :**
```
╔═══════════════════════════════════╗
║  [Mini photo]  FILET DE BŒUF      ║
║                                   ║
║  26 Oct 2025  •  À point          ║
║  Poêle  •  500g  •  18 min        ║
║                                   ║
║  Note: ⭐⭐⭐⭐⭐                    ║
║  "Parfait! Viande tendre"         ║
║                                   ║
║  [Refaire]  [Partager]  [...]     ║
╚═══════════════════════════════════╝
```

**Tap sur card → Détail :**
- Toutes infos cuisson
- Photos prises (si ajoutées)
- Notes complètes
- Modifications apportées
- Actions :
  - Refaire (pré-remplit calculateur)
  - Modifier (notes, photos, note)
  - Supprimer
  - Partager (feed communauté)

**Statistiques (onglet 2) :**

**Graphiques visuels :**
1. **Répartition viandes** (Pie chart)
   - Bœuf 45%, Porc 25%, Volaille 20%, Autres 10%

2. **Modes de cuisson** (Bar chart)
   - Four (38%), Poêle (25%), Barbecue (20%), Autres

3. **Évolution dans le temps** (Line chart)
   - Nombre cuissons par semaine/mois
   - Taux réussite (% notes >4⭐)

4. **Records personnels** (Cards)
   - Plus grosse pièce : Gigot 3.2kg
   - Plus longue cuisson : Brisket 10h
   - Série réussies : 15 cuissons 5⭐

**Export données :**
- Bouton "Exporter"
- Formats : CSV (Excel) / PDF (Rapport)
- Partage email/cloud

### 8. Profil

**Header Profil :**
- Photo de profil (grande, circulaire)
- Nom + Pseudo
- Bio (1-2 lignes)
- Badges (3 principaux affichés)
- Bouton "Modifier profil"

**Stats rapides :**
```
┌─────────────┬─────────────┬─────────────┐
│ 127         │ 45          │ 89%         │
│ Cuissons    │ Partagées   │ Réussite    │
└─────────────┴─────────────┴─────────────┘
```

**Sections (liste) :**

1. **Mes Favoris** (❤️)
   - Nombre entre parenthèses
   - Chevron droit →

2. **Mes Recettes Partagées** (📤)
   - Nombre publications
   - Vues/Likes totaux

3. **Paramètres** (⚙️)
   - Sous-sections multiples

4. **Badges & Réalisations** (🏆)
   - Collection badges débloqués
   - Progression vers suivants

5. **Aide & Support** (❓)
   - FAQ
   - Tutoriels vidéo
   - Contact support

6. **À propos** (ℹ️)
   - Version app
   - Crédits
   - Légal

**Modifier Profil :**
- Changer photo (upload + recadrage)
- Modifier nom/pseudo
- Bio
- Rendre profil public/privé
- Lier comptes sociaux (opt)

**Paramètres (Détaillé) :**

**Général :**
- Langue : FR / EN (+ drapeaux)
- Unités :
  - Poids : kg/lbs
  - Température : °C/°F
  - Dimensions : cm/inches
- Mode par défaut : Simple/Avancé
- Thème : Clair/Sombre/Auto

**Notifications :**
Liste toggles :
- ✅ Fin de timer
- ✅ Rappels intelligents
- ✅ Suggestions personnalisées
- ❌ Marketing (désactivé par défaut)
- ✅ Communauté (likes, commentaires)
- ✅ Sécurité alimentaire

**Assistant Vocal :**
- ✅ Activer assistant
- Langue reconnaissance : Français
- Phrase activation : "Hey CookMaster"
- ✅ Feedback vocal

**Compte & Données :**
- Modifier email
- Changer mot de passe
- Stockage utilisé : 245 MB / 500 MB
- Synchronisation : Dernière il y a 2min
- Nettoyer cache
- Exporter données (RGPD)
- Supprimer compte (confirmation)

**Confidentialité :**
- Profil public/privé
- Afficher dans recherche : Oui/Non
- Qui peut commenter : Tous/Suivis/Personne
- Partage données analytics : Oui/Non

**À propos :**
- Version : CookMaster 1.0.0 (Build 42)
- Crédits : Équipe dev, designers, data
- Licences open-source
- Conditions d'utilisation
- Politique de confidentialité
- Contact : support@cookmaster.app
- Rate app (liens stores)

---

## 🚀 Plan de Développement (4-6 mois)

### Phase 1 : Fondations (Semaines 1-4)

**Sprint 1-2 : Setup & Architecture**
- ✅ Backend déjà développé (validation finale)
- Setup projets iOS (Xcode) + Android (Android Studio)
- Configuration CI/CD (GitHub Actions)
- Setup Firebase (Analytics, Auth, Storage)
- Design System (Figma → Code)
- Architecture code (MVVM, Clean Arch)
- Modèles de données synchronisés avec API

**Sprint 3-4 : Features Core**
- Authentification (Email, Google, Apple)
- Navigation (Bottom tabs, Stack navigation)
- API Integration (Network layer)
- Cache & Offline (CoreData/Room)
- Écrans principaux (wireframes fonctionnels)

**Livrables Phase 1 :**
- Apps iOS + Android démarrent
- Login/Signup fonctionnel
- Navigation entre écrans
- Connexion API opérationnelle
- Design system implémenté (80%)

### Phase 2 : Features Principales (Semaines 5-10)

**Sprint 5-6 : Calcul & Timer**
- Calculateur de cuisson (mode Simple)
- Affichage résultats
- Timer intelligent
- Notifications locales
- Assistant vocal (base)

**Sprint 7-8 : Catalogue & Détails**
- Explorer (catalogue viandes)
- Fiches détaillées viandes
- Recherche & filtres
- Favoris (local + sync)
- Historique (CRUD)

**Sprint 9-10 : Profil & Settings**
- Écran profil complet
- Paramètres (toutes sections)
- Statistiques graphiques
- Mode hors ligne avancé
- Conversion unités

**Livrables Phase 2 :**
- Fonctionnalités core 100% opérationnelles
- Mode Simple parfaitement fonctionnel
- Timer avec notifications
- Historique et favoris
- Version Alpha testable en interne

### Phase 3 : Features Avancées (Semaines 11-14)

**Sprint 11-12 : Communauté**
- Feed communautaire
- Upload photos (Cloudinary)
- Partage recettes
- Système like/commentaires
- Détail recette communautaire

**Sprint 13-14 : Advanced Features**
- Mode Avancé (calculateur expert)
- Scan code-barres
- Assistant vocal avancé
- Notifications intelligentes
- Multi-timers

**Livrables Phase 3 :**
- Fonctionnalités sociales complètes
- Features avancées opérationnelles
- Version Beta prête pour tests externes

### Phase 4 : Polish & Tests (Semaines 15-18)

**Sprint 15-16 : UX/UI Polish**
- Animations fluides
- Transitions soignées
- Micro-interactions
- Dark mode parfait
- Accessibilité (VoiceOver, TalkBack)
- Traductions (FR + EN 100%)

**Sprint 17-18 : Tests & Optimisation**
- Tests unitaires (70% coverage)
- Tests d'intégration
- Tests UI automatisés
- Beta testing (TestFlight/PlayStore Beta)
- Fix bugs critiques
- Optimisation performances
- Réduction taille app

**Livrables Phase 4 :**
- App parfaitement polie
- Bugs critiques résolus
- Performances optimisées
- Beta testée par 50-100 utilisateurs
- Feedback intégré

### Phase 5 : Publication (Semaines 19-24)

**Sprint 19-20 : Préparation Stores**

**iOS (App Store) :**
- Screenshots (6.5" + 5.5" + iPad)
- Preview vidéo (30 sec max)
- Description app (FR + EN)
- Keywords SEO (100 caractères)
- Catégories : Food & Drink + Utilities
- Icône app (1024×1024)
- App Store Connect setup
- Soumission review

**Android (Play Store) :**
- Screenshots (phone + tablet)
- Feature graphic (1024×500)
- Video (optionnel mais recommandé)
- Description (FR + EN, 4000 caractères)
- Short description (80 caractères)
- Catégorie : Food & Drink
- Content rating questionnaire
- Play Console setup
- Soumission review

**Sprint 21-22 : Review & Launch**
- Corrections si rejet review
- Monitoring crash reports
- Support utilisateurs early
- Ajustements post-launch rapides

**Sprint 23-24 : Post-Launch & Marketing**
- Press kit (logo, screenshots, description)
- Communiqué de presse
- Posts réseaux sociaux
- Outreach blogs culinaires
- App Store Optimization (ASO)
- Suivi metrics (downloads, retention)
- Itération basée sur feedback

**Livrables Phase 5 :**
- ✅ App publiée sur App Store
- ✅ App publiée sur Google Play Store
- ✅ Landing page web
- ✅ Support utilisateurs en place
- ✅ Plan marketing activé

---

## 📊 Métriques de Succès

### KPIs Techniques
- **Crash-free rate** : >99.5%
- **App startup time** : <2 secondes
- **API response time** : <500ms (P95)
- **Offline functionality** : 100% features core
- **App size** : <50MB (iOS) / <30MB (Android)

### KPIs Business
- **Downloads M1** : 1,000+
- **DAU (Daily Active Users) M3** : 500+
- **Retention D7** : >40%
- **Retention D30** : >20%
- **Session duration avg** : >5 minutes
- **Review rating** : >4.5⭐ (stores)

### KPIs Engagement
- **Cuissons calculées/user/mois** : >4
- **Timer complétés** : >80% des démarrés
- **Partages communauté/mois** : >50
- **Favoris moyens/user** : >5

---

## 💰 Budget Détaillé Année 1

### Comptes Développeurs
- Apple Developer Program : **99€/an**
- Google Play Developer : **25€** (unique)
**Subtotal : 124€**

### Hébergement & Services (Gratuit)
- Railway/Render : **0€** (plan gratuit suffisant <1000 users)
- MongoDB Atlas : **0€** (512MB gratuit)
- Cloudinary : **0€** (25GB/mois gratuit)
- Firebase : **0€** (Spark plan : Auth + Analytics + FCM)
**Subtotal : 0€**

### Domaine (Optionnel mais recommandé)
- cookmaster.app : **~15€/an**
**Subtotal : 15€**

### Marketing (Optionnel)
- Création logo professionnel : **0€** (Figma + AI tools)
- App preview video : **0€** (outils gratuits)
- Landing page : **0€** (GitHub Pages gratuit)
**Subtotal : 0€**

### Contingence
- Imprévus / Services supplémentaires : **~50€**

---

**TOTAL ANNÉE 1 : ~189€** ✅ (sous budget 200€)

**Scaling (si succès) :**
- >10,000 users : MongoDB Atlas M10 (~57€/mois)
- >100GB storage photos : Cloudinary Pro (~89€/mois)
- Marketing ads : Budget variable

---

## 📋 Checklist Pré-Publication

### iOS (App Store)

**Développement :**
- [ ] App build sur device réel testée
- [ ] Toutes features fonctionnelles
- [ ] Aucun crash pendant tests (1h usage)
- [ ] Gestion erreurs réseau
- [ ] Offline mode fonctionne
- [ ] Toutes permissions justifiées (Camera, Micro, Notifications)
- [ ] Privacy manifest complet
- [ ] Sign in with Apple implémenté
- [ ] App Tracking Transparency (si analytics)
- [ ] Dark mode testé
- [ ] Support iPad (layout adapté)
- [ ] VoiceOver accessibility testée

**Contenu Store :**
- [ ] Screenshots iPhone (6.5" + 5.5") : 5-10 images
- [ ] Screenshots iPad : 3-5 images
- [ ] App preview video 30s
- [ ] Icône 1024×1024 sans alpha
- [ ] Nom app (<30 caractères)
- [ ] Subtitle (<30 caractères)
- [ ] Description (<4000 caractères)
- [ ] Keywords (<100 caractères)
- [ ] Promotional text (<170 caractères)
- [ ] Support URL (site web)
- [ ] Privacy policy URL
- [ ] Catégories : Food & Drink + Utilities
- [ ] Age rating : 4+
- [ ] Review notes pour Apple

**Soumission :**
- [ ] Archive build signed
- [ ] Upload via Xcode ou Transporter
- [ ] Version/Build number incrémenté
- [ ] Soumis pour review
- [ ] Email confirmation reçu

### Android (Play Store)

**Développement :**
- [ ] App testée sur 3+ devices
- [ ] Toutes features fonctionnelles
- [ ] Gestion permissions runtime
- [ ] Notification channels configurés
- [ ] ProGuard/R8 activé (release)
- [ ] APK/AAB signés
- [ ] Version code/name corrects
- [ ] Support dark theme
- [ ] Accessibility testée (TalkBack)

**Contenu Store :**
- [ ] Screenshots phone : 4-8 images
- [ ] Screenshots tablet : 2-4 images
- [ ] Feature graphic 1024×500
- [ ] Icône 512×512 haute résolution
- [ ] Video optionnel (YouTube)
- [ ] Short description (<80 caractères)
- [ ] Full description (<4000 caractères)
- [ ] App title (<50 caractères)
- [ ] Catégorie : Food & Drink
- [ ] Content rating (ESRB, PEGI)
- [ ] Privacy policy URL
- [ ] Contact details

**Soumission :**
- [ ] AAB uploadé (Android App Bundle)
- [ ] Release notes rédigées
- [ ] Countries/regions sélectionnés
- [ ] Pricing : Gratuit
- [ ] Distribution : Public
- [ ] Review & Submit

---

## 🎨 Ressources Design

### Couleurs Exactes

```css
/* Couleurs principales */
--noir-profond: #1A1A1A;
--or-elegant: #D4AF37;
--blanc-casse: #F5F5F5;
--gris-anthracite: #2D2D2D;

/* Couleurs fonctionnelles */
--succes: #4CAF50;
--alerte: #FF6B6B;
--info: #D4AF37;

/* Températures gradient */
--temp-bleu: #3498DB;
--temp-rouge: #E74C3C;
--temp-orange: #E67E22;
--temp-jaune: #F39C12;
```

### Typographie

**Fonts :**
- Titres : Playfair Display (Google Fonts)
- Corps : Inter (Google Fonts) / SF Pro (iOS natif)
- Mono : SF Mono (iOS) / Roboto Mono (Android)

**Sizes :**
```
Display: 32-40pt
Title 1: 28pt
Title 2: 24pt
Title 3: 20pt
Body: 16pt
Caption: 14pt
Small: 12pt
```

### Iconographie

**Librarie :**
- SF Symbols (iOS natif)
- Material Symbols (Android)
- Customs : Dessins vectoriels viandes (Figma)

**Style :**
- Ligne fine (stroke 1.5px)
- Corners arrondis
- Couleur : Or (#D4AF37) pour actions
- Gris clair (#A0A0A0) pour inactifs

### Animations

**Transitions :**
- Navigation : 300ms ease-out
- Modal : 250ms spring
- Boutons : 150ms ease
- Progress : 500ms linear

**Micro-interactions :**
- Tap button : Scale 0.95 + bounce
- Like : Heart pop + rotation
- Timer : Pulsing (lent)
- Success : Confetti (subtil)

---

## 📞 Support & Communication

### Pendant Développement
- Questions techniques : GitHub Discussions
- Bug reports : GitHub Issues
- Feedback design : Figma comments

### Post-Launch
- **Email support** : support@cookmaster.app
- **FAQ** : In-app + Site web
- **Social** : @CookMasterApp (Twitter/Instagram)
- **Updates** : In-app changelog

---

## ✅ Validation Finale

Ce document de spécifications est **complet et validé** pour démarrer le développement d'une application mobile professionnelle prête pour publication sur les stores.

**Prochain step :** Démarrer Phase 1 - Fondations 🚀

---

**Document créé le** : 26 octobre 2025
**Version** : 1.0
**Statut** : ✅ Validé - Prêt pour développement
