import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { changeLanguage, getCurrentLanguage } from '../i18n/i18n.config';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';

export default function ProfileScreen() {
  const { t, i18n } = useTranslation();
  const currentLang = getCurrentLanguage();

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
  ];

  const handleLanguageChange = async (langCode: 'fr' | 'en' | 'es') => {
    await changeLanguage(langCode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{t('profile_title')}</Text>

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
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>{t('home_recent_cooks')}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Favoris</Text>
            </View>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings_title')}</Text>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>{t('settings_notifications')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>{t('settings_theme')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>{t('settings_about')}</Text>
          </TouchableOpacity>
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
  settingItem: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
  },
  settingText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },
});
