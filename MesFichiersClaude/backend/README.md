# API Meat Cooking - Backend

API REST pour l'application de cuisson de viande.

## 🚀 Installation

### Prérequis
- Node.js >= 16.x
- MongoDB >= 5.0
- npm ou yarn

### Configuration

1. Installer les dépendances:
```bash
npm install
```

2. Créer un fichier `.env` basé sur `.env.example`:
```bash
cp .env.example .env
```

3. Configurer les variables d'environnement dans `.env`:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/meat-cooking
JWT_SECRET=votre_secret_jwt_a_generer
```

4. Remplir la base de données avec les données initiales:
```bash
node seed/seedDatabase.js
```

5. Démarrer le serveur:
```bash
# Mode développement avec rechargement automatique
npm run dev

# Mode production
npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentification

#### POST /api/auth/register
Créer un nouveau compte utilisateur.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "motdepasse",
  "name": "Nom Utilisateur"
}
```

#### POST /api/auth/login
Se connecter.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "motdepasse"
}
```

**Response:**
```json
{
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "Nom Utilisateur",
    "preferences": {...}
  }
}
```

#### GET /api/auth/verify
Vérifier la validité du token JWT.

**Headers:**
```
Authorization: Bearer <token>
```

### Viandes

#### GET /api/meats
Récupérer toutes les viandes.

#### GET /api/meats/categories
Récupérer la liste des catégories (boeuf, porc, agneau, volaille, etc.).

#### GET /api/meats/category/:category
Récupérer toutes les viandes d'une catégorie.

#### GET /api/meats/:id
Récupérer une viande spécifique.

#### GET /api/meats/:id/cuts
Récupérer tous les morceaux d'une viande.

#### GET /api/meats/:id/cuts/:cutName
Récupérer un morceau spécifique.

#### POST /api/meats/search
Rechercher des viandes/morceaux.

**Body:**
```json
{
  "query": "filet",
  "category": "boeuf"
}
```

### Calcul de cuisson

#### POST /api/cooking/calculate
Calculer le temps de cuisson.

**Body:**
```json
{
  "meatId": "meat_id",
  "cutName": "Filet",
  "cookingMethod": "poele",
  "weight": { "value": 0.5, "unit": "kg" },
  "dimensions": {
    "thickness": 3,
    "length": 15,
    "width": 8,
    "unit": "cm"
  },
  "cookingTemperature": { "value": 180, "unit": "celsius" },
  "targetDoneness": "à point",
  "userPreferences": {
    "temperatureUnit": "celsius",
    "weightUnit": "kg",
    "dimensionUnit": "cm"
  }
}
```

**Response:**
```json
{
  "calculation": {
    "cookingTime": 25,
    "restingTime": 5,
    "totalTime": 30,
    "estimatedEndTime": "2025-10-26T14:30:00.000Z",
    "confidence": 95
  },
  "meatInfo": {...},
  "cookingInfo": {...},
  "targetInfo": {...}
}
```

#### POST /api/cooking/remaining-time
Calculer le temps restant pendant la cuisson.

**Body:**
```json
{
  "startTime": "2025-10-26T14:00:00.000Z",
  "totalTime": 30
}
```

#### GET /api/cooking/methods
Récupérer tous les modes de cuisson disponibles (40+ méthodes).

### Historique (authentification requise)

#### GET /api/history
Récupérer l'historique de cuisson.

**Query params:**
- limit: nombre de résultats (défaut: 50)
- skip: pagination
- sortBy: champ de tri (défaut: date)
- order: asc/desc (défaut: desc)

#### GET /api/history/:id
Récupérer un enregistrement spécifique.

#### POST /api/history
Créer un nouvel enregistrement.

**Body:**
```json
{
  "meatCategory": "boeuf",
  "meatName": "Boeuf",
  "cutName": "Filet",
  "cookingMethod": "poele",
  "parameters": {
    "weight": { "value": 0.5, "unit": "kg" },
    "cookingTemperature": 180,
    "targetDoneness": "à point",
    "targetCoreTemperature": 55
  },
  "calculatedCookingTime": 25,
  "actualCookingTime": 27,
  "restingTime": 5,
  "rating": 5,
  "notes": "Parfait!",
  "success": true
}
```

