/**
 * Utilitaires de formatage pour CookMaster
 */

/**
 * Formate un temps en minutes en format lisible (heures et/ou minutes)
 * @param minutes - Temps en minutes
 * @returns Chaîne formatée (ex: "2h 30min", "45 min")
 */
export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  if (hours > 0) {
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
  }
  return `${mins} min`;
};

/**
 * Formate une date en format relatif (ex: "Il y a 2h", "Hier", etc.)
 * @param date - Date à formater
 * @param t - Fonction de traduction i18next
 * @returns Chaîne formatée de manière relative
 */
export const formatRelativeDate = (
  date: Date,
  t?: (key: string) => string
): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffHours < 1) {
    return t?.('history_just_now') || 'À l\'instant';
  } else if (diffHours < 24) {
    return `${t?.('history_ago') || 'Il y a'} ${diffHours}h`;
  } else if (diffDays === 1) {
    return t?.('history_yesterday') || 'Hier';
  } else if (diffDays < 7) {
    return `${t?.('history_ago') || 'Il y a'} ${diffDays} ${t?.('history_days') || 'jours'}`;
  } else {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
    });
  }
};

/**
 * Formate une date en format long
 * @param date - Date à formater
 * @returns Chaîne formatée (ex: "15 janvier 2025")
 */
export const formatLongDate = (date: Date): string => {
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

/**
 * Formate une heure au format HH:MM
 * @param date - Date contenant l'heure
 * @returns Chaîne formatée (ex: "14:30")
 */
export const formatTimeOfDay = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

/**
 * Convertit un nom de méthode de cuisson enum en format lisible
 * @param method - Méthode de cuisson (ex: "FOUR_TRADITIONNEL")
 * @returns Chaîne formatée (ex: "Four Traditionnel")
 */
export const formatCookingMethodName = (method: string): string => {
  return method
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Calcule l'heure de fin estimée
 * @param durationMinutes - Durée en minutes
 * @returns Date de fin estimée
 */
export const getEstimatedEndTime = (durationMinutes: number): Date => {
  const now = new Date();
  return new Date(now.getTime() + durationMinutes * 60000);
};
