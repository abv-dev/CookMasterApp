# Système d'Historique CookMaster

## Vue d'ensemble

Le système d'historique permet aux utilisateurs de sauvegarder, consulter et gérer leurs calculs de cuisson passés. Il utilise AsyncStorage pour la persistance locale des données.

## Architecture

### 1. Context Provider (`/src/context/HistoryContext.tsx`)

**Responsabilités:**
- Gestion de l'état global de l'historique
- Stockage et récupération via AsyncStorage
- Opérations CRUD sur l'historique

**API exposée:**
```typescript
interface HistoryContextType {
  history: HistoryEntry[];           // Liste complète de l'historique
  isLoading: boolean;                // État de chargement initial
  saveToHistory: (result, notes?) => Promise<void>;
  deleteFromHistory: (id) => Promise<void>;
  getHistoryById: (id) => HistoryEntry | undefined;
  clearHistory: () => Promise<void>;
  updateHistoryEntry: (id, rating?, notes?) => Promise<void>;
}
```

**Caractéristiques:**
- Limite de 100 entrées max (configurable via `MAX_HISTORY_ITEMS`)
- Tri automatique par date décroissante (plus récent en premier)
- Conversion automatique des dates lors du chargement
- Gestion d'erreurs complète avec try/catch

### 2. Écran Historique (`/src/screens/HistoryScreen.tsx`)

**Fonctionnalités:**
- ✅ Liste déroulante des calculs passés (FlatList)
- ✅ Animations de fade-in séquentielles (50ms de délai entre chaque carte)
- ✅ Pull-to-refresh
- ✅ État vide accueillant
- ✅ Suppression individuelle avec confirmation
- ✅ Option "Tout supprimer" avec confirmation
- ✅ Formatage de dates relatif ("Il y a 2h", "Hier", etc.)
- ✅ Affichage des évaluations (étoiles)

**Chaque carte d'historique affiche:**
- Icône de la viande
- Nom de la viande et de la coupe
- Temps de cuisson
- Méthode de cuisson
- Température cible
- Date relative
- Note (si présente)
- Bouton de suppression

**Navigation:**
- Clic sur une carte → HistoryDetailView
- Bouton suppression → Confirmation puis suppression

### 3. Vue Détaillée (`/src/screens/HistoryDetailView.tsx`)

**Fonctionnalités:**
- ✅ Affichage complet des détails du calcul
- ✅ Résumé des temps (cuisson, repos, total)
- ✅ Températures (cible, sécurité, cuisson)
- ✅ Instructions étape par étape
- ✅ Notes et évaluation modifiables
- ✅ Actions disponibles:
  - ⏱️ Démarrer Timer (avec pré-remplissage)
  - 🔄 Refaire ce calcul (navigation vers Calculator avec données pré-remplies)
  - 🗑️ Supprimer l'entrée

**Modal de Notes:**
- TextInput multilignes
- Sauvegarde en temps réel
- Support du clavier

**Système d'Évaluation:**
- 5 étoiles cliquables
- Mise à jour immédiate
- Affichage dans la liste principale

### 4. Intégration ResultView (`/src/screens/ResultView.tsx`)

**Modifications:**
- Import du useHistory hook
- Bouton "Sauvegarder dans l'historique" fonctionnel
- Gestion d'erreurs avec alertes utilisateur
- Confirmation visuelle de sauvegarde

### 5. Navigation (`/src/navigation/AppNavigator.tsx`)

**Stack Navigator History:**
```
History (Tab)
  └── HistoryStack
      ├── HistoryMain (liste)
      ├── HistoryDetailView (détails)
      ├── Timer (accessible depuis détails)
      └── Calculator (accessible depuis détails)
```

Cette architecture permet une navigation fluide entre l'historique, les détails, et les fonctionnalités de l'app.

### 6. Utilitaires (`/src/utils/formatters.ts`)

Fonctions réutilisables:
- `formatTime(minutes)` - Convertit minutes en format lisible
- `formatRelativeDate(date, t)` - Date relative avec i18n
- `formatLongDate(date)` - Date complète
- `formatTimeOfDay(date)` - Heure HH:MM
- `formatCookingMethodName(method)` - Nom de méthode lisible
- `getEstimatedEndTime(duration)` - Calcul heure de fin

## Stockage des Données

### Clé AsyncStorage
```
@cookmaster_history
```

### Structure des données
```typescript
interface HistoryEntry {
  id: string;              // "history_<timestamp>_<random>"
  result: CookingResult;   // Résultat complet du calcul
  completedAt: Date;       // Date de création
  rating?: number;         // 1-5 étoiles
  notes?: string;          // Notes utilisateur
}
```

**Sérialisation:**
- JSON.stringify pour sauvegarder
- JSON.parse + conversion des dates string → Date objects lors du chargement

