# CookMaster App - Deployment

Application de calcul de cuisson de viande prête pour le déploiement sur Vercel.

## Structure

```
deploy/
├── api/                    # Serverless Functions (Backend)
│   ├── data/              # Données (viandes, recettes, etc.)
│   ├── cooking/           # API calcul de cuisson
│   ├── encyclopedia/      # API encyclopédie
│   ├── meats/            # API viandes
│   ├── recettes/         # API recettes
│   ├── index.js          # Route racine API
│   ├── meats.js          # Liste des viandes
│   └── recettes.js       # Liste des recettes
├── src/                   # Frontend React
├── public/               # Assets statiques
├── package.json          # Dépendances
├── vercel.json           # Configuration Vercel
└── vite.config.js        # Configuration Vite
```

## Déploiement sur Vercel

### 1. Prérequis
- Compte Vercel (https://vercel.com)
- Compte MongoDB Atlas avec cluster configuré

### 2. Variables d'environnement
Configurer dans Vercel Dashboard → Settings → Environment Variables :

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/cookmaster
```

### 3. Déploiement

**Option A - Via GitHub (recommandé)**
1. Push ce dossier sur GitHub
2. Connecter le repo à Vercel
3. Vercel détecte automatiquement Vite et déploie

**Option B - Via CLI**
```bash
npm install -g vercel
cd deploy
vercel
```

## API Endpoints

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/api` | GET | Info API |
| `/api/meats` | GET | Liste des viandes |
| `/api/meats/:id` | GET | Détails d'une viande |
| `/api/meats/:id/:subcategory` | GET | Morceaux par sous-catégorie |
| `/api/cooking/calculate` | POST | Calcul temps de cuisson |
| `/api/encyclopedia/:category` | GET | Données encyclopédiques |
| `/api/recettes` | GET | Liste des recettes |
| `/api/recettes/:id` | GET | Détails d'une recette |

## Développement local

```bash
npm install
npm run dev
```

L'app sera disponible sur http://localhost:5173
