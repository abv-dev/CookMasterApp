import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';
import { CookingResult } from '../types/models';
import { useHistory } from '../context/HistoryContext';

type RootStackParamList = {
  ResultView: { result: CookingResult };
  Timer: { duration: number; title?: string };
  Home: undefined;
};

type ResultViewRouteProp = RouteProp<RootStackParamList, 'ResultView'>;
type ResultViewNavigationProp = StackNavigationProp<RootStackParamList>;

export default function ResultView() {
  const { t } = useTranslation();
  const route = useRoute<ResultViewRouteProp>();
  const navigation = useNavigation<ResultViewNavigationProp>();
  const { saveToHistory } = useHistory();
  const result = route.params.result as CookingResult;

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);

    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    }
    return `${mins} min`;
  };

  const getEstimatedEndTime = (): string => {
    const now = new Date();
    const endTime = new Date(now.getTime() + result.totalTime * 60000);
    const hours = endTime.getHours().toString().padStart(2, '0');
    const minutes = endTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleStartTimer = () => {
    navigation.navigate('Timer', {
      duration: result.cookingTime * 60, // Convert to seconds
      title: `${result.meat.name} - ${result.cut.name}`,
    });
  };

  const handleSaveToHistory = async () => {
    try {
      await saveToHistory(result);
      Alert.alert(
        t('success') || 'Succès',
        t('result_saved_to_history') || 'Résultat enregistré dans l\'historique !',
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert(
        t('error') || 'Erreur',
        t('result_save_error') || 'Impossible d\'enregistrer dans l\'historique',
        [{ text: 'OK' }]
      );
    }
  };

  const handleShare = async () => {
    try {
      const message = `
CookMaster - ${result.meat.name} (${result.cut.name})

Cooking Time: ${formatTime(result.cookingTime)}
Resting Time: ${formatTime(result.restingTime)}
Total Time: ${formatTime(result.totalTime)}
Target Temperature: ${result.targetTemperature}°C
Cooking Temperature: ${result.method.cookingTemperature}°C

Instructions:
${result.instructions.map((step, index) => `${index + 1}. ${step}`).join('\n')}
      `.trim();

      await Share.share({
        message,
        title: `CookMaster - ${result.meat.name}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const getCookingMethodName = (method: string): string => {
    // Convert enum to readable name
    return method
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const safetyTemperature = result.cut.temperatures.find(
    temp => temp.coreTemperature === result.targetTemperature
  )?.safetyTemperature;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.meatName}>{result.meat.icon} {result.meat.name}</Text>
            <Text style={styles.cutName}>{result.cut.name}</Text>
          </View>
          <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
            <Text style={styles.shareIcon}>📤</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Card - Times */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>⏱️</Text>
            <Text style={styles.cardTitle}>{t('result_summary') || 'Summary'}</Text>
          </View>

          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_cooking_time') || 'Cooking Time'}</Text>
              <Text style={styles.summaryValueLarge}>{formatTime(result.cookingTime)}</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_resting_time') || 'Resting Time'}</Text>
              <Text style={styles.summaryValue}>{formatTime(result.restingTime)}</Text>
            </View>

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_total_time') || 'Total Time'}</Text>
              <Text style={styles.summaryValue}>{formatTime(result.totalTime)}</Text>
            </View>
          </View>

          <View style={styles.endTimeContainer}>
            <Text style={styles.endTimeLabel}>🕐 {t('result_estimated_end') || 'Estimated End Time'}</Text>
            <Text style={styles.endTimeValue}>{getEstimatedEndTime()}</Text>
          </View>
        </View>

        {/* Temperatures Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🌡️</Text>
            <Text style={styles.cardTitle}>{t('result_temperatures') || 'Temperatures'}</Text>
          </View>

          <View style={styles.temperatureRow}>
            <View style={styles.temperatureItem}>
              <Text style={styles.temperatureLabel}>{t('result_target_core') || 'Target Core Temp'}</Text>
              <Text style={styles.temperatureValue}>{result.targetTemperature}°C</Text>
            </View>

            {safetyTemperature && safetyTemperature !== result.targetTemperature && (
              <View style={styles.temperatureItem}>
                <Text style={styles.temperatureLabel}>{t('result_safety_temp') || 'Safety Temp'}</Text>
                <Text style={styles.temperatureValueSafety}>{safetyTemperature}°C</Text>
              </View>
            )}

            <View style={styles.temperatureItem}>
              <Text style={styles.temperatureLabel}>{t('result_cooking_temp') || 'Cooking Temp'}</Text>
              <Text style={styles.temperatureValue}>{result.method.cookingTemperature}°C</Text>
            </View>
          </View>

          <View style={styles.methodContainer}>
            <Text style={styles.methodLabel}>{t('result_cooking_method') || 'Method'}:</Text>
            <Text style={styles.methodValue}>{getCookingMethodName(result.method.method)}</Text>
          </View>

          <View style={styles.initialTempContainer}>
            <Text style={styles.initialTempText}>
              💡 {t('result_initial_temp') || 'Initial temperature'}: {result.initialTemperature}°C
            </Text>
          </View>
        </View>

        {/* Warnings Card - if any */}
        {result.warnings && result.warnings.length > 0 && (
          <View style={[styles.card, styles.warningCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardIcon}>⚠️</Text>
              <Text style={[styles.cardTitle, styles.warningTitle]}>
                {t('result_warnings') || 'Important Warnings'}
              </Text>
            </View>
            {result.warnings.map((warning, index) => (
              <View key={index} style={styles.warningItem}>
                <Text style={styles.warningBullet}>•</Text>
                <Text style={styles.warningText}>{warning}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Instructions Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📋</Text>
            <Text style={styles.cardTitle}>{t('result_instructions') || 'Instructions'}</Text>
          </View>

          {result.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>

        {/* Tips Card */}
        {result.tips && result.tips.length > 0 && (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardIcon}>💡</Text>
              <Text style={styles.cardTitle}>{t('result_tips') || 'Tips & Tricks'}</Text>
            </View>

            {result.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <Text style={styles.tipBullet}>✓</Text>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleStartTimer}
          >
            <Text style={styles.actionButtonIcon}>⏱️</Text>
            <Text style={styles.actionButtonText}>{t('result_start_timer') || 'Start Timer'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={handleSaveToHistory}
          >
            <Text style={styles.actionButtonIcon}>💾</Text>
            <Text style={styles.actionButtonTextSecondary}>
              {t('result_save_to_history') || 'Save to History'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.tertiaryButton]}
            onPress={handleClose}
          >
            <Text style={styles.actionButtonTextTertiary}>{t('result_close') || 'Close'}</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  headerContent: {
    flex: 1,
  },
  meatName: {
    ...Typography.title2,
    color: Colors.gold,
    marginBottom: Spacing.xs,
  },
  cutName: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    fontSize: 18,
  },
  shareButton: {
    padding: Spacing.sm,
    marginTop: -Spacing.sm,
  },
  shareIcon: {
    fontSize: 24,
  },

  // Card
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.medium,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: Spacing.sm,
  },
  cardTitle: {
    ...Typography.title2,
    color: Colors.textPrimary,
    fontSize: 20,
  },

  // Summary
  summaryGrid: {
    gap: Spacing.md,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  summaryValueLarge: {
    ...Typography.title,
    color: Colors.gold,
    fontSize: 48,
    fontWeight: '700',
  },
  summaryValue: {
    ...Typography.title2,
    color: Colors.gold,
    fontSize: 28,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
  endTimeContainer: {
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  endTimeLabel: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
  },
  endTimeValue: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 24,
  },

  // Temperatures
  temperatureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  temperatureItem: {
    flex: 1,
    minWidth: 100,
    backgroundColor: Colors.background,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  temperatureLabel: {
    ...Typography.small,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  temperatureValue: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 20,
  },
  temperatureValueSafety: {
    ...Typography.bodyBold,
    color: Colors.warning,
    fontSize: 20,
  },
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
  },
  methodLabel: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    marginRight: Spacing.xs,
  },
  methodValue: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
  },
  initialTempContainer: {
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  initialTempText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // Warnings
  warningCard: {
    backgroundColor: '#3A2020',
    borderWidth: 2,
    borderColor: Colors.error,
  },
  warningTitle: {
    color: Colors.error,
  },
  warningItem: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
  },
  warningBullet: {
    ...Typography.bodyBold,
    color: Colors.error,
    marginRight: Spacing.sm,
    fontSize: 20,
  },
  warningText: {
    ...Typography.bodyRegular,
    color: Colors.error,
    flex: 1,
  },

  // Instructions
  instructionItem: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    alignItems: 'flex-start',
  },
  instructionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
    marginTop: 2,
  },
  instructionNumberText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    fontSize: 16,
  },
  instructionText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    flex: 1,
    lineHeight: 24,
  },

  // Tips
  tipItem: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    alignItems: 'flex-start',
  },
  tipBullet: {
    ...Typography.bodyBold,
    color: Colors.success,
    marginRight: Spacing.sm,
    fontSize: 18,
  },
  tipText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    flex: 1,
    lineHeight: 22,
  },

  // Actions
  actionsContainer: {
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.medium,
    ...Shadows.small,
  },
  primaryButton: {
    backgroundColor: Colors.gold,
  },
  secondaryButton: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionButtonIcon: {
    fontSize: 20,
    marginRight: Spacing.sm,
  },
  actionButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    fontSize: 18,
  },
  actionButtonTextSecondary: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 18,
  },
  actionButtonTextTertiary: {
    ...Typography.bodyBold,
    color: Colors.textSecondary,
    fontSize: 18,
  },

  // Bottom Padding
  bottomPadding: {
    height: Spacing.xl,
  },
});
