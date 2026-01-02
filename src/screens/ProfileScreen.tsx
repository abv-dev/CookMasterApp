import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { changeLanguage, getCurrentLanguage } from '../i18n/i18n.config';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '../context/HistoryContext';

type AuthMode = 'login' | 'register' | null;

export default function ProfileScreen() {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading, login, register, logout, updatePreferences } = useAuth();
  const { history, syncWithServer } = useHistory();
  const currentLang = getCurrentLanguage();

  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
  ];

  const handleLanguageChange = async (langCode: 'fr' | 'en' | 'es') => {
    await changeLanguage(langCode);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email, password);
      setAuthMode(null);
      setEmail('');
      setPassword('');
      await syncWithServer();
      Alert.alert('Succès', 'Connexion réussie !');
    } catch (error: any) {
      Alert.alert('Erreur', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password || !name) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erreur', 'Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsSubmitting(true);
    try {
      await register(email, password, name);
      setAuthMode(null);
      setEmail('');
      setPassword('');
      setName('');
      Alert.alert('Succès', 'Compte créé avec succès !');
    } catch (error: any) {
      Alert.alert('Erreur', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Déconnexion',
          style: 'destructive',
          onPress: async () => {
            await logout();
          },
        },
      ]
    );
  };

  const handlePreferenceChange = async (key: string, value: any) => {
    try {
      await updatePreferences({ [key]: value });
    } catch (error: any) {
      Alert.alert('Erreur', error.message);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.gold} />
        </View>
      </SafeAreaView>
    );
  }

  // Auth Form
  if (authMode) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity onPress={() => setAuthMode(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            {authMode === 'login' ? 'Connexion' : 'Inscription'}
          </Text>

          {authMode === 'register' && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Votre nom"
                placeholderTextColor={Colors.textSecondary}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="votre@email.com"
              placeholderTextColor={Colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={Colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
            onPress={authMode === 'login' ? handleLogin : handleRegister}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.submitButtonText}>
                {authMode === 'login' ? 'Se connecter' : 'Créer mon compte'}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchModeButton}
            onPress={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
          >
            <Text style={styles.switchModeText}>
              {authMode === 'login'
                ? 'Pas de compte ? Inscrivez-vous'
                : 'Déjà un compte ? Connectez-vous'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{t('profile_title')}</Text>

        {/* User Section */}
        {isAuthenticated && user ? (
          <View style={styles.section}>
            <View style={styles.userCard}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>
                  {user.name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.section}>
            <View style={styles.authPrompt}>
              <Text style={styles.authPromptIcon}>👤</Text>
              <Text style={styles.authPromptTitle}>Connectez-vous</Text>
              <Text style={styles.authPromptText}>
                Synchronisez votre historique et vos préférences sur tous vos appareils
              </Text>
              <View style={styles.authButtons}>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={() => setAuthMode('login')}
                >
                  <Text style={styles.authButtonText}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.authButton, styles.authButtonSecondary]}
                  onPress={() => setAuthMode('register')}
                >
                  <Text style={styles.authButtonTextSecondary}>Inscription</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Preferences (only for authenticated users) */}
        {isAuthenticated && user && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Préférences</Text>

            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceLabel}>Unité de température</Text>
              <View style={styles.preferenceOptions}>
                <TouchableOpacity
                  style={[
                    styles.preferenceOption,
                    user.preferences.temperatureUnit === 'celsius' && styles.preferenceOptionActive,
                  ]}
                  onPress={() => handlePreferenceChange('temperatureUnit', 'celsius')}
                >
                  <Text style={[
                    styles.preferenceOptionText,
                    user.preferences.temperatureUnit === 'celsius' && styles.preferenceOptionTextActive,
                  ]}>°C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.preferenceOption,
                    user.preferences.temperatureUnit === 'fahrenheit' && styles.preferenceOptionActive,
                  ]}
                  onPress={() => handlePreferenceChange('temperatureUnit', 'fahrenheit')}
                >
                  <Text style={[
                    styles.preferenceOptionText,
                    user.preferences.temperatureUnit === 'fahrenheit' && styles.preferenceOptionTextActive,
                  ]}>°F</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceLabel}>Unité de poids</Text>
              <View style={styles.preferenceOptions}>
                <TouchableOpacity
                  style={[
                    styles.preferenceOption,
                    user.preferences.weightUnit === 'kg' && styles.preferenceOptionActive,
                  ]}
                  onPress={() => handlePreferenceChange('weightUnit', 'kg')}
                >
                  <Text style={[
                    styles.preferenceOptionText,
                    user.preferences.weightUnit === 'kg' && styles.preferenceOptionTextActive,
                  ]}>kg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.preferenceOption,
                    user.preferences.weightUnit === 'lbs' && styles.preferenceOptionActive,
                  ]}
                  onPress={() => handlePreferenceChange('weightUnit', 'lbs')}
                >
                  <Text style={[
                    styles.preferenceOptionText,
                    user.preferences.weightUnit === 'lbs' && styles.preferenceOptionTextActive,
                  ]}>lbs</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.preferenceItemSwitch}>
              <Text style={styles.preferenceLabel}>Notifications</Text>
              <Switch
                value={user.preferences.enableNotifications}
                onValueChange={(value) => handlePreferenceChange('enableNotifications', value)}
                trackColor={{ false: Colors.surface, true: Colors.gold }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        )}

        {/* Language Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings_language')}</Text>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.languageOption,
                currentLang === lang.code && styles.languageOptionActive,
              ]}
              onPress={() => handleLanguageChange(lang.code as 'fr' | 'en' | 'es')}
            >
              <Text style={styles.languageFlag}>{lang.flag}</Text>
              <Text
                style={[
                  styles.languageName,
                  currentLang === lang.code && styles.languageNameActive,
                ]}
              >
                {lang.name}
              </Text>
              {currentLang === lang.code && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profile_stats')}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{history.length}</Text>
              <Text style={styles.statLabel}>{t('home_recent_cooks')}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{user?.favoriteRecipes?.length || 0}</Text>
              <Text style={styles.statLabel}>Favoris</Text>
            </View>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings_about')}</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>CookMaster</Text>
            <Text style={styles.aboutVersion}>Version 1.0.0</Text>
            <Text style={styles.aboutDescription}>
              Application de calcul de temps de cuisson pour viandes
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Typography.title,
    color: Colors.gold,
    marginBottom: Spacing.xl,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.title2,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },

  // User Card
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.md,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    ...Typography.title,
    color: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...Typography.title2,
    color: Colors.textPrimary,
  },
  userEmail: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
  },
  logoutButton: {
    backgroundColor: Colors.error,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  logoutButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
  },

  // Auth Prompt
  authPrompt: {
    backgroundColor: Colors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  authPromptIcon: {
    fontSize: 48,
    marginBottom: Spacing.md,
  },
  authPromptTitle: {
    ...Typography.title2,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  authPromptText: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  authButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  authButton: {
    backgroundColor: Colors.gold,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.medium,
  },
  authButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  authButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
  },
  authButtonTextSecondary: {
    ...Typography.bodyBold,
    color: Colors.gold,
  },

  // Auth Form
  backButton: {
    marginBottom: Spacing.lg,
  },
  backButtonText: {
    ...Typography.bodyRegular,
    color: Colors.gold,
  },
  inputContainer: {
    marginBottom: Spacing.md,
  },
  inputLabel: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },
  submitButton: {
    backgroundColor: Colors.gold,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
  },
  switchModeButton: {
    marginTop: Spacing.lg,
    alignItems: 'center',
  },
  switchModeText: {
    ...Typography.bodyRegular,
    color: Colors.gold,
  },

  // Preferences
  preferenceItem: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
  },
  preferenceItemSwitch: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preferenceLabel: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  preferenceOptions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  preferenceOption: {
    backgroundColor: Colors.background,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.small,
  },
  preferenceOptionActive: {
    backgroundColor: Colors.gold,
  },
  preferenceOptionText: {
    ...Typography.bodyBold,
    color: Colors.textSecondary,
  },
  preferenceOptionTextActive: {
    color: '#FFFFFF',
  },

  // Language
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
  },
  languageOptionActive: {
    backgroundColor: Colors.gold,
  },
  languageFlag: {
    fontSize: 24,
    marginRight: Spacing.md,
  },
  languageName: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    flex: 1,
  },
  languageNameActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  checkmark: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    fontSize: 20,
  },

  // Stats
  statsContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  statValue: {
    ...Typography.title,
    color: Colors.gold,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },

  // About
  aboutCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  aboutTitle: {
    ...Typography.title2,
    color: Colors.gold,
  },
  aboutVersion: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  aboutDescription: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
});
