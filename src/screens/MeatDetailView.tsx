import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Meat, MeatCut, CookingMethodType } from '../types/models';
import { ExplorerStackParamList } from '../types/navigation';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

type MeatDetailRouteProp = RouteProp<ExplorerStackParamList, 'MeatDetail'>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NavigationType = any;

type TabType = 'overview' | 'cuts' | 'methods';

export default function MeatDetailView() {
  const route = useRoute<MeatDetailRouteProp>();
  const navigation = useNavigation<NavigationType>();
  const meat = route.params.meat;

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [expandedCutId, setExpandedCutId] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!meat) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Viande introuvable</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Get unique cooking methods across all cuts
  const getUniqueCookingMethods = () => {
    const methodsSet = new Set<CookingMethodType>();
    meat.cuts.forEach(cut => {
      cut.cookingMethods.forEach(method => {
        methodsSet.add(method.method);
      });
    });
    return Array.from(methodsSet);
  };

  // Group cooking methods by type
  const groupMethodsByType = () => {
    const methods = getUniqueCookingMethods();
    const groups: { [key: string]: CookingMethodType[] } = {
      'Four': [],
      'Poêle/Plancha': [],
      'Grillades': [],
      'Mijotées': [],
      'Basse température': [],
      'Rôtissage': [],
      'Vapeur': [],
      'Rapides': [],
      'Fumage': [],
      'Spéciales': [],
      'Traditionnelles': [],
      'Professionnelles': [],
    };

    methods.forEach(method => {
      const methodStr = method.toString();
      if (methodStr.startsWith('FOUR_')) groups['Four'].push(method);
      else if (['POELE', 'PLANCHA', 'WOK', 'SAUTEUSE'].includes(methodStr))
        groups['Poêle/Plancha'].push(method);
      else if (methodStr.startsWith('BARBECUE_') || ['GRILL', 'SALAMANDRE'].includes(methodStr))
        groups['Grillades'].push(method);
      else if (['COCOTTE', 'MIJOTEUSE', 'BRAISAGE', 'RAGOUT'].includes(methodStr))
        groups['Mijotées'].push(method);
      else if (['SOUS_VIDE', 'BASSE_TEMPERATURE'].includes(methodStr))
        groups['Basse température'].push(method);
      else if (methodStr.startsWith('ROTISSOIRE'))
        groups['Rôtissage'].push(method);
      else if (['VAPEUR', 'COURT_BOUILLON', 'POCHAGE'].includes(methodStr))
        groups['Vapeur'].push(method);
      else if (['SAISIE', 'FLAMBE'].includes(methodStr))
        groups['Rapides'].push(method);
      else if (methodStr.startsWith('FUMOIR_'))
        groups['Fumage'].push(method);
      else if (['AIR_FRYER', 'MICRO_ONDES', 'PIERRE_CHAUDE'].includes(methodStr))
        groups['Spéciales'].push(method);
      else if (['TAJINE', 'PAPILLOTE', 'CROUTE_SEL', 'CROUTE_ARGILE'].includes(methodStr))
        groups['Traditionnelles'].push(method);
      else if (methodStr.startsWith('PLANCHA_PROFESSIONNELLE') || methodStr.startsWith('GRILL_'))
        groups['Professionnelles'].push(method);
    });

    // Filter out empty groups
    return Object.entries(groups).filter(([_, methods]) => methods.length > 0);
  };

  // Format cooking method name for display
  const formatMethodName = (method: CookingMethodType): string => {
    return method
      .toString()
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Get category badge color
  const getCategoryColor = () => {
    const category = meat.category.toString();
    if (['BOEUF', 'VEAU'].includes(category)) return '#C62828';
    if (['PORC', 'SANGLIER'].includes(category)) return '#E67E22';
    if (['AGNEAU', 'CHEVREUIL', 'CERF'].includes(category)) return '#8E44AD';
    if (['VOLAILLE', 'FAISAN'].includes(category)) return '#F39C12';
    if (['SAUCISSES'].includes(category)) return '#D35400';
    if (['LIEVRE'].includes(category)) return '#795548';
    return Colors.gold;
  };

  const toggleCutExpansion = (cutId: string) => {
    setExpandedCutId(expandedCutId === cutId ? null : cutId);
  };

  const handleCalculate = () => {
    // Navigate to the Calculator tab, then to CalculatorMain with meat preselected
    navigation.navigate('Calculator', {
      screen: 'CalculatorMain',
      params: { preselectedMeat: meat }
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Save to user profile favorites
  };

  // Render Hero Section
  const renderHero = () => (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <Text style={styles.heroIcon}>{meat.icon || '🥩'}</Text>
        <Text style={styles.heroTitle}>{meat.name}</Text>
        <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor() }]}>
          <Text style={styles.categoryBadgeText}>
            {meat.category.toString().charAt(0) + meat.category.toString().slice(1).toLowerCase()}
          </Text>
        </View>
        {meat.description && (
          <Text style={styles.heroDescription}>{meat.description}</Text>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.heroActions}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={handleCalculate}
        >
          <Text style={styles.calculateButtonIcon}>🔥</Text>
          <Text style={styles.calculateButtonText}>Calculer la cuisson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Render Tabs
  const renderTabs = () => (
    <View style={styles.tabs}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'overview' && styles.tabActive]}
        onPress={() => setActiveTab('overview')}
      >
        <Text style={[styles.tabText, activeTab === 'overview' && styles.tabTextActive]}>
          Aperçu
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'cuts' && styles.tabActive]}
        onPress={() => setActiveTab('cuts')}
      >
        <Text style={[styles.tabText, activeTab === 'cuts' && styles.tabTextActive]}>
          Découpes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'methods' && styles.tabActive]}
        onPress={() => setActiveTab('methods')}
      >
        <Text style={[styles.tabText, activeTab === 'methods' && styles.tabTextActive]}>
          Méthodes
        </Text>
      </TouchableOpacity>
    </View>
  );

  // Render Overview Tab
  const renderOverview = () => {
    const uniqueMethods = groupMethodsByType();
    const totalCuts = meat.cuts.length;

    return (
      <View style={styles.tabContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>À propos</Text>
          <Text style={styles.cardDescription}>
            {meat.description || 'Découvrez toutes les découpes et méthodes de cuisson pour cette viande.'}
          </Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{totalCuts}</Text>
            <Text style={styles.statLabel}>Découpes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{uniqueMethods.length}</Text>
            <Text style={styles.statLabel}>Types de cuisson</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Utilisations typiques</Text>
          <View style={styles.usageList}>
            <Text style={styles.usageItem}>• Rôtis et grillades</Text>
            <Text style={styles.usageItem}>• Cuissons lentes et mijotées</Text>
            <Text style={styles.usageItem}>• Préparations rapides à la poêle</Text>
            <Text style={styles.usageItem}>• Spécialités au four</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Catégories de cuisson disponibles</Text>
          <View style={styles.methodCategories}>
            {uniqueMethods.map(([category, methods]) => (
              <View key={category} style={styles.categoryChip}>
                <Text style={styles.categoryChipText}>{category}</Text>
                <View style={styles.categoryBadgeSmall}>
                  <Text style={styles.categoryBadgeSmallText}>{methods.length}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  // Render Cuts Tab
  const renderCuts = () => (
    <View style={styles.tabContent}>
      {meat.cuts.map((cut) => (
        <View key={cut.id} style={styles.cutCard}>
          <TouchableOpacity
            style={styles.cutHeader}
            onPress={() => toggleCutExpansion(cut.id)}
          >
            <View style={styles.cutHeaderLeft}>
              <Text style={styles.cutName}>{cut.name}</Text>
              {cut.nameEn && (
                <Text style={styles.cutNameEn}>{cut.nameEn}</Text>
              )}
            </View>
            <Text style={styles.expandIcon}>
              {expandedCutId === cut.id ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          <View style={styles.cutInfo}>
            {cut.typicalWeight && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Poids:</Text>
                <Text style={styles.infoValue}>
                  {cut.typicalWeight.min}-{cut.typicalWeight.max} {cut.typicalWeight.unit}
                </Text>
              </View>
            )}
            {cut.typicalDimensions && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Dimensions:</Text>
                <Text style={styles.infoValue}>
                  {cut.typicalDimensions.length && `${cut.typicalDimensions.length}cm`}
                  {cut.typicalDimensions.width && ` × ${cut.typicalDimensions.width}cm`}
                  {cut.typicalDimensions.height && ` × ${cut.typicalDimensions.height}cm`}
                </Text>
              </View>
            )}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Cuissons:</Text>
              <Text style={styles.infoValue}>{cut.temperatures.length} niveaux</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Méthodes:</Text>
              <Text style={styles.infoValue}>{cut.cookingMethods.length} disponibles</Text>
            </View>
          </View>

          {expandedCutId === cut.id && (
            <View style={styles.cutExpanded}>
              {/* Temperatures */}
              <View style={styles.expandedSection}>
                <Text style={styles.expandedSectionTitle}>Températures à coeur</Text>
                {cut.temperatures.map((temp, index) => (
                  <View key={index} style={styles.temperatureRow}>
                    <View style={styles.temperatureLeft}>
                      <Text style={styles.temperatureDoneness}>{temp.doneness}</Text>
                      <Text style={styles.temperatureDescription}>{temp.description}</Text>
                    </View>
                    <View style={styles.temperatureRight}>
                      <Text style={styles.temperatureValue}>{temp.coreTemperature}°C</Text>
                      {temp.safetyTemperature && (
                        <Text style={styles.temperatureSafety}>
                          Sécurité: {temp.safetyTemperature}°C
                        </Text>
                      )}
                    </View>
                  </View>
                ))}
              </View>

              {/* Cooking Methods */}
              <View style={styles.expandedSection}>
                <Text style={styles.expandedSectionTitle}>Méthodes de cuisson</Text>
                {cut.cookingMethods.map((method, index) => (
                  <View key={index} style={styles.methodRow}>
                    <View style={styles.methodLeft}>
                      <Text style={styles.methodName}>{formatMethodName(method.method)}</Text>
                      <Text style={styles.methodDetails}>
                        {method.cookingTemperature}°C • {method.baseTimePerKg} min/kg
                        {method.baseTimePerCm && ` • ${method.baseTimePerCm} min/cm`}
                      </Text>
                    </View>
                    <View style={styles.methodRight}>
                      <Text style={styles.methodResting}>
                        Repos: {method.restingTime} min
                      </Text>
                    </View>
                  </View>
                ))}
              </View>

              {/* Recommendations */}
              {cut.recommendations && (
                <View style={styles.expandedSection}>
                  <Text style={styles.expandedSectionTitle}>Recommandations</Text>
                  <Text style={styles.recommendations}>{cut.recommendations}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      ))}
    </View>
  );

  // Render Cooking Methods Tab
  const renderMethods = () => {
    const groupedMethods = groupMethodsByType();

    return (
      <View style={styles.tabContent}>
        {groupedMethods.map(([category, methods]) => (
          <View key={category} style={styles.card}>
            <Text style={styles.cardTitle}>{category}</Text>
            <View style={styles.methodsList}>
              {methods.map((method, index) => (
                <View key={index} style={styles.methodChip}>
                  <Text style={styles.methodChipText}>{formatMethodName(method)}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderHero()}
        {renderTabs()}

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'cuts' && renderCuts()}
        {activeTab === 'methods' && renderMethods()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    ...Typography.title2,
    color: Colors.error,
  },

  // Hero Section
  hero: {
    backgroundColor: Colors.surface,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
    ...Shadows.medium,
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  heroIcon: {
    fontSize: 80,
    marginBottom: Spacing.md,
  },
  heroTitle: {
    ...Typography.title,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  categoryBadge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.md,
  },
  categoryBadgeText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  heroDescription: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },
  heroActions: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.medium,
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 28,
  },
  calculateButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.gold,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    ...Shadows.small,
  },
  calculateButtonIcon: {
    fontSize: 24,
  },
  calculateButtonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    fontSize: 18,
  },

  // Tabs
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    marginTop: Spacing.md,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.medium,
    padding: Spacing.xs,
    ...Shadows.small,
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.small,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: Colors.gold,
  },
  tabText: {
    ...Typography.bodyBold,
    color: Colors.textSecondary,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },

  // Tab Content
  tabContent: {
    padding: Spacing.lg,
  },

  // Cards
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.medium,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.small,
  },
  cardTitle: {
    ...Typography.title2,
    color: Colors.gold,
    marginBottom: Spacing.md,
  },
  cardDescription: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    lineHeight: 24,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.medium,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.small,
  },
  statNumber: {
    ...Typography.title,
    color: Colors.gold,
    fontSize: 36,
  },
  statLabel: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },

  // Usage List
  usageList: {
    gap: Spacing.sm,
  },
  usageItem: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    lineHeight: 24,
  },

  // Method Categories
  methodCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.medium,
    gap: Spacing.sm,
  },
  categoryChipText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },
  categoryBadgeSmall: {
    backgroundColor: Colors.gold,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBadgeSmallText: {
    ...Typography.small,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // Cut Card
  cutCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    ...Shadows.small,
  },
  cutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  cutHeaderLeft: {
    flex: 1,
  },
  cutName: {
    ...Typography.title2,
    color: Colors.textPrimary,
    fontSize: 20,
  },
  cutNameEn: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  expandIcon: {
    ...Typography.title2,
    color: Colors.gold,
    marginLeft: Spacing.md,
  },
  cutInfo: {
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    ...Typography.bodyBold,
    color: Colors.textSecondary,
  },
  infoValue: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },

  // Expanded Cut Details
  cutExpanded: {
    backgroundColor: Colors.background,
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  expandedSection: {
    gap: Spacing.sm,
  },
  expandedSectionTitle: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 18,
    marginBottom: Spacing.sm,
  },

  // Temperature Rows
  temperatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.small,
    marginBottom: Spacing.sm,
  },
  temperatureLeft: {
    flex: 1,
  },
  temperatureDoneness: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    textTransform: 'capitalize',
  },
  temperatureDescription: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  temperatureRight: {
    alignItems: 'flex-end',
  },
  temperatureValue: {
    ...Typography.bodyBold,
    color: Colors.gold,
    fontSize: 18,
  },
  temperatureSafety: {
    ...Typography.small,
    color: Colors.success,
    marginTop: Spacing.xs,
  },

  // Method Rows
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.small,
    marginBottom: Spacing.sm,
  },
  methodLeft: {
    flex: 1,
  },
  methodName: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
  },
  methodDetails: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  methodRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  methodResting: {
    ...Typography.bodyRegular,
    color: Colors.gold,
  },

  // Recommendations
  recommendations: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    lineHeight: 24,
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.small,
    borderLeftWidth: 4,
    borderLeftColor: Colors.gold,
  },

  // Methods List
  methodsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  methodChip: {
    backgroundColor: Colors.background,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.medium,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  methodChipText: {
    ...Typography.bodyRegular,
    color: Colors.textPrimary,
  },
});
