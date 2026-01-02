import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Animated,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';
import { useHistory } from '../context/HistoryContext';
import { HistoryEntry } from '../types/models';

type RootStackParamList = {
  HistoryDetailView: { entryId: string };
};

type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function HistoryScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const { history, isLoading, deleteFromHistory, clearHistory } = useHistory();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simuler un rafraîchissement (le Context recharge automatiquement)
    setTimeout(() => setRefreshing(false), 500);
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
        month: 'short',
      });
    }
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    }
    return `${mins} min`;
  };

  const getCookingMethodName = (method: string): string => {
    return method
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleDeleteEntry = (id: string) => {
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
              await deleteFromHistory(id);
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

  const handleClearHistory = () => {
    Alert.alert(
      t('history_clear_confirm_title') || 'Tout supprimer',
      t('history_clear_confirm_message') || 'Êtes-vous sûr de vouloir supprimer tout l\'historique ?',
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
              await clearHistory();
            } catch (error) {
              Alert.alert(
                t('error') || 'Erreur',
                t('history_clear_error') || 'Impossible de supprimer l\'historique'
              );
            }
          },
        },
      ]
    );
  };

  const renderHistoryCard = ({ item, index }: { item: HistoryEntry; index: number }) => {
    const fadeAnim = new Animated.Value(0);

    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 50,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity
          style={styles.historyCard}
          onPress={() => navigation.navigate('HistoryDetailView', { entryId: item.id })}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Text style={styles.meatIcon}>{item.result.meat.icon}</Text>
              <View style={styles.cardHeaderText}>
                <Text style={styles.meatName} numberOfLines={1}>
                  {item.result.meat.name}
                </Text>
                <Text style={styles.cutName} numberOfLines={1}>
                  {item.result.cut.name}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={(e) => {
                e.stopPropagation();
                handleDeleteEntry(item.id);
              }}
            >
              <Text style={styles.deleteIcon}>🗑️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardDivider} />

          <View style={styles.cardContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>⏱️</Text>
              <Text style={styles.infoLabel}>{t('result_cooking_time') || 'Cuisson'}:</Text>
              <Text style={styles.infoValue}>{formatTime(item.result.cookingTime)}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🔥</Text>
              <Text style={styles.infoLabel}>{t('result_cooking_method') || 'Méthode'}:</Text>
              <Text style={styles.infoValue} numberOfLines={1}>
                {getCookingMethodName(item.result.method.method)}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🌡️</Text>
              <Text style={styles.infoLabel}>{t('result_target_core') || 'Temp.'}:</Text>
              <Text style={styles.infoValue}>{item.result.targetTemperature}°C</Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.dateText}>{formatDate(item.completedAt)}</Text>
            {item.rating && (
              <View style={styles.ratingContainer}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Text key={i} style={styles.ratingStar}>⭐</Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📜</Text>
      <Text style={styles.emptyTitle}>{t('history_empty_title') || 'Aucun historique'}</Text>
      <Text style={styles.emptyText}>
        {t('history_empty') || 'Pas encore de calculs. Commencez à cuisiner pour voir votre historique ici !'}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('history_title') || 'Historique'}</Text>
        {history.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearHistory}
          >
            <Text style={styles.clearButtonText}>{t('history_clear_all') || 'Tout supprimer'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{t('loading') || 'Chargement...'}</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          renderItem={renderHistoryCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={renderEmptyState}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={Colors.gold}
              colors={[Colors.gold]}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  title: {
    ...Typography.title,
    color: Colors.gold,
  },
  clearButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  clearButtonText: {
    ...Typography.small,
    color: Colors.error,
  },

  // Loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
  },

  // List
  listContent: {
    padding: Spacing.lg,
    paddingTop: Spacing.sm,
  },

  // History Card
  historyCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.medium,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  meatIcon: {
    fontSize: 40,
    marginRight: Spacing.md,
  },
  cardHeaderText: {
    flex: 1,
  },
  meatName: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 18,
    marginBottom: Spacing.xs / 2,
  },
  cutName: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    fontSize: 14,
  },
  deleteButton: {
    padding: Spacing.xs,
    marginTop: -Spacing.xs,
    marginRight: -Spacing.xs,
  },
  deleteIcon: {
    fontSize: 20,
    opacity: 0.6,
  },

  cardDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: Spacing.md,
  },

  // Card Content
  cardContent: {
    gap: Spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 16,
    marginRight: Spacing.sm,
    width: 20,
  },
  infoLabel: {
    ...Typography.small,
    color: Colors.textSecondary,
    marginRight: Spacing.xs,
  },
  infoValue: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
    flex: 1,
  },

  // Card Footer
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  dateText: {
    ...Typography.small,
    color: Colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingStar: {
    fontSize: 14,
  },

  // Empty State
  emptyState: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.large,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xxl,
    marginTop: Spacing.xl,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: Spacing.lg,
  },
  emptyTitle: {
    ...Typography.title2,
    color: Colors.gold,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  emptyText: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