#### PUT /api/history/:id
Mettre à jour un enregistrement.

#### DELETE /api/history/:id
Supprimer un enregistrement.

#### GET /api/history/stats/summary
Récupérer des statistiques (viandes favorites, taux de réussite, etc.).

#### POST /api/history/search
Rechercher dans l'historique.

### Utilisateur (authentification requise)

#### GET /api/user/profile
Récupérer le profil utilisateur.

#### PUT /api/user/profile
Mettre à jour le profil.

#### PUT /api/user/preferences
Mettre à jour les préférences (unités, notifications, etc.).

**Body:**
```json
{
  "temperatureUnit": "celsius",
  "weightUnit": "kg",
  "dimensionUnit": "cm",
  "defaultDoneness": "à point",
  "enableNotifications": true,
  "timerSound": "default"
}
```

#### POST /api/user/favorites
Ajouter une recette aux favoris.

#### GET /api/user/favorites
Récupérer les recettes favorites.

#### DELETE /api/user/favorites/:id
Retirer une recette des favoris.

#### PUT /api/user/password
Changer le mot de passe.

## 🎯 Fonctionnalités

### Modes de cuisson supportés (40+)
- **Four**: traditionnel, convection, vapeur, chaleur tournante
- **Poêle/Plancha**: poêle, plancha, wok, sauteuse
- **Grillades**: grill, barbecue (charbon, gaz, électrique), salamandre
- **Mijotées**: cocotte, mijoteuse, braisage, ragoût
- **Basse température**: sous-vide, basse température
- **Rôtissage**: rôtissoire, rôtissoire verticale
- **Vapeur**: vapeur, court-bouillon, pochage
- **Rapides**: saisie, flambé
- **Fumage**: fumoir chaud, fumoir froid
- **Spéciales**: air fryer, micro-ondes, pierre chaude
- **Traditionnelles**: tajine, papillote, croûte de sel, croûte d'argile
- **Professionnelles**: plancha pro, grill pierre de lave

### Températures de cuisson
- **Normes européennes/françaises** (pas de normes américaines)
- Températures à cœur basées sur la dégustation gustative idéale
- Différentes cuissons selon le type de viande:
  - Bœuf: bleu (45°C), saignant (50°C), à point (55°C), bien cuit (63°C)
  - Porc: rosé (63°C), à point (68°C), bien cuit (72°C)
  - Agneau: saignant (55°C), à point (60°C), bien cuit (70°C)
  - Volaille: bien cuit (74°C)

### Algorithme de calcul
- Calcul basé sur le poids ET l'épaisseur
- Ajustements automatiques selon la température de cuisson
- Ajustements selon le mode de cuisson
- Temps de repos recommandé
- Indice de confiance du calcul

### Conversion d'unités
- Poids: kg, g, lbs, oz
- Température: Celsius, Fahrenheit, Kelvin
- Dimensions: cm, mm, m, inches, ft

## 🔧 Développement

### Structure du projet
```
backend/
├── models/          # Modèles Mongoose
│   ├── Meat.js
│   ├── CookingHistory.js
│   └── User.js
├── routes/          # Routes API
│   ├── auth.js
│   ├── meats.js
│   ├── cooking.js
│   ├── history.js
│   └── user.js
├── middleware/      # Middleware Express
│   └── auth.js
├── utils/           # Utilitaires
│   ├── cookingCalculator.js
│   └── unitConverter.js
├── seed/            # Données initiales
│   ├── meatData.js
│   └── seedDatabase.js
├── server.js        # Point d'entrée
└── package.json
```

### Tests
```bash
npm test
```

## 📝 TODO
- [ ] Ajouter plus de types de viandes (canard, gibier, poisson, fruits de mer)
- [ ] Implémenter l'upload de photos
- [ ] Ajouter des recettes complètes
- [ ] Créer des notifications push
- [ ] Optimiser les performances avec cache Redis
- [ ] Ajouter des tests unitaires et d'intégration

## 📄 Licence
ISC
