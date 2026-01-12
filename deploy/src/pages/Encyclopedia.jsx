import { useState, useMemo, useEffect } from 'react'
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { meatCategories, donenessLevels } from '../data/meatData'
import { cutsData } from '../data/cutsData'
import { getRecipesByCut } from '../data/recipesData'
import { findRecipeByName } from '../data/accompanimentRecipes'
import { isFavorite, toggleFavorite } from '../services/storageService'
import { settingsService } from '../services/settingsService'

// Langue detection
const getLanguage = () => {
  const settings = settingsService.getSettings()
  return settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language
}

// Helper pour obtenir le texte traduit
const getText = (obj, field, lang) => {
  if (!obj) return ''
  if (lang === 'en' && obj[`${field}_en`]) {
    return obj[`${field}_en`]
  }
  return obj[field] || ''
}

// Helper pour obtenir un array traduit (conseils, erreurs, etc.)
const getTextArray = (obj, field, lang) => {
  if (!obj) return []
  if (lang === 'en' && obj[`${field}_en`] && Array.isArray(obj[`${field}_en`])) {
    return obj[`${field}_en`]
  }
  return obj[field] || []
}

// Translations object
const getTranslations = (lang) => ({
  back: lang === 'en' ? '← Back' : '← Retour',
  encyclopedia: lang === 'en' ? 'Encyclopedia' : 'Encyclopédie',
  searchPlaceholder: lang === 'en' ? 'Search a cut...' : 'Rechercher un morceau...',
  allCategories: lang === 'en' ? 'All categories' : 'Toutes les catégories',
  cuts: lang === 'en' ? 'cuts' : 'morceaux',
  ingredients: lang === 'en' ? '🛒 Ingredients' : '🛒 Ingrédients',
  tips: lang === 'en' ? '💡 Tips' : '💡 Conseils',
  chefTips: lang === 'en' ? '👨‍🍳 Chef tips' : '👨‍🍳 Conseils du chef',
  recipes: lang === 'en' ? '👨‍🍳 Recipes' : '👨‍🍳 Recettes',
  rawPreparation: lang === 'en' ? '❄️ Raw preparation' : '❄️ Préparation crue',
  recommendedSauces: lang === 'en' ? '🥄 Recommended sauces' : '🥄 Sauces recommandées',
  sideDishes: lang === 'en' ? '🥗 Side dishes' : '🥗 Accompagnements',
  sauce: lang === 'en' ? '🥄 Sauce' : '🥄 Sauce',
  sideDish: lang === 'en' ? '🥗 Side dish' : '🥗 Accompagnement',
  recommendedDoneness: lang === 'en' ? '🔥 Recommended doneness' : '🔥 Cuisson recommandée',
  averageWeight: lang === 'en' ? 'Weight' : 'Poids',
  idealThickness: lang === 'en' ? 'Ideal thickness' : 'Épaisseur idéale',
  hasBone: lang === 'en' ? 'With bone' : 'Avec os',
  noRecipeAvailable: lang === 'en' ? 'No recipe available' : 'Recette non disponible',
  seeRecipe: lang === 'en' ? 'See recipe' : 'Voir la recette',
  close: lang === 'en' ? 'Close' : 'Fermer',
  min: 'min',
  portions: lang === 'en' ? 'servings' : 'portions',
  prepTime: lang === 'en' ? '⏱️ Prep' : '⏱️ Prép',
  cookTime: lang === 'en' ? '🔥 Cook' : '🔥 Cuisson',
  addToFavorites: lang === 'en' ? 'Add to favorites' : 'Ajouter aux favoris',
  removeFromFavorites: lang === 'en' ? 'Remove from favorites' : 'Retirer des favoris',
  goToCalculator: lang === 'en' ? '🔥 Go to calculator' : '🔥 Aller au calculateur',
  noResults: lang === 'en' ? 'No results found' : 'Aucun résultat trouvé',
  coreTemperatures: lang === 'en' ? '🌡️ Core temperatures' : '🌡️ Températures à cœur',
  mistakesToAvoid: lang === 'en' ? '⚠️ Mistakes to avoid' : '⚠️ Erreurs à éviter',
  cookingMethods: lang === 'en' ? '🔥 Cooking methods' : '🔥 Méthodes de cuisson',
  anatomy: lang === 'en' ? '🔬 Anatomy' : '🔬 Anatomie',
  characteristics: lang === 'en' ? '📊 Characteristics' : '📊 Caractéristiques',
  tenderness: lang === 'en' ? 'Tenderness' : 'Tendreté',
  flavor: lang === 'en' ? 'Flavor' : 'Saveur',
  marbling: lang === 'en' ? 'Marbling' : 'Persillage',
  price: lang === 'en' ? 'Price' : 'Prix',
  wineAccords: lang === 'en' ? '🍷 Wine pairings' : '🍷 Accords vins',
  calculateCookingTime: lang === 'en' ? 'Calculate cooking time' : 'Calculer le temps de cuisson',
  steps: lang === 'en' ? '📝 Steps' : '📝 Étapes',
  pairsWellWith: lang === 'en' ? '🍖 Pairs well with' : '🍖 Se marie bien avec',
  history: lang === 'en' ? '📜 History' : '📜 Histoire',
  cookingMethodsTitle: lang === 'en' ? '🔥 Cooking methods' : '🔥 Modes de cuisson',
  nutritionLabel: lang === 'en' ? '🥗 Nutrition' : '🥗 Nutrition',
  conservationLabel: lang === 'en' ? '❄️ Storage' : '❄️ Conservation',
  howToChoose: lang === 'en' ? '🔍 How to choose' : '🔍 Comment bien choisir',
  // Selection keys translations
  selectionKeys: {
    couleur: lang === 'en' ? 'Color' : 'Couleur',
    texture: lang === 'en' ? 'Texture' : 'Texture',
    maturite: lang === 'en' ? 'Aging' : 'Maturité',
    qualite: lang === 'en' ? 'Quality' : 'Qualité',
    age: lang === 'en' ? 'Age' : 'Âge',
    aspect: lang === 'en' ? 'Appearance' : 'Aspect',
    saison: lang === 'en' ? 'Season' : 'Saison'
  },
  raw: lang === 'en' ? '❄️ Raw' : '❄️ Cru',
  persons: lang === 'en' ? 'serv.' : 'pers.',
  subcategories: lang === 'en' ? 'subcategories' : 'sous-catégories',
  nutritionPer100g: lang === 'en' ? '📊 Nutrition (per 100g)' : '📊 Nutrition (pour 100g)',
  difficultyEasy: lang === 'en' ? 'easy' : 'facile',
  difficultyMedium: lang === 'en' ? 'medium' : 'moyen',
  difficultyHard: lang === 'en' ? 'hard' : 'difficile',
  calories: 'Calories',
  proteins: lang === 'en' ? 'Proteins' : 'Protéines',
  carbs: lang === 'en' ? 'Carbs' : 'Glucides',
  fats: lang === 'en' ? 'Fats' : 'Lipides'
})

