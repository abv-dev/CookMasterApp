import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';
import { meatsData } from '../data/meatsData';
import { Meat, MeatCategory } from '../types/models';
import Ionicons from '@expo/vector-icons/Ionicons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NavigationType = any;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationType>();
  const { t } = useTranslation();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'Bonjour';
    if (hour >= 12 && hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  // Get popular meats (first 6 meats from different categories)
  const popularMeats = useMemo(() => {
    return meatsData.slice(0, 6);
  }, []);

  const handleMeatPress = (meat: Meat) => {
    navigation.navigate('Explorer', {
      screen: 'MeatDetail',
      params: { meat }
    });
  };

  const suggestions = [
    {
      id: '1',
      icon: 'flame',
      title: 'Steak parfait',
      description: 'Cuisson saignante idéale pour votre entrecôte',
      meatType: 'Bœuf'
    },
    {
      id: '2',
      icon: 'timer-outline',
      title: 'Poulet rôti croustillant',
      description: 'Temps et température pour un poulet doré',
      meatType: 'Volaille'
    },
    {
      id: '3',
      icon: 'restaurant',
      title: 'Côtelettes d\'agneau',
      description: 'Cuisson rosée à cœur avec une belle croûte',
      meatType: 'Agneau'
    },
    {
      id: '4',
      icon: 'flash',
      title: 'Porc au barbecue',
      description: 'Technique BBQ pour viande tendre et juteuse',
      meatType: 'Porc'
    },
  ];

  const recentCookings = [
    {
      id: '1',
      name: 'Entrecôte',
      method: 'Poêle',
      doneness: 'Saignant',
      time: 8,
      date: new Date(Date.now() - 86400000), // Yesterday
    },
    {
      id: '2',
      name: 'Poulet entier',
      method: 'Four',
      doneness: 'À point',
      time: 65,
      date: new Date(Date.now() - 172800000), // 2 days ago
    },
  ];

  const getCategoryLabel = (category: MeatCategory) => {
    switch (category) {
      case MeatCategory.BOEUF: return 'Bœuf';
      case MeatCategory.PORC: return 'Porc';
      case MeatCategory.AGNEAU: return 'Agneau';
      case MeatCategory.VEAU: return 'Veau';
      case MeatCategory.VOLAILLE: return 'Volaille';
      default: return 'Gibier';
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greetingText}>{getGreeting()}</Text>
            <Text style={styles.appName}>CookMaster</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={44} color={Colors.gold} />
          </TouchableOpacity>
        </View>

        {/* Quick Actions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions rapides</Text>
          <View style={styles.quickActionsRow}>
            <TouchableOpacity
              style={[styles.quickActionButton, styles.quickActionCalculator]}
              onPress={() => navigation.navigate('Calculator')}
              activeOpacity={0.8}
            >
              <Ionicons name="timer" size={28} color="#FFFFFF" />
              <Text style={styles.quickActionTitle}>Calculateur</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.quickActionButton, styles.quickActionExplorer]}
              onPress={() => navigation.navigate('Explorer')}
              activeOpacity={0.8}
            >
              <Ionicons name="book" size={28} color="#FFFFFF" />
              <Text style={styles.quickActionTitle}>Explorer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.quickActionButton, styles.quickActionHistory]}
              onPress={() => navigation.navigate('History')}
              activeOpacity={0.8}
            >
              <Ionicons name="time" size={28} color="#FFFFFF" />
              <Text style={styles.quickActionTitle}>Historique</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggestions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggestions</Text>
          {suggestions.map((suggestion) => (
            <TouchableOpacity
              key={suggestion.id}
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Calculator')}
              activeOpacity={0.7}
            >
              <View style={styles.suggestionIconContainer}>
                <Ionicons name={suggestion.icon as any} size={32} color={Colors.gold} />
              </View>
              <View style={styles.suggestionContent}>
                <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
                <Text style={styles.suggestionDescription}>{suggestion.description}</Text>
                <Text style={styles.suggestionMeatType}>{suggestion.meatType}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={`${Colors.textPrimary}4D`} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Meats Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Viandes populaires</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Explorer')}>
              <Text style={styles.seeAllText}>Voir tout</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.meatScrollContent}
          >
            {popularMeats.map((meat) => (
              <TouchableOpacity
                key={meat.id}
                style={styles.meatCard}
                onPress={() => handleMeatPress(meat)}
                activeOpacity={0.7}
              >
                <View style={styles.meatImageContainer}>
                  <Ionicons name="flame" size={32} color="#FFFFFF" />
                </View>
                <Text style={styles.meatName}>{meat.name}</Text>
                <Text style={styles.meatCategory}>{getCategoryLabel(meat.category)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Cookings Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Cuisines récentes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Voir tout</Text>
            </TouchableOpacity>
          </View>

          {recentCookings.map((cooking) => (
            <TouchableOpacity
              key={cooking.id}
              style={styles.recentCookingCard}
              activeOpacity={0.7}
            >
              <View style={styles.cookingIconContainer}>
                <Ionicons name="restaurant" size={24} color={Colors.gold} />
              </View>
              <View style={styles.cookingContent}>
                <Text style={styles.cookingName}>{cooking.name}</Text>
                <View style={styles.cookingInfo}>
                  <Text style={styles.cookingDoneness}>{cooking.doneness}</Text>
                  <Text style={styles.cookingInfoSeparator}>•</Text>
                  <Text style={styles.cookingTime}>{cooking.time} min</Text>
                </View>
                <Text style={styles.cookingDate}>{formatDate(cooking.date)}</Text>
              </View>
              <Ionicons name="refresh" size={20} color={Colors.gold} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Padding */}
        <View style={{ height: Spacing.xl }} />
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

  // === Header ===
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  headerLeft: {
    flex: 1,
  },
  greetingText: {
    fontSize: 14,
    fontWeight: '400',
    color: `${Colors.textPrimary}B3`, // 70% opacity
    marginBottom: Spacing.xs,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.gold,
  },
  profileButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // === Sections ===
  section: {
    marginBottom: Spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gold,
  },

  // === Quick Actions ===
  quickActionsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  quickActionButton: {
    flex: 1,
    height: 70,
    borderRadius: BorderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  quickActionCalculator: {
    backgroundColor: Colors.gold,
  },
  quickActionExplorer: {
    backgroundColor: Colors.accent,
  },
  quickActionHistory: {
    backgroundColor: Colors.accent,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.textPrimary,
    marginTop: Spacing.sm,
  },

  // === Suggestions ===
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    marginBottom: Spacing.md,
  },
  suggestionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.medium,
    backgroundColor: `${Colors.gold}26`, // 15% opacity
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  suggestionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: `${Colors.textPrimary}B3`, // 70% opacity
    marginBottom: Spacing.xs,
    lineHeight: 18,
  },
  suggestionMeatType: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.gold,
  },

  // === Popular Meats ===
  meatScrollContent: {
    paddingRight: Spacing.lg,
  },
  meatCard: {
    width: 120,
    marginRight: Spacing.md,
  },
  meatImageContainer: {
    width: 120,
    height: 80,
    borderRadius: BorderRadius.medium,
    backgroundColor: Colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  meatName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  meatCategory: {
    fontSize: 12,
    fontWeight: '400',
    color: `${Colors.textPrimary}99`, // 60% opacity
  },

  // === Recent Cookings ===
  recentCookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    marginBottom: Spacing.md,
  },
  cookingIconContainer: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.medium,
    backgroundColor: `${Colors.gold}26`, // 15% opacity
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  cookingContent: {
    flex: 1,
  },
  cookingName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  cookingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  cookingDoneness: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.accent,
  },
  cookingInfoSeparator: {
    fontSize: 14,
    fontWeight: '400',
    color: `${Colors.textPrimary}80`, // 50% opacity
    marginHorizontal: Spacing.xs,
  },
  cookingTime: {
    fontSize: 14,
    fontWeight: '400',
    color: `${Colors.textPrimary}B3`, // 70% opacity
  },
  cookingDate: {
    fontSize: 12,
    fontWeight: '400',
    color: `${Colors.textPrimary}80`, // 50% opacity
  },
});