## UX & Design

### Animations
- Fade-in progressif des cartes (Animated API)
- Délai de 50ms entre chaque carte pour effet cascade
- Durée d'animation: 300ms
- useNativeDriver: true (performances optimales)

### États
1. **Loading** - Spinner au démarrage
2. **Empty** - Message accueillant + grande icône 📜
3. **Populated** - Liste déroulante + pull-to-refresh
4. **Detail** - Vue complète avec actions

### Couleurs & Style
- Cartes: `Colors.surface` avec `Shadows.medium`
- Texte principal: `Colors.gold` pour les highlights
- Bordures: `Colors.border`
- Boutons destructifs: `Colors.error`
- Cohérence avec le reste de l'app (theme.ts)

## Gestion d'Erreurs

### AsyncStorage
```typescript
try {
  await AsyncStorage.setItem(key, value);
} catch (error) {
  console.error('Erreur...', error);
  throw error; // Propagé au composant pour afficher Alert
}
```

### Alertes Utilisateur
- Succès: "Résultat enregistré dans l'historique !"
- Erreur: "Impossible d'enregistrer dans l'historique"
- Confirmations: Avant suppression (individuelle ou totale)

## Performances

### Optimisations
- Limite de 100 entrées (évite surcharge mémoire)
- FlatList avec `keyExtractor` optimisé
- `showsVerticalScrollIndicator={false}` (UI épurée)
- Animations avec `useNativeDriver` (thread natif)
- Lazy loading des détails (navigation)

### Mémoire
- Chargement unique au démarrage (Context useEffect)
- Pas de rechargement à chaque navigation
- Pull-to-refresh optionnel

## i18n

Clés de traduction nécessaires:
```
history_title
history_empty
history_empty_title
history_just_now
history_ago
history_yesterday
history_days
history_delete_confirm_title
history_delete_confirm_message
history_clear_confirm_title
history_clear_confirm_message
history_clear_all
history_detail
history_notes
history_notes_placeholder
history_notes_saved
history_rating
history_redo_calculation
history_not_found
result_saved_to_history
result_save_error
loading
success
error
cancel
delete
save
```

## Améliorations Futures

### Possibles extensions:
1. **Recherche et Filtres**
   - Recherche par viande/coupe
   - Filtre par méthode de cuisson
   - Filtre par date

2. **Export/Import**
   - Export CSV
   - Partage multiple entrées
   - Backup cloud

3. **Statistiques**
   - Viandes les plus cuisinées
   - Méthodes préférées
   - Graphiques de tendances

4. **Photos**
   - Ajouter photos du résultat
   - Galerie dans les détails

5. **Synchronisation**
   - Cloud sync (Firebase/Supabase)
   - Multi-device

## Tests Recommandés

1. ✅ Sauvegarde d'un calcul depuis ResultView
2. ✅ Affichage de la liste vide
3. ✅ Affichage de la liste avec données
4. ✅ Navigation vers les détails
5. ✅ Modification de notes
6. ✅ Modification de rating
7. ✅ Suppression d'une entrée
8. ✅ Suppression totale
9. ✅ Pull-to-refresh
10. ✅ Navigation vers Timer depuis détails
11. ✅ Navigation vers Calculator depuis détails
12. ✅ Persistance après redémarrage app

## Dépendances

- `@react-native-async-storage/async-storage`: ^2.2.0 ✅ (déjà installé)
- `@react-navigation/*` ✅ (déjà configuré)
- `react-i18next` ✅ (déjà configuré)

## Fichiers Modifiés/Créés

### Créés:
- `/src/context/HistoryContext.tsx`
- `/src/screens/HistoryDetailView.tsx`
- `/src/utils/formatters.ts`
- `/HISTORY_FEATURE.md` (ce fichier)

### Modifiés:
- `/src/screens/HistoryScreen.tsx` (implémentation complète)
- `/src/screens/ResultView.tsx` (ajout sauvegarde)
- `/src/navigation/AppNavigator.tsx` (ajout HistoryStack)
- `/App.tsx` (ajout HistoryProvider)

## Conclusion

Le système d'historique est maintenant **complet et fonctionnel**. Il offre une expérience utilisateur fluide avec:
- ✅ Stockage persistant (AsyncStorage)
- ✅ Interface élégante et animée
- ✅ Navigation intuitive
- ✅ Fonctionnalités complètes (CRUD)
- ✅ Gestion d'erreurs robuste
- ✅ Type-safe (TypeScript)
- ✅ Internationalisé (i18n ready)

L'utilisateur peut maintenant sauvegarder tous ses calculs, les consulter, ajouter des notes, évaluer ses cuissons, et réutiliser facilement ses paramètres préférés.