// Modal pour afficher une recette d'accompagnement ou de sauce
function RecipeModal({ recipe, onClose }) {
  const lang = getLanguage()
  const t = getTranslations(lang)

  if (!recipe || !recipe.name) return null

  const formatTime = (minutes) => {
    if (!minutes || minutes === 0) return '-'
    if (minutes < 60) return `${minutes} min`
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return m > 0 ? `${h}h${m}` : `${h}h`
  }

  const isSauce = recipe.recipeType === 'sauce'
  // Utiliser les versions traduites si disponibles
  const ingredients = lang === 'en' && recipe.ingredients_en ? recipe.ingredients_en : (recipe.ingredients || [])
  const steps = lang === 'en' && recipe.steps_en ? recipe.steps_en : (recipe.steps || [])
  const tips = lang === 'en' && recipe.tips_en ? recipe.tips_en : (recipe.tips || [])
  const pairings = recipe.pairings || []
  const recipeName = lang === 'en' && recipe.name_en ? recipe.name_en : recipe.name
  const recipeDescription = lang === 'en' && recipe.description_en ? recipe.description_en : recipe.description
  const chefTips = lang === 'en' && recipe.chefTips_en ? recipe.chefTips_en : (recipe.chefTips || [])

  const mainColor = isSauce ? '#db2777' : '#16a34a'
  const lightBg = isSauce ? '#fce7f3' : '#dcfce7'

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: lightBg,
          borderBottom: '1px solid #d1d5db',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '40px' }}>{recipe.icon || '🍽️'}</span>
            <div>
              <h2 style={{ fontWeight: 'bold', fontSize: '20px', color: '#111827', margin: 0 }}>{recipeName}</h2>
              <span style={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '9999px',
                color: 'white',
                backgroundColor: mainColor
              }}>
                {isSauce ? t.sauce : t.sideDish}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '1px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#6b7280',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '20px' }}>
          {/* Description */}
          {recipeDescription && (
            <p style={{ fontSize: '16px', color: '#374151', marginBottom: '16px' }}>{recipeDescription}</p>
          )}

          {/* Badges info */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {recipe.difficulty && (
              <span style={{
                fontSize: '14px',
                padding: '4px 12px',
                borderRadius: '9999px',
                color: 'white',
                fontWeight: '500',
                backgroundColor: recipe.difficulty === 'facile' ? '#22c55e' : recipe.difficulty === 'moyen' ? '#f59e0b' : '#ef4444'
              }}>
                {recipe.difficulty === 'facile' ? t.difficultyEasy : recipe.difficulty === 'moyen' ? t.difficultyMedium : t.difficultyHard}
              </span>
            )}
            <span style={{ fontSize: '14px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#e5e7eb', color: '#374151' }}>
              {t.prepTime}: {formatTime(recipe.prepTime)}
            </span>
            {recipe.cookTime > 0 && (
              <span style={{ fontSize: '14px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#e5e7eb', color: '#374151' }}>
                {t.cookTime}: {formatTime(recipe.cookTime)}
              </span>
            )}
            {recipe.servings && (
              <span style={{ fontSize: '14px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#e5e7eb', color: '#374151' }}>
                👥 {recipe.servings} {t.persons}
              </span>
            )}
          </div>

          {/* Ingrédients */}
          {ingredients.length > 0 && (
            <div style={{ backgroundColor: '#f3f4f6', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '12px', fontSize: '18px' }}>{t.ingredients}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {ingredients.map((ing, i) => (
                  <li key={i} style={{ fontSize: '15px', color: '#374151', marginBottom: '8px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: mainColor }}>•</span>
                    <span>
                      {ing.quantity && <strong style={{ color: '#111827' }}>{ing.quantity} {ing.unit}</strong>} {ing.name}
                      {ing.note && <span style={{ color: '#6b7280', fontStyle: 'italic' }}> ({ing.note})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Étapes */}
          {steps.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '12px', fontSize: '18px' }}>{t.steps}</h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {steps.map((step, index) => {
                  const isSimpleStep = typeof step === 'string'
                  const stepNum = isSimpleStep ? index + 1 : step.step
                  const stepText = isSimpleStep ? step : step.description
                  const stepTitle = isSimpleStep ? null : step.title

                  return (
                    <li key={index} style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                      <span style={{
                        flexShrink: 0,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: mainColor,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {stepNum}
                      </span>
                      <div style={{ flex: 1 }}>
                        {stepTitle && <h6 style={{ fontWeight: '600', color: '#111827', margin: '0 0 4px 0' }}>{stepTitle}</h6>}
                        <p style={{ color: '#374151', margin: 0, fontSize: '15px' }}>{stepText}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          )}

          {/* Conseils */}
          {tips.length > 0 && (
            <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
              <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '12px', fontSize: '18px' }}>{t.tips}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {tips.map((tip, i) => (
                  <li key={i} style={{ fontSize: '15px', color: '#374151', marginBottom: '8px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#d97706' }}>★</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Accords */}
          {pairings.length > 0 && (
            <div>
              <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '12px', fontSize: '18px' }}>{t.pairsWellWith}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {pairings.map((pairing, i) => (
                  <span key={i} style={{ fontSize: '14px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#e5e7eb', color: '#374151' }}>
                    {pairing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Liste des catégories
function CategoryList() {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const [searchTerm, setSearchTerm] = useState('')

  // Convertir en tableau
  const categoriesArray = Object.entries(meatCategories).map(([id, data]) => {
    const cutsCount = cutsData[id]
      ? Object.values(cutsData[id]).reduce((acc, subcat) => {
          return acc + (subcat.cuts ? Object.keys(subcat.cuts).length : 0)
        }, 0)
      : 0
    return { id, ...data, cutsCount }
  })

  // Filtrer si recherche
  const filteredCategories = searchTerm
    ? categoriesArray.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categoriesArray

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex items-center gap-2 bg-surface rounded-xl p-3 border border-gray-200">
        <span>🔍</span>
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent outline-none text-text-dark"
        />
      </div>

      {/* Categories Grid */}
      <div className="space-y-3">
        {filteredCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/encyclopedia/${cat.id}`}
            className="card flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: cat.color + '20' }}
            >
              {cat.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-dark">{lang === 'en' && cat.name_en ? cat.name_en : cat.name}</h3>
              <p className="text-sm text-text-light line-clamp-1">{getText(cat, 'histoire', lang)?.substring(0, 60)}...</p>
            </div>
            <div className="text-right flex items-center gap-2">
              <span
                className="text-white text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: cat.color }}
              >
                {cat.cutsCount} {t.cuts}
              </span>
              <span className="text-text-light">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Détail d'une catégorie
function CategoryDetail() {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const { categoryId } = useParams()
  const category = meatCategories[categoryId]
  const categoryCuts = cutsData[categoryId]

  if (!category || !categoryCuts) {
    return (
      <div className="text-center py-8">
        <p className="text-text-light">{lang === 'en' ? 'Category not found' : 'Catégorie non trouvée'}</p>
        <Link to="/encyclopedia" className="text-accent">{t.back}</Link>
      </div>
    )
  }

  // Convertir sous-catégories en tableau
  const subcategoriesArray = Object.entries(categoryCuts).map(([id, data]) => ({
    id,
    ...data,
    cutCount: data.cuts ? Object.keys(data.cuts).length : 0
  }))

  return (
    <div>
      <Link to="/encyclopedia" className="text-accent mb-4 inline-block">{t.allCategories}</Link>

      {/* Category Header */}
      <div className="card mb-6" style={{ borderLeft: `4px solid ${category.color}` }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-text-dark">{lang === 'en' && category.name_en ? category.name_en : category.name}</h1>
            <p className="text-sm text-text-light">{subcategoriesArray.length} {t.subcategories}</p>
          </div>
        </div>

        {/* Histoire */}
        {(category.histoire || category.histoire_en) && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-text-dark mb-1">{t.history}</h3>
            <p className="text-sm text-text-light">{getText(category, 'histoire', lang)}</p>
          </div>
        )}

        {/* Nutrition */}
        {(category.nutrition || category.nutrition_en) && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-text-dark mb-1">{t.nutritionLabel}</h3>
            <p className="text-sm text-text-light">{getText(category, 'nutrition', lang)}</p>
          </div>
        )}

        {/* Conservation */}
        {(category.conservation || category.conservation_en) && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-text-dark mb-1">{t.conservationLabel}</h3>
            <p className="text-sm text-text-light">{getText(category, 'conservation', lang)}</p>
          </div>
        )}

        {/* Selection Tips */}
        {category.selection && (
          <div className="bg-gold-light rounded-lg p-3">
            <h3 className="text-sm font-semibold text-text-dark mb-2">{t.howToChoose}</h3>
            <ul className="text-xs text-text-light space-y-1">
              {Object.entries(lang === 'en' && category.selection_en ? category.selection_en : category.selection).map(([key, value]) => (
                <li key={key} className="flex gap-2">
                  <span className="font-medium">{t.selectionKeys[key] || key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Subcategories */}
      <h2 className="text-lg font-bold text-text-dark mb-3">{lang === 'en' ? 'Cuts' : 'Morceaux'}</h2>
      <div className="space-y-2">
        {subcategoriesArray.map((subcat) => (
          <Link
            key={subcat.id}
            to={`/encyclopedia/${categoryId}/${subcat.id}`}
            className="card flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="font-semibold text-text-dark">{getText(subcat, 'name', lang)}</h3>
              <p className="text-xs text-text-light">{getText(subcat, 'description', lang)}</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-white text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: category.color }}
              >
                {subcat.cutCount}
              </span>
              <span className="text-text-light">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Liste des morceaux d'une sous-catégorie
function SubcategoryDetail() {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const { categoryId, subcategoryId } = useParams()
  const category = meatCategories[categoryId]
  const subcategory = cutsData[categoryId]?.[subcategoryId]

  if (!category || !subcategory) {
    return (
      <div className="text-center py-8">
        <p className="text-text-light">{lang === 'en' ? 'Subcategory not found' : 'Sous-catégorie non trouvée'}</p>
        <Link to="/encyclopedia" className="text-accent">{t.back}</Link>
      </div>
    )
  }

  // Convertir les morceaux en tableau
  const cutsArray = subcategory.cuts
    ? Object.entries(subcategory.cuts).map(([id, data]) => ({ id, ...data }))
    : []

  return (
    <div>
      <Link to={`/encyclopedia/${categoryId}`} className="text-accent mb-4 inline-block">
        ← {lang === 'en' && category.name_en ? category.name_en : category.name}
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
          style={{ backgroundColor: category.color + '20' }}
        >
          {subcategory.icon || category.icon}
        </div>
        <div>
          <h1 className="text-xl font-bold text-text-dark">{getText(subcategory, 'name', lang)}</h1>
          <p className="text-sm text-text-light">{getText(subcategory, 'description', lang)}</p>
        </div>
      </div>

      {/* Cuts List */}
      <div className="space-y-2">
        {cutsArray.map((cut) => (
          <Link
            key={cut.id}
            to={`/encyclopedia/${categoryId}/${subcategoryId}/${cut.id}`}
            className="card flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cut.icon || subcategory.icon || category.icon}</span>
              <div>
                <h3 className="font-semibold text-text-dark">{getText(cut, 'name', lang)}</h3>
                <p className="text-xs text-text-light">{cut.poids_moyen}</p>
              </div>
            </div>
            <span className="text-text-light">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Section des recettes pour un morceau
function RecipesSection({ cutId, categoryId, category, initialOpenRecipe }) {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const [expandedRecipe, setExpandedRecipe] = useState(initialOpenRecipe || null)
  // Passer categoryId pour éviter les conflits (ex: escalope de veau vs escalope de dinde)
  const recipes = getRecipesByCut(cutId, categoryId)

  // Ouvrir automatiquement la recette si passée en paramètre
  useEffect(() => {
    if (initialOpenRecipe) {
      setExpandedRecipe(initialOpenRecipe)
      // Scroller vers la section des recettes
      setTimeout(() => {
        document.getElementById('recipes-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [initialOpenRecipe])

  if (!recipes || recipes.length === 0) {
    return null
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'facile': return '#8BC34A'
      case 'moyen': return '#FFB300'
      case 'difficile': return '#F44336'
      default: return '#8BC34A'
    }
  }

  const formatTime = (minutes) => {
    if (minutes === 0) return '-'
    if (minutes < 60) return `${minutes} min`
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return m > 0 ? `${h}h${m}` : `${h}h`
  }

  return (
    <div id="recipes-section" className="mb-4">
      <h3 className="font-bold text-text-dark mb-3">{t.recipes}</h3>
      <div className="space-y-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            {/* En-tête de la recette */}
            <button
              onClick={() => setExpandedRecipe(expandedRecipe === recipe.id ? null : recipe.id)}
              className="w-full text-left"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{recipe.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-text-dark">{lang === 'en' && recipe.name_en ? recipe.name_en : recipe.name}</h4>
                  <p className="text-sm text-text-light line-clamp-2">{lang === 'en' && recipe.description_en ? recipe.description_en : recipe.description}</p>

                  {/* Badges info */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className="text-xs px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
                    >
                      {recipe.difficulty === 'facile' ? t.difficultyEasy : recipe.difficulty === 'moyen' ? t.difficultyMedium : t.difficultyHard}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-text-light">
                      {t.prepTime}: {formatTime(recipe.prepTime)}
                    </span>
                    {recipe.cookTime > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-text-light">
                        {t.cookTime}: {formatTime(recipe.cookTime)}
                      </span>
                    )}
                    {recipe.isCru && (
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                        {t.raw}
                      </span>
                    )}
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-text-light">
                      👥 {recipe.servings} {t.persons}
                    </span>
                  </div>
                </div>
                <span className="text-text-light text-xl">
                  {expandedRecipe === recipe.id ? '▲' : '▼'}
                </span>
              </div>
            </button>

            {/* Contenu expandé */}
            {expandedRecipe === recipe.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                {/* Ingrédients */}
                <div className="mb-4">
                  <h5 className="font-bold text-text-dark mb-2">{t.ingredients}</h5>
                  <ul className="space-y-1">
                    {(lang === 'en' && recipe.ingredients_en ? recipe.ingredients_en : recipe.ingredients).map((ing, i) => (
                      <li key={i} className="text-sm text-text-light flex gap-2">
                        <span className="text-accent">•</span>
                        <span>
                          {ing.quantity && <strong>{ing.quantity} {ing.unit}</strong>} {ing.name}
                          {ing.note && <span className="text-text-light italic"> ({ing.note})</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Étapes */}
                <div className="mb-4">
                  <h5 className="font-bold text-text-dark mb-2">{t.steps}</h5>
                  <ol className="space-y-3">
                    {(lang === 'en' && recipe.steps_en ? recipe.steps_en : recipe.steps).map((step) => (
                      <li key={step.step} className="text-sm">
                        <div className="flex gap-3">
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: category.color }}
                          >
                            {step.step}
                          </span>
                          <div>
                            <h6 className="font-semibold text-text-dark">{step.title}</h6>
                            <p className="text-text-light">{step.description}</p>
                            {step.tip && (
                              <p className="text-xs text-accent mt-1 italic">💡 {step.tip}</p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Conseils du chef */}
                {((lang === 'en' && recipe.chefTips_en) || recipe.chefTips) && ((lang === 'en' && recipe.chefTips_en ? recipe.chefTips_en : recipe.chefTips) || []).length > 0 && (
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFD93D20' }}>
                    <h5 className="font-bold text-text-dark mb-2">{t.chefTips}</h5>
                    <ul className="space-y-1">
                      {(lang === 'en' && recipe.chefTips_en ? recipe.chefTips_en : recipe.chefTips).map((tip, i) => (
                        <li key={i} className="text-sm text-text-light flex gap-2">
                          <span className="text-gold">★</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Nutrition */}
                {recipe.nutritionPer100g && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-text-dark text-sm mb-2">{t.nutritionPer100g}</h5>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div>
                        <div className="text-xs text-text-light">{t.calories}</div>
                        <div className="font-bold text-sm text-text-dark">{recipe.nutritionPer100g.calories}</div>
                      </div>
                      <div>
                        <div className="text-xs text-text-light">{t.proteins}</div>
                        <div className="font-bold text-sm text-text-dark">{recipe.nutritionPer100g.proteins}g</div>
                      </div>
                      <div>
                        <div className="text-xs text-text-light">{t.carbs}</div>
                        <div className="font-bold text-sm text-text-dark">{recipe.nutritionPer100g.carbs}g</div>
                      </div>
                      <div>
                        <div className="text-xs text-text-light">{t.fats}</div>
                        <div className="font-bold text-sm text-text-dark">{recipe.nutritionPer100g.fat}g</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Détail d'un morceau
function CutDetail() {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const { categoryId, subcategoryId, cutId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const category = meatCategories[categoryId]
  const subcategory = cutsData[categoryId]?.[subcategoryId]
  const cut = subcategory?.cuts?.[cutId]

  // Récupérer l'ID de recette à ouvrir depuis la navigation
  const openRecipeId = location.state?.openRecipe || null

  // État pour forcer le re-rendu après toggle
  const [, forceUpdate] = useState(0)

  // État pour la recette sélectionnée (modal)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  // Gérer le clic sur une sauce ou un accompagnement
  const handleRecipeClick = (name) => {
    console.log('Clicked on:', name)
    const recipe = findRecipeByName(name)
    console.log('Found recipe:', recipe)
    if (recipe) {
      setSelectedRecipe(recipe)
    }
  }

  // Calculer si c'est un favori (lecture directe depuis localStorage)
  const isFav = categoryId && subcategoryId && cutId
    ? isFavorite(categoryId, subcategoryId, cutId)
    : false

  // Basculer le favori
  const handleToggleFavorite = () => {
    toggleFavorite({
      category: categoryId,
      subcategory: subcategoryId,
      cutId: cutId,
      cutName: cut?.name,
      cutIcon: cut?.icon,
      meatName: category?.name,
      meatIcon: category?.icon,
      meatColor: category?.color
    })
    // Forcer le re-rendu pour mettre à jour l'UI
    forceUpdate(n => n + 1)
  }

  if (!category || !subcategory || !cut) {
    return (
      <div className="text-center py-8">
        <p className="text-text-light">{lang === 'en' ? 'Cut not found' : 'Morceau non trouvé'}</p>
        <Link to="/encyclopedia" className="text-accent">{t.back}</Link>
      </div>
    )
  }

  // Niveaux de cuisson pour ce type de viande
  // Filtrer pour n'afficher que les températures définies dans temps_base_100g du morceau
  const donenessType = cut.donenessType || 'viande_rouge'
  const allDoneness = donenessLevels[donenessType] || donenessLevels.viande_rouge
  const cutDoneness = cut.temps_base_100g
    ? allDoneness.filter(level => level.id in cut.temps_base_100g)
    : allDoneness

  return (
    <div className="pb-24">
      <div className="flex items-center justify-between mb-4">
        <Link
          to={`/encyclopedia/${categoryId}/${subcategoryId}`}
          className="text-accent"
        >
          ← {getText(subcategory, 'name', lang)}
        </Link>
        <button
          onClick={handleToggleFavorite}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all active:scale-90 ${
            isFav ? 'bg-accent-light' : 'bg-surface'
          }`}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-6xl">{cut.icon || category.icon}</span>
        <h1
          className="text-2xl font-bold italic mt-2"
          style={{ color: category.color }}
        >
          {getText(cut, 'name', lang)}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span
            className="text-white text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: category.color }}
          >
            {lang === 'en' && category.name_en ? category.name_en : category.name}
          </span>
          <span className="text-text-light text-xs">{cut.poids_moyen}</span>
        </div>
      </div>

      {/* Caractéristiques */}
      {cut.caracteristiques && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-3">{t.characteristics}</h3>
          <div className="grid grid-cols-4 gap-2">
            {cut.caracteristiques.tendrete !== undefined && (
              <div className="text-center">
                <div className="text-xs text-text-light">{t.tenderness}</div>
                <div className="font-bold" style={{ color: category.color }}>
                  {cut.caracteristiques.tendrete}/10
                </div>
              </div>
            )}
            {cut.caracteristiques.saveur !== undefined && (
              <div className="text-center">
                <div className="text-xs text-text-light">{t.flavor}</div>
                <div className="font-bold" style={{ color: category.color }}>
                  {cut.caracteristiques.saveur}/10
                </div>
              </div>
            )}
            {cut.caracteristiques.persillage !== undefined && (
              <div className="text-center">
                <div className="text-xs text-text-light">{t.marbling}</div>
                <div className="font-bold" style={{ color: category.color }}>
                  {cut.caracteristiques.persillage}/10
                </div>
              </div>
            )}
            {cut.caracteristiques.prix && (
              <div className="text-center">
                <div className="text-xs text-text-light">{t.price}</div>
                <div className="font-bold" style={{ color: category.color }}>
                  {cut.caracteristiques.prix}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Anatomie / Description */}
      {(cut.anatomie || cut.anatomie_en) && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-2">{t.anatomy}</h3>
          <p className="text-sm text-text-light">{getText(cut, 'anatomie', lang)}</p>
        </div>
      )}

      {/* Modes de cuisson */}
      {cut.cuissons && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-3">{t.cookingMethodsTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {cut.cuissons.map((method) => {
              const methodLabels = {
                // Cuisson rapide / Quick cooking
                poele: { fr: '🍳 Poêle', en: '🍳 Pan' },
                saisir: { fr: '🔥 Saisir', en: '🔥 Sear' },
                grill: { fr: '♨️ Grill', en: '♨️ Grill' },
                plancha: { fr: '🫓 Plancha', en: '🫓 Griddle' },
                wok: { fr: '🥘 Wok', en: '🥘 Wok' },
                flambe: { fr: '🔥 Flambé', en: '🔥 Flambé' },
                pierrade: { fr: '🪨 Pierrade', en: '🪨 Hot stone' },
                // Four / Oven
                four: { fr: '🔥 Four', en: '🔥 Oven' },
                rotissoire: { fr: '🔄 Rôtissoire', en: '🔄 Rotisserie' },
                broche: { fr: '🍢 Broche', en: '🍢 Spit' },
                gratin: { fr: '🧀 Gratin', en: '🧀 Gratin' },
                croute: { fr: '🥖 En croûte', en: '🥖 In crust' },
                sel: { fr: '🧂 Croûte de sel', en: '🧂 Salt crust' },
                papillote: { fr: '📄 Papillote', en: '📄 En papillote' },
                // Cuisson lente / Slow cooking
                braise: { fr: '🍲 Braisé', en: '🍲 Braised' },
                mijoter: { fr: '🥣 Mijoté', en: '🥣 Stewed' },
                cocotte: { fr: '🫕 Cocotte', en: '🫕 Dutch oven' },
                confit: { fr: '🍯 Confit', en: '🍯 Confit' },
                tajine: { fr: '🫖 Tajine', en: '🫖 Tagine' },
                basse_temp: { fr: '🌡️ Basse temp.', en: '🌡️ Low temp.' },
                sousvide: { fr: '💧 Sous-vide', en: '💧 Sous-vide' },
                reverse_sear: { fr: '↩️ Reverse sear', en: '↩️ Reverse sear' },
                // Extérieur / Outdoor
                bbq: { fr: '🍖 BBQ direct', en: '🍖 Direct BBQ' },
                bbq_indirect: { fr: '🍖 BBQ indirect', en: '🍖 Indirect BBQ' },
                fumage: { fr: '💨 Fumage', en: '💨 Smoking' },
                fumage_froid: { fr: '❄️ Fumage froid', en: '❄️ Cold smoking' },
                cheminee: { fr: '🏠 Cheminée', en: '🏠 Fireplace' },
                // Cuisson humide / Wet cooking
                pocher: { fr: '💧 Poché', en: '💧 Poached' },
                vapeur: { fr: '♨️ Vapeur', en: '♨️ Steamed' },
                bouillir: { fr: '🫗 Bouilli', en: '🫗 Boiled' },
                // Friture / Frying
                friture: { fr: '🍟 Friture', en: '🍟 Deep fried' },
                paner: { fr: '🍞 Pané', en: '🍞 Breaded' }
              }
              const label = methodLabels[method]
              return (
                <span
                  key={method}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ backgroundColor: category.color + '20', color: category.color }}
                >
                  {label ? (lang === 'en' ? label.en : label.fr) : method}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Températures à cœur - seulement si cuisson possible */}
      {cut.donenessType && cutDoneness && cutDoneness.length > 0 && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-3">{t.coreTemperatures}</h3>
          <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${Math.min(cutDoneness.length, 4)}, 1fr)` }}>
            {cutDoneness.map((level) => (
              <div
                key={level.id}
                className="text-center p-2 rounded-lg"
                style={{ backgroundColor: level.color + '20' }}
              >
                <div className="text-xs text-text-dark font-medium">{getText(level, 'name', lang)}</div>
                <div className="font-bold" style={{ color: level.color }}>{level.temp}°C</div>
                <div className="text-xs text-text-light">{getText(level, 'description', lang)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Message spécial pour les préparations crues */}
      {!cut.donenessType && cut.cuissons && cut.cuissons.length === 0 && (
        <div className="card mb-4 bg-blue-50 border border-blue-200">
          <h3 className="font-bold text-text-dark mb-2">{t.rawPreparation}</h3>
          <p className="text-sm text-text-light">
            {lang === 'en'
              ? 'This cut is consumed raw. Use ultra-fresh quality meat, purchased the same day from a trusted butcher.'
              : 'Ce morceau se consomme cru. Utilisez une viande ultra-fraîche de qualité, achetée le jour même chez un boucher de confiance.'}
          </p>
        </div>
      )}

      {/* Conseils */}
      {getTextArray(cut, 'conseils', lang).length > 0 && (
        <div className="card mb-4 bg-gold-light border border-gold">
          <h3 className="font-bold text-text-dark mb-2">{t.tips}</h3>
          <ul className="space-y-2">
            {getTextArray(cut, 'conseils', lang).map((conseil, i) => (
              <li key={i} className="text-sm text-text-light flex items-start gap-2">
                <span className="text-green">✓</span>
                <span>{conseil}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Erreurs à éviter */}
      {getTextArray(cut, 'erreurs', lang).length > 0 && (
        <div className="card mb-4 bg-red-50 border border-red-200">
          <h3 className="font-bold text-text-dark mb-2">{t.mistakesToAvoid}</h3>
          <ul className="space-y-2">
            {getTextArray(cut, 'erreurs', lang).map((erreur, i) => (
              <li key={i} className="text-sm text-text-light flex items-start gap-2">
                <span className="text-error">✗</span>
                <span>{erreur}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sauces */}
      {cut.sauces && cut.sauces.length > 0 && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-2">{t.recommendedSauces}</h3>
          <div className="flex flex-wrap gap-2">
            {cut.sauces.map((sauce, i) => {
              const hasRecipe = findRecipeByName(sauce)
              return hasRecipe ? (
                <button
                  key={i}
                  onClick={() => handleRecipeClick(sauce)}
                  className="bg-pink-100 text-pink-700 text-sm px-3 py-1 rounded-full hover:bg-pink-600 hover:text-white transition-colors cursor-pointer flex items-center gap-1 border border-pink-300"
                >
                  {sauce}
                  <span className="text-xs">📖</span>
                </button>
              ) : (
                <span
                  key={i}
                  className="bg-pink-50 text-pink-600 text-sm px-3 py-1 rounded-full"
                >
                  {sauce}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Accompagnements */}
      {cut.accompagnements && cut.accompagnements.length > 0 && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-2">{t.sideDishes}</h3>
          <div className="flex flex-wrap gap-2">
            {cut.accompagnements.map((acc, i) => {
              const hasRecipe = findRecipeByName(acc)
              return hasRecipe ? (
                <button
                  key={i}
                  onClick={() => handleRecipeClick(acc)}
                  className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full cursor-pointer flex items-center gap-1 hover:bg-green-600 hover:text-white transition-colors border border-green-300"
                >
                  {acc}
                  <span className="text-xs">📖</span>
                </button>
              ) : (
                <span
                  key={i}
                  className="bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full"
                >
                  {acc}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Vins */}
      {cut.vins && cut.vins.length > 0 && (
        <div className="card mb-4">
          <h3 className="font-bold text-text-dark mb-2">{t.wineAccords}</h3>
          <div className="flex flex-wrap gap-2">
            {cut.vins.map((vin, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full"
                style={{ backgroundColor: '#9C27B020', color: '#9C27B0' }}
              >
                {vin}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recettes */}
      <RecipesSection cutId={cutId} categoryId={categoryId} category={category} initialOpenRecipe={openRecipeId} />

      {/* Action Button */}
      <button
        onClick={() => navigate('/calculator', {
          state: {
            fromEncyclopedia: true,
            categoryId,
            subcategoryId,
            cutId,
            meatName: category?.name,
            meatIcon: category?.icon,
            meatColor: category?.color,
            subcategoryName: subcategory?.name,
            cutName: cut?.name,
            cutIcon: cut?.icon
          }
        })}
        className="btn-primary flex items-center justify-center gap-2"
      >
        <span>🧮</span>
        <span>{t.calculateCookingTime}</span>
      </button>

      {/* Modal recette accompagnement/sauce */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  )
}

// Recherche globale dans tous les morceaux
function GlobalSearch({ searchTerm }) {
  const lang = getLanguage()
  const t = getTranslations(lang)

  const allCuts = useMemo(() => {
    const results = []
    Object.entries(cutsData).forEach(([categoryId, subcats]) => {
      const category = meatCategories[categoryId]
      Object.entries(subcats).forEach(([subcatId, subcat]) => {
        if (subcat.cuts) {
          Object.entries(subcat.cuts).forEach(([cutId, cut]) => {
            results.push({
              ...cut,
              id: cutId,
              categoryId,
              subcategoryId: subcatId,
              categoryName: category?.name,
              categoryName_en: category?.name_en,
              categoryIcon: category?.icon,
              categoryColor: category?.color,
              subcategoryName: subcat.name,
              subcategoryName_en: subcat.name_en
            })
          })
        }
      })
    })
    return results
  }, [])

  const filteredCuts = searchTerm.length > 1
    ? allCuts.filter(cut =>
        cut.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cut.name_en && cut.name_en.toLowerCase().includes(searchTerm.toLowerCase())) ||
        cut.categoryName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cut.subcategoryName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  if (filteredCuts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-text-light">{t.noResults} "{searchTerm}"</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-text-light mb-3">
        {filteredCuts.length} {lang === 'en' ? 'result(s)' : 'résultat(s)'}
      </p>
      {filteredCuts.map((cut) => (
        <Link
          key={`${cut.categoryId}-${cut.subcategoryId}-${cut.id}`}
          to={`/encyclopedia/${cut.categoryId}/${cut.subcategoryId}/${cut.id}`}
          className="card flex items-center gap-3 hover:shadow-md transition-shadow"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: cut.categoryColor + '20' }}
          >
            {cut.icon || cut.categoryIcon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-dark">{getText(cut, 'name', lang)}</h3>
            <p className="text-xs text-text-light">
              {getText(cut, 'categoryName', lang)} • {getText(cut, 'subcategoryName', lang)}
            </p>
          </div>
          <span className="text-text-light">→</span>
        </Link>
      ))}
    </div>
  )
}

function Encyclopedia() {
  const lang = getLanguage()
  const t = getTranslations(lang)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-4 pb-24">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark">{t.encyclopedia}</h1>
        <p className="text-text-light text-sm">{lang === 'en' ? 'Everything about meats' : 'Tout savoir sur les viandes'}</p>
      </header>

      <Routes>
        <Route
          index
          element={
            <>
              {/* Search */}
              <div className="flex items-center gap-2 bg-surface rounded-xl p-3 mb-6 border border-gray-200">
                <span>🔍</span>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-text-dark"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-text-light"
                  >
                    ✕
                  </button>
                )}
              </div>

              {searchTerm.length > 1 ? (
                <GlobalSearch searchTerm={searchTerm} />
              ) : (
                <CategoryList />
              )}
            </>
          }
        />
        <Route path=":categoryId" element={<CategoryDetail />} />
        <Route path=":categoryId/:subcategoryId" element={<SubcategoryDetail />} />
        <Route path=":categoryId/:subcategoryId/:cutId" element={<CutDetail />} />
      </Routes>
    </div>
  )
}

export default Encyclopedia
