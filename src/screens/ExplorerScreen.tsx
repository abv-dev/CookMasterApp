import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';
import { meatsData } from '../data/meatsData';
import { Meat, MeatCategory } from '../types/models';
import { ExplorerStackParamList } from '../types/navigation';

type ExplorerScreenNavigationProp = NativeStackNavigationProp<ExplorerStackParamList, 'ExplorerMain'>;

type CategoryFilter = 'all' | 'boeuf' | 'porc' | 'agneau' | 'veau' | 'volaille' | 'gibier';

interface CategoryTab {
  key: CategoryFilter;
  label: string;
  icon: string;
}

export default function ExplorerScreen() {
  const navigation = useNavigation<ExplorerScreenNavigationProp>();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Category tabs configuration
  const categoryTabs: CategoryTab[] = [
    { key: 'all', label: 'Tout', icon: '🍖' },
    { key: 'boeuf', label: 'Boeuf', icon: '🥩' },
    { key: 'porc', label: 'Porc', icon: '🥓' },
    { key: 'agneau', label: 'Agneau', icon: '🐑' },
    { key: 'veau', label: 'Veau', icon: '🐮' },
    { key: 'volaille', label: 'Volaille', icon: '🐔' },
    { key: 'gibier', label: 'Gibier', icon: '🦌' },
  ];

  // Filter meats based on search query and category
  const filteredMeats = useMemo(() => {
    let filtered = meatsData;

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'volaille') {
        // Volaille includes Poulet, Canard, Dinde
        filtered = filtered.filter(
          meat => meat.category === MeatCategory.VOLAILLE
        );
      } else if (selectedCategory === 'gibier') {
        // Gibier includes all game meats
        filtered = filtered.filter(
          meat =>
            meat.category === MeatCategory.CERF ||
            meat.category === MeatCategory.CHEVREUIL ||
            meat.category === MeatCategory.SANGLIER ||
            meat.category === MeatCategory.LIEVRE ||
            meat.category === MeatCategory.FAISAN
        );
      } else {
        filtered = filtered.filter(
          meat => meat.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        meat =>
          meat.name.toLowerCase().includes(query) ||
          meat.cuts.some(cut => cut.name.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Handle pull-to-refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // Handle meat card press
  const handleMeatPress = (meat: Meat) => {
    navigation.navigate('MeatDetail', { meat });
  };

  // Render category tab
  const renderCategoryTab = ({ item }: { item: CategoryTab }) => (
    <TouchableOpacity
      style={[
        styles.categoryTab,
        selectedCategory === item.key && styles.categoryTabActive,
      ]}
      onPress={() => setSelectedCategory(item.key)}
      activeOpacity={0.7}
    >
      <Text style={styles.categoryTabIcon}>{item.icon}</Text>
      <Text
        style={[
          styles.categoryTabText,
          selectedCategory === item.key && styles.categoryTabTextActive,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  // Render meat card - 2 Column Grid
  const renderMeatCard = ({ item, index }: { item: Meat; index: number }) => {
    const categoryLabel = getCategoryLabel(item.category);
    const isLeftColumn = index % 2 === 0;

    return (
      <TouchableOpacity
        style={[
          styles.meatCard,
          isLeftColumn ? styles.meatCardLeft : styles.meatCardRight,
        ]}
        onPress={() => handleMeatPress(item)}
        activeOpacity={0.8}
      >
        {/* Large Icon - Gradient Background */}
        <View style={[styles.meatCardIconLarge, {
          backgroundColor: 'transparent',
        }]}>
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.gold,
            opacity: 0.6,
          }} />
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.gold,
            opacity: 0.3,
          }} />
          <Text style={styles.meatCardIconText}>{item.icon || '🍖'}</Text>
        </View>

        {/* Content */}
        <View style={styles.meatCardContent}>
          <Text style={styles.meatCardTitle} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.meatCardSubtitle}>{categoryLabel}</Text>
        </View>

        {/* Footer */}
        <View style={styles.meatCardFooter}>
          <View style={styles.cutsInfo}>
            <Text style={styles.cutsInfoIcon}>•</Text>
            <Text style={styles.cutsInfoText}>
              {item.cuts.length} coupes
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Get category label for badge
  const getCategoryLabel = (category: MeatCategory): string => {
    const categoryMap: Record<string, string> = {
      [MeatCategory.BOEUF]: 'Boeuf',
      [MeatCategory.PORC]: 'Porc',
      [MeatCategory.AGNEAU]: 'Agneau',
      [MeatCategory.VEAU]: 'Veau',
      [MeatCategory.VOLAILLE]: 'Volaille',
      [MeatCategory.CERF]: 'Gibier',
      [MeatCategory.CHEVREUIL]: 'Gibier',
      [MeatCategory.SANGLIER]: 'Gibier',
      [MeatCategory.LIEVRE]: 'Gibier',
      [MeatCategory.FAISAN]: 'Gibier',
      [MeatCategory.SAUCISSES]: 'Charcuterie',
    };
    return categoryMap[category] || 'Autre';
  };

  // Render empty state
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateIcon}>
        {searchQuery ? '🔍' : '🥩'}
      </Text>
      <Text style={styles.emptyStateTitle}>
        {searchQuery ? 'Aucun résultat' : 'Aucune viande disponible'}
      </Text>
      <Text style={styles.emptyStateMessage}>
        {searchQuery
          ? `Aucune viande trouvée pour "${searchQuery}"`
          : 'La base de données est vide'}
      </Text>
      {searchQuery && (
        <TouchableOpacity
          style={styles.clearSearchButton}
          onPress={() => setSearchQuery('')}
        >
          <Text style={styles.clearSearchButtonText}>Effacer la recherche</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  // Render loading state
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.gold} />
          <Text style={styles.loadingText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTitleRow}>
            <Text style={styles.headerIcon}>🔍</Text>
            <Text style={styles.headerTitle}>Découvrir les viandes</Text>
          </View>
          <Text style={styles.headerSubtitle}>
            {filteredMeats.length} {filteredMeats.length === 1 ? 'viande disponible' : 'viandes disponibles'}
          </Text>
        </View>

        {/* Search Bar - More Prominent */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <Text style={styles.searchIconLarge}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher une viande ou une coupe..."
              placeholderTextColor={Colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setSearchQuery('')}
              >
                <Text style={styles.clearButtonText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabsContainer}>
          <FlatList
            data={categoryTabs}
            renderItem={renderCategoryTab}
            keyExtractor={item => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryTabsContent}
          />
        </View>

        {/* Meats Grid - 2 Columns */}
        <FlatList
          data={filteredMeats}
          renderItem={renderMeatCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.meatsGrid}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.gridRow}
          ListEmptyComponent={renderEmptyState}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={Colors.gold}
              colors={[Colors.gold]}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
  },

  // Header
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  headerIcon: {
    fontSize: 32,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  // Search Bar - More Prominent
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchIconLarge: {
    fontSize: 18,
    marginRight: 8,
    opacity: 0.5,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: Colors.textPrimary,
  },
  clearButton: {
    padding: Spacing.sm,
    marginLeft: Spacing.sm,
  },
  clearButtonText: {
    fontSize: 18,
    color: Colors.textSecondary,
    opacity: 0.5,
  },

  // Category Tabs
  categoryTabsContainer: {
    marginBottom: 16,
  },
  categoryTabsContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  categoryTabActive: {
    backgroundColor: Colors.gold,
  },
  categoryTabIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  categoryTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  categoryTabTextActive: {
    color: '#FFFFFF',
  },

  // Meats Grid
  meatsGrid: {
    paddingHorizontal: 16,
    paddingBottom: Spacing.xxl,
  },
  gridRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    gap: 16,
  },

  // Meat Card - 2 Column Grid
  meatCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 0,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
  },
  meatCardLeft: {
    marginRight: 0,
  },
  meatCardRight: {
    marginLeft: 0,
  },

  // Category Badge
  categoryBadgeImproved: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    backgroundColor: Colors.gold,
    borderRadius: BorderRadius.small,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    zIndex: 1,
  },
  categoryBadgeText: {
    fontSize: 10,
    color: '#1A1A1A',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Large Icon
  meatCardIconLarge: {
    width: '100%',
    height: 120,
    borderRadius: 0,
    backgroundColor: Colors.gold + '99',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  meatCardIconText: {
    fontSize: 40,
    color: '#FFFFFF',
  },

  // Card Content
  meatCardContent: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    minHeight: 70,
  },
  meatCardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
    lineHeight: 20,
  },
  meatCardSubtitle: {
    fontSize: 11,
    color: Colors.textPrimary + 'B3',
    marginBottom: 0,
  },
  meatCardDescription: {
    fontSize: 13,
    color: '#B0B0B0',
    lineHeight: 18,
  },

  // Card Footer
  meatCardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 2,
    paddingBottom: 4,
  },
  cutsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cutsInfoIcon: {
    fontSize: 10,
    marginRight: 4,
  },
  cutsInfoText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.gold,
  },
  viewDetailsArrow: {
    fontSize: 24,
    color: Colors.gold,
    fontWeight: '300',
  },

  // Empty State
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxl * 2,
    paddingHorizontal: Spacing.xl,
  },
  emptyStateIcon: {
    fontSize: 60,
    marginBottom: Spacing.lg,
    opacity: 0.3,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  emptyStateMessage: {
    fontSize: 13,
    color: Colors.textPrimary + '99',
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: 18,
  },
  clearSearchButton: {
    backgroundColor: Colors.gold,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    ...Shadows.medium,
  },
  clearSearchButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
