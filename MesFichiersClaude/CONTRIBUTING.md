# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à Meat Cooking ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Structure du projet](#structure-du-projet)
- [Standards de code](#standards-de-code)
- [Processus de Pull Request](#processus-de-pull-request)
- [Ajouter des viandes](#ajouter-des-viandes)

## Code de conduite

Ce projet suit un code de conduite simple :
- Soyez respectueux et constructif
- Acceptez les critiques constructives
- Focalisez sur ce qui est meilleur pour la communauté
- Montrez de l'empathie envers les autres membres

## Comment contribuer

Il existe plusieurs façons de contribuer :

### 🐛 Signaler un bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les Issues
2. Créez une nouvelle Issue avec :
   - Un titre descriptif
   - Les étapes pour reproduire le bug
   - Le comportement attendu vs le comportement observé
   - Votre environnement (OS, version Node.js/Swift/Kotlin, etc.)
   - Des captures d'écran si pertinent

### 💡 Proposer une fonctionnalité

1. Créez une Issue décrivant :
   - Le problème que cette fonctionnalité résoudrait
   - La solution proposée
   - Des alternatives considérées
   - Des mockups/wireframes si applicable

### 🔧 Soumettre du code

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Développez et testez
4. Soumettez une Pull Request

## Structure du projet

```
mon-premier-projet/
├── backend/           # API Node.js
│   ├── models/       # Modèles Mongoose
│   ├── routes/       # Routes Express
│   ├── utils/        # Utilitaires
│   └── seed/         # Données initiales
├── ios-app/          # App iOS Swift
│   ├── Models/
│   ├── Views/
│   ├── ViewModels/
│   └── Services/
└── android-app/      # App Android Kotlin
    └── src/main/java/com/meatcooking/
        ├── data/
        ├── ui/
        └── domain/
```

## Standards de code

### Backend (Node.js/JavaScript)

```javascript
// Utiliser ES6+
const express = require('express');

// Nommage : camelCase pour variables et fonctions
const calculateCookingTime = (params) => {
  // ...
};

// Nommage : PascalCase pour les classes et modèles
class CookingCalculator {
  // ...
}

// Commentaires pour les fonctions importantes
/**
 * Calcule le temps de cuisson
 * @param {Object} params - Paramètres de cuisson
 * @returns {Object} - Résultat avec temps et température
 */
function calculate(params) {
  // ...
}

// Gestion des erreurs
try {
  // code
} catch (error) {
  console.error('Erreur:', error);
  // Propager ou gérer
}
```

**Règles ESLint** :
- Indentation : 2 espaces
- Quotes : simple quotes
- Semicolons : oui
- Trailing comma : oui

### iOS (Swift)

```swift
// Nommage : camelCase pour variables et fonctions
let cookingTime = 30
func calculateCookingTime() { }

// Nommage : PascalCase pour types
struct Meat { }
class CookingViewModel { }
enum CookingMethod { }

// Documentation
/// Calcule le temps de cuisson
/// - Parameters:
///   - weight: Le poids en kg
///   - method: La méthode de cuisson
/// - Returns: Le temps en minutes
func calculate(weight: Double, method: CookingMethod) -> Int {
    // ...
}

// Gestion des erreurs
do {
    let result = try calculateCookingTime(params)
} catch {
    print("Error: \(error)")
}

// SwiftUI : Views claires et composables
struct CookingView: View {
    var body: some View {
        VStack {
            // Components
        }
    }
}
```

**Conventions Swift** :
- SwiftLint activé
- Force unwrap uniquement si sûr
- Utiliser guard let pour unwrap
- Préférer struct pour les modèles

### Android (Kotlin)

```kotlin
// Nommage : camelCase pour variables et fonctions
val cookingTime = 30
fun calculateCookingTime() { }

// Nommage : PascalCase pour classes
data class Meat()
class CookingViewModel : ViewModel()
sealed class CookingMethod

// Documentation KDoc
/**
 * Calcule le temps de cuisson
 * @param weight Le poids en kg
 * @param method La méthode de cuisson
 * @return Le temps en minutes
 */
fun calculate(weight: Double, method: CookingMethod): Int {
    // ...
}

// Gestion des erreurs avec Result
suspend fun fetchData(): Result<Data> {
    return try {
        Result.success(data)
    } catch (e: Exception) {
        Result.failure(e)
    }
}

// Jetpack Compose : Composables clairs
@Composable
fun CookingScreen() {
    Column {
        // Components
    }
}
```

**Conventions Kotlin** :
- ktlint pour le formatage
- Utiliser data classes
- Coroutines pour async
- StateFlow pour UI state

## Processus de Pull Request

### 1. Préparation

```bash
# Fork et clone
git clone https://github.com/VOTRE_USERNAME/meat-cooking.git
cd meat-cooking

# Créer une branche
git checkout -b feature/ma-fonctionnalite
# ou
git checkout -b fix/mon-bug
```

### 2. Développement

**Backend :**
```bash
cd backend
npm install
npm run dev

# Tests
npm test
```

**iOS :**
```bash
cd ios-app
# Ouvrir dans Xcode
# Build et tester : Cmd+U
```

**Android :**
```bash
cd android-app
# Ouvrir dans Android Studio
# Tests : ./gradlew test
```

### 3. Commits

Suivre la convention Conventional Commits :

```bash
# Format : type(scope): description

# Types :
# feat: Nouvelle fonctionnalité
# fix: Correction de bug
# docs: Documentation
# style: Formatage
# refactor: Refactoring
# test: Tests
# chore: Maintenance

# Exemples :
git commit -m "feat(backend): add duck meat to database"
git commit -m "fix(ios): correct timer notification sound"
git commit -m "docs(readme): update installation instructions"
```

### 4. Tests

Avant de soumettre :

- ✅ Le code compile sans erreurs
- ✅ Les tests passent
- ✅ Le code suit les standards du projet
- ✅ La documentation est à jour
- ✅ Pas de console.log/print oubliés

### 5. Pull Request

```bash
git push origin feature/ma-fonctionnalite
```

Puis sur GitHub :

1. Créer la Pull Request
2. Remplir le template :
   - **Description** : Qu'est-ce qui change et pourquoi
   - **Type** : Feature/Fix/Docs/etc.
   - **Tests** : Comment tester les changements
   - **Screenshots** : Si changement UI
   - **Breaking changes** : Si applicable

3. Lier les Issues concernées
4. Attendre la revue de code

### Template de PR

```markdown
## Description
[Décrivez vos changements]

## Type de changement
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Comment tester ?
1. [Étape 1]
2. [Étape 2]

## Checklist
- [ ] Le code compile
- [ ] Les tests passent
- [ ] J'ai ajouté des tests
- [ ] J'ai mis à jour la documentation
- [ ] Pas de breaking changes (ou documentés)

## Screenshots
[Si applicable]
```

## Ajouter des viandes

Pour ajouter de nouvelles viandes à la base de données :

### 1. Éditer le fichier de données

Ouvrir `backend/seed/meatData.js` :

```javascript
{
  category: 'nouvelle_categorie', // boeuf, porc, agneau, volaille, etc.
  name: 'Nom de la viande',
  nameEn: 'English name',
  description: 'Description de la viande',
  cuts: [
    {
      name: 'Nom du morceau',
      nameEn: 'Cut name',
      description: 'Description du morceau',
      typicalWeight: { min: 0.3, max: 1.0, unit: 'kg' },
      typicalDimensions: { length: 20, width: 10, height: 3, unit: 'cm' },
      recommendations: 'Conseils de préparation',

      // Températures de cuisson à cœur
      temperatures: [
        {
          doneness: 'saignant',
          coreTemperature: 52,
          description: 'Description de la cuisson'
        },
        // ... autres cuissons
      ],

      // Méthodes de cuisson
      cookingMethods: [
        {
          method: 'poele', // Voir la liste des méthodes disponibles
          cookingTemperature: 180,
          baseTimePerKg: 18,
          baseTimePerCm: 3.5,
          adjustmentFactor: 1.0,
          restingTime: 5
        },
        // ... autres méthodes
      ]
    }
  ]
}
```

### 2. Méthodes de cuisson disponibles

```javascript
// Four
'four_traditionnel', 'four_convection', 'four_vapeur', 'four_chaleur_tournante'

// Poêle/Plancha
'poele', 'plancha', 'wok', 'sauteuse'

// Grillades
'grill', 'barbecue_charbon', 'barbecue_gaz', 'barbecue_electrique', 'salamandre'

// Mijotées
'cocotte', 'mijoteuse', 'braisage', 'ragout'

// Basse température
'sous_vide', 'basse_temperature'

// Rôtissage
'rotissoire', 'rotissoire_verticale'

// Vapeur
'vapeur', 'court_bouillon', 'pochage'

// Rapides
'saisie', 'flambe'

// Fumage
'fumoir_chaud', 'fumoir_froid'

// Spéciales
'air_fryer', 'micro_ondes', 'pierre_chaude'

// Traditionnelles
'tajine', 'papillote', 'croute_sel', 'croute_argile'

// Professionnelles
'plancha_professionnelle', 'grill_pierre_de_lave', 'grill_salamandre'
```

### 3. Niveaux de cuisson

```javascript
// Viandes rouges (bœuf, agneau)
'bleu'         // 45°C
'saignant'     // 50-52°C
'à point'      // 55-58°C
'bien cuit'    // 63-65°C

// Porc
'rosé'         // 63°C
'à point'      // 68°C
'bien cuit'    // 72°C

// Volaille
'bien cuit'    // 74°C

// Cuissons longues
'très bien cuit' // 85-93°C (épaule, travers)
```

### 4. Tester les nouvelles données

```bash
# Remplir la base de données
cd backend
node seed/seedDatabase.js

# Vérifier dans l'API
curl http://localhost:3000/api/meats/categories
```

### 5. Documenter

Ajouter une entrée dans le README principal listant la nouvelle viande.

## Questions ?

Si vous avez des questions :
1. Consultez la documentation
2. Cherchez dans les Issues existantes
3. Créez une nouvelle Issue avec le tag "question"

## Remerciements

Merci à tous les contributeurs qui rendent ce projet meilleur ! 🙏

---

**Happy Cooking! 🍖**
