import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';
import { useHistory } from '../context/HistoryContext';
import { HistoryEntry } from '../types/models';

type RootStackParamList = {
  HistoryDetailView: { entryId: string };
  Timer: { duration: number; title?: string };
  Calculator: { prefillData?: any };
  History: undefined;
};

type HistoryDetailViewRouteProp = RouteProp<RootStackParamList, 'HistoryDetailView'>;
type HistoryDetailViewNavigationProp = StackNavigationProp<RootStackParamList>;

export default function HistoryDetailView() {
  const { t } = useTranslation();
  const route = useRoute<HistoryDetailViewRouteProp>();
  const navigation = useNavigation<HistoryDetailViewNavigationProp>();
  const { getHistoryById, deleteFromHistory, updateHistoryEntry } = useHistory();

  const [showNotesModal, setShowNotesModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);

  const entry = getHistoryById(route.params.entryId);

  React.useEffect(() => {
    if (entry) {
      setNotes(entry.notes || '');
      setRating(entry.rating || 0);
    }
  }, [entry]);

  if (!entry) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorText}>{t('history_not_found') || 'Entrée non trouvée'}</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>{t('go_back') || 'Retour'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const result = entry.result;

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    }
    return `${mins} min`;
  };

  const formatDate = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffHours < 1) {
      return t('history_just_now') || 'À l\'instant';
    } else if (diffHours < 24) {
      return `${t('history_ago') || 'Il y a'} ${diffHours}h`;
    } else if (diffDays === 1) {
      return t('history_yesterday') || 'Hier';
    } else if (diffDays < 7) {
      return `${t('history_ago') || 'Il y a'} ${diffDays} ${t('history_days') || 'jours'}`;
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  };

  const handleStartTimer = () => {
    navigation.navigate('Timer', {
      duration: result.cookingTime * 60,
      title: `${result.meat.name} - ${result.cut.name}`,
    });
  };

  const handleRedoCalculation = () => {
    navigation.navigate('Calculator', {
      prefillData: {
        meat: result.meat,
        cut: result.cut,
        method: result.method,
        weight: result.weight,
        thickness: result.thickness,
        targetTemperature: result.targetTemperature,
        initialTemperature: result.initialTemperature,
      },
    });
  };

  const handleDelete = () => {
    Alert.alert(
      t('history_delete_confirm_title') || 'Supprimer',
      t('history_delete_confirm_message') || 'Êtes-vous sûr de vouloir supprimer cette entrée ?',
      [
        {
          text: t('cancel') || 'Annuler',
          style: 'cancel',
        },
        {
          text: t('delete') || 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteFromHistory(entry.id);
              navigation.goBack();
            } catch (error) {
              Alert.alert(
                t('error') || 'Erreur',
                t('history_delete_error') || 'Impossible de supprimer l\'entrée'
              );
            }
          },
        },
      ]
    );
  };

  const handleSaveNotes = async () => {
    try {
      await updateHistoryEntry(entry.id, rating, notes);
      setShowNotesModal(false);
      Alert.alert(
        t('success') || 'Succès',
        t('history_notes_saved') || 'Notes enregistrées avec succès'
      );
    } catch (error) {
      Alert.alert(
        t('error') || 'Erreur',
        t('history_notes_save_error') || 'Impossible d\'enregistrer les notes'
      );
    }
  };

  const getCookingMethodName = (method: string): string => {
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
        {/* Header avec date */}
        <View style={styles.header}>
          <View>
            <Text style={styles.meatName}>{result.meat.icon} {result.meat.name}</Text>
            <Text style={styles.cutName}>{result.cut.name}</Text>
            <Text style={styles.dateText}>{formatDate(entry.completedAt)}</Text>
          </View>
          <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>⏱️</Text>
            <Text style={styles.cardTitle}>{t('result_summary') || 'Résumé'}</Text>
          </View>

          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_cooking_time') || 'Temps de cuisson'}</Text>
              <Text style={styles.summaryValueLarge}>{formatTime(result.cookingTime)}</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_resting_time') || 'Repos'}</Text>
              <Text style={styles.summaryValue}>{formatTime(result.restingTime)}</Text>
            </View>

            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('result_total_time') || 'Total'}</Text>
              <Text style={styles.summaryValue}>{formatTime(result.totalTime)}</Text>
            </View>
          </View>
        </View>

        {/* Temperatures Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🌡️</Text>
            <Text style={styles.cardTitle}>{t('result_temperatures') || 'Températures'}</Text>
          </View>

          <View style={styles.temperatureRow}>
            <View style={styles.temperatureItem}>
              <Text style={styles.temperatureLabel}>{t('result_target_core') || 'Temp. cible'}</Text>
              <Text style={styles.temperatureValue}>{result.targetTemperature}°C</Text>
            </View>

            {safetyTemperature && safetyTemperature !== result.targetTemperature && (
              <View style={styles.temperatureItem}>
                <Text style={styles.temperatureLabel}>{t('result_safety_temp') || 'Sécurité'}</Text>
                <Text style={styles.temperatureValueSafety}>{safetyTemperature}°C</Text>
              </View>
            )}

            <View style={styles.temperatureItem}>
              <Text style={styles.temperatureLabel}>{t('result_cooking_temp') || 'Cuisson'}</Text>
              <Text style={styles.temperatureValue}>{result.method.cookingTemperature}°C</Text>
            </View>
          </View>

          <View style={styles.methodContainer}>
            <Text style={styles.methodLabel}>{t('result_cooking_method') || 'Méthode'}:</Text>
            <Text style={styles.methodValue}>{getCookingMethodName(result.method.method)}</Text>
          </View>
        </View>

        {/* Notes et Rating */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📝</Text>
            <Text style={styles.cardTitle}>{t('history_notes_rating') || 'Notes & Évaluation'}</Text>
          </View>

          <TouchableOpacity
            style={styles.notesButton}
            onPress={() => setShowNotesModal(true)}
          >
            <Text style={styles.notesButtonText}>
              {notes ? notes : t('history_add_notes') || 'Ajouter des notes...'}
            </Text>
          </TouchableOpacity>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingLabel}>{t('history_rating') || 'Évaluation'}:</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => {
                    setRating(star);
                    updateHistoryEntry(entry.id, star, notes);
                  }}
                >
                  <Text style={styles.star}>
                    {star <= rating ? '⭐' : '☆'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

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

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleStartTimer}
          >
            <Text style={styles.actionButtonIcon}>⏱️</Text>
            <Text style={styles.actionButtonText}>{t('result_start_timer') || 'Démarrer Timer'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={handleRedoCalculation}
          >
            <Text style={styles.actionButtonIcon}>🔄</Text>
            <Text style={styles.actionButtonTextSecondary}>
              {t('history_redo_calculation') || 'Refaire ce calcul'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Modal pour les notes */}
      <Modal
        visible={showNotesModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowNotesModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('history_notes') || 'Notes'}</Text>
            <TextInput
              style={styles.notesInput}
              multiline
              numberOfLines={6}
              value={notes}
              onChangeText={setNotes}
              placeholder={t('history_notes_placeholder') || 'Ajoutez vos notes ici...'}
              placeholderTextColor={Colors.textSecondary}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancel]}
                onPress={() => setShowNotesModal(false)}
              >
                <Text style={styles.modalButtonTextCancel}>{t('cancel') || 'Annuler'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSave]}
                onPress={handleSaveNotes}
              >
                <Text style={styles.modalButtonText}>{t('save') || 'Enregistrer'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

  // Error State
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: Spacing.md,
  },
  errorText: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: Colors.gold,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.medium,
  },
  backButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
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
    marginBottom: Spacing.xs,
  },
  dateText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  deleteButton: {
    padding: Spacing.sm,
    marginTop: -Spacing.sm,
  },
  deleteIcon: {
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

  // Notes
  notesButton: {
    backgroundColor: Colors.background,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.md,
    minHeight: 60,
    justifyContent: 'center',
  },
  notesButtonText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingLabel: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  star: {
    fontSize: 28,
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

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.large,
    padding: Spacing.xl,
    width: '100%',
    maxWidth: 500,
  },
  modalTitle: {
    ...Typography.title2,
    color: Colors.gold,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  notesInput: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    minHeight: 120,
    marginBottom: Spacing.lg,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  modalButton: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  modalButtonSave: {
    backgroundColor: Colors.gold,
  },
  modalButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
  },
  modalButtonTextCancel: {
    ...Typography.bodyBold,
    color: Colors.textSecondary,
  },

  // Bottom Padding
  bottomPadding: {
    height: Spacing.xl,
  },
});
