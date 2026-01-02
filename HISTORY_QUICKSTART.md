# Guide Rapide - Historique CookMaster

## Pour l'Utilisateur Final

### Comment sauvegarder un calcul

1. Effectuez un calcul de cuisson depuis l'écran **Calculateur**
2. Une fois le résultat affiché, cliquez sur **"💾 Sauvegarder dans l'historique"**
3. Une confirmation apparaît : "Résultat enregistré dans l'historique !"

### Consulter l'historique

1. Naviguez vers l'onglet **🕐 Historique** (en bas)
2. Vous voyez la liste de tous vos calculs passés
3. Les calculs les plus récents apparaissent en premier

### Voir les détails d'un calcul

1. Depuis l'écran Historique, **cliquez sur n'importe quelle carte**
2. Vous verrez tous les détails :
   - Temps de cuisson, repos, total
   - Températures (cible, sécurité, cuisson)
   - Instructions complètes
   - Vos notes et évaluation

### Ajouter des notes et une évaluation

1. Depuis la vue détaillée, trouvez la section **"📝 Notes & Évaluation"**
2. **Notes** : Cliquez sur la zone de texte pour ouvrir le modal et ajouter vos commentaires
3. **Évaluation** : Cliquez sur les étoiles (1 à 5) pour noter votre cuisson

### Actions disponibles depuis les détails

- **⏱️ Démarrer Timer** : Lance un timer pré-configuré avec le temps de cuisson
- **🔄 Refaire ce calcul** : Rouvre le calculateur avec les mêmes paramètres
- **🗑️ Supprimer** : Supprime cette entrée de l'historique (avec confirmation)

### Supprimer un calcul

**Option 1 - Depuis la liste :**
- Cliquez sur l'icône 🗑️ en haut à droite de la carte
- Confirmez la suppression

**Option 2 - Depuis les détails :**
- Ouvrez les détails du calcul
- Cliquez sur l'icône 🗑️ en haut à droite
- Confirmez la suppression

### Tout supprimer

1. Depuis l'écran Historique (si vous avez au moins 1 entrée)
2. Cliquez sur **"Tout supprimer"** en haut à droite
3. Confirmez : cela effacera tout l'historique

### Rafraîchir la liste

- Tirez la liste vers le bas (**pull-to-refresh**)
- La liste se recharge automatiquement

---

## Pour le Développeur

### Utiliser le Context dans un composant

```tsx
import { useHistory } from '../context/HistoryContext';

function MyComponent() {
  const { history, saveToHistory, deleteFromHistory } = useHistory();

  // Sauvegarder
  await saveToHistory(cookingResult, "Notes optionnelles");

  // Supprimer
  await deleteFromHistory(entryId);

  // Afficher
  return (
    <FlatList data={history} ... />
  );
}
```

### Ajouter une traduction

Dans vos fichiers de langue (`/src/i18n/locales/`):

```json
{
  "history_title": "Historique",
  "history_empty": "Pas encore de calculs...",
  "history_just_now": "À l'instant",
  "history_ago": "Il y a",
  "history_yesterday": "Hier",
  "history_days": "jours"
}
```

### Utiliser les formatters

```tsx
import { formatTime, formatRelativeDate } from '../utils/formatters';

const readableTime = formatTime(120); // "2h"
const relativeDate = formatRelativeDate(new Date(), t); // "Il y a 2h"
```

### Structure des données HistoryEntry

```typescript
{
  id: "history_1638360000000_abc123",
  result: {
    meat: { ... },
    cut: { ... },
    method: { ... },
    cookingTime: 45,
    restingTime: 10,
    totalTime: 55,
    // ... autres propriétés
  },
  completedAt: new Date("2025-11-30T18:00:00"),
  rating: 5,
  notes: "Parfaitement cuit!"
}
```

### Limite de stockage

- **Max 100 entrées** dans l'historique (configurable via `MAX_HISTORY_ITEMS`)
- Les plus anciennes sont automatiquement supprimées
- AsyncStorage utilisé pour persistance locale

### Tests recommandés

```bash
# Aucune dépendance à installer, tout est déjà en place!
# Testez simplement l'app:

npm start
# ou
expo start
```

Scénarios à tester:
1. ✅ Créer un calcul → Sauvegarder → Vérifier dans Historique
2. ✅ Ajouter notes et rating
3. ✅ Supprimer une entrée
4. ✅ Tout supprimer
5. ✅ Redémarrer l'app → Vérifier persistance
6. ✅ Navigation vers Timer/Calculator depuis détails

---

## Troubleshooting

### "L'historique ne se charge pas"
- Vérifiez que `HistoryProvider` entoure bien `NavigationContainer` dans `App.tsx`
- Regardez les logs console pour les erreurs AsyncStorage

### "Les dates ne s'affichent pas correctement"
- Vérifiez que les traductions i18n sont bien configurées
- Les dates utilisent `fr-FR` par défaut

### "Navigation échoue depuis HistoryDetailView"
- Vérifiez que `HistoryStack` inclut bien les routes `Timer` et `Calculator`
- Types TypeScript pour navigation doivent être à jour

### "Les animations ne fonctionnent pas"
- Sur Web, certaines animations Animated peuvent être limitées
- Testez sur iOS/Android pour l'expérience complète

---

## Support

Pour toute question ou problème, consultez:
- 📄 Documentation complète : `/HISTORY_FEATURE.md`
- 🔧 Code source : `/src/context/HistoryContext.tsx`
- 🎨 Écrans : `/src/screens/HistoryScreen.tsx` et `HistoryDetailView.tsx`

**Bon appétit avec CookMaster!** 👨‍🍳
