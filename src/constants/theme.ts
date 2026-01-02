// CookMaster Theme - Matching iOS design
export const Colors = {
  // Background
  background: '#1A1A1A',
  surface: '#2D2D2D',

  // Primary
  gold: '#D4AF37',
  accent: '#E67E22',

  // Text
  textPrimary: '#F5F5F5',
  textSecondary: '#B0B0B0',

  // Status
  error: '#E74C3C',
  success: '#2ECC71',
  warning: '#F39C12',

  // Utility
  border: '#3A3A3A',
  overlay: 'rgba(0, 0, 0, 0.7)',
};

export const Typography = {
  title: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700' as const,
  },
  title2: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '600' as const,
  },
  bodyBold: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  bodyRegular: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400' as const,
  },
  caption: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '400' as const,
  },
  small: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400' as const,
  },
};

export const Spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
};

export const Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
};
