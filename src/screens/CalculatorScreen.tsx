import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Alert,
  Animated,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Slider from '@react-native-community/slider';

import { meatsData } from '../data/meatsData';
import { CookingCalculator } from '../services/calculator';
import { Meat, MeatCut, CookingMethodInfo, CookingTemperature, MeatCategory } from '../types/models';
import { CalculatorStackParamList } from '../types/navigation';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

type CalculatorScreenRouteProp = RouteProp<CalculatorStackParamList, 'CalculatorMain'>;
type CalculatorScreenNavigationProp = NativeStackNavigationProp<CalculatorStackParamList, 'CalculatorMain'>;

type CalculationMode = 'simple' | 'advanced';
type Step = 1 | 2 | 3 | 4 | 5;

// Category icons mapping
const CATEGORY_ICONS: Record<MeatCategory, string> = {
  [MeatCategory.BOEUF]: '🥩',
  [MeatCategory.PORC]: '🥓',
  [MeatCategory.AGNEAU]: '🐑',
  [MeatCategory.VEAU]: '🐮',
  [MeatCategory.VOLAILLE]: '🐔',
  [MeatCategory.SAUCISSES]: '🌭',
  [MeatCategory.CERF]: '🦌',
  [MeatCategory.CHEVREUIL]: '🦌',
  [MeatCategory.SANGLIER]: '🐗',
  [MeatCategory.LIEVRE]: '🐇',
  [MeatCategory.FAISAN]: '🦜',
};

// Cooking method labels in French
const COOKING_METHOD_LABELS: Record<string, string> = {
  four_traditionnel: 'Four traditionnel',
  four_convection: 'Four convection',
  four_vapeur: 'Four vapeur',
  four_chaleur_tournante: 'Four chaleur tournante',
  poele: 'Poêle',
  plancha: 'Plancha',
  wok: 'Wok',
  sauteuse: 'Sauteuse',
  grill: 'Grill',
  barbecue_charbon: 'Barbecue charbon',
  barbecue_gaz: 'Barbecue gaz',
  barbecue_electrique: 'Barbecue électrique',
  salamandre: 'Salamandre',
  cocotte: 'Cocotte',
  mijoteuse: 'Mijoteuse',
  braisage: 'Braisage',
  ragout: 'Ragoût',
  sous_vide: 'Sous-vide',
  basse_temperature: 'Basse température',
  rotissoire: 'Rôtissoire',
  rotissoire_verticale: 'Rôtissoire verticale',
  vapeur: 'Vapeur',
  court_bouillon: 'Court-bouillon',
  pochage: 'Pochage',
  saisie: 'Saisie',
  flambe: 'Flambé',
  fumoir_chaud: 'Fumoir chaud',
  fumoir_froid: 'Fumoir froid',
  air_fryer: 'Air fryer',
  micro_ondes: 'Micro-ondes',
  pierre_chaude: 'Pierre chaude',
  tajine: 'Tajine',
  papillote: 'Papillote',
  croute_sel: 'Croûte de sel',
  croute_argile: 'Croûte d\'argile',
  plancha_professionnelle: 'Plancha pro',
  grill_pierre_de_lave: 'Grill pierre de lave',
  grill_salamandre: 'Grill salamandre',
};

// Cooking method icons
const getMethodIcon = (method: string): string => {
  const icons: Record<string, string> = {
    four_traditionnel: '🔥',
    four_convection: '🌀',
    four_vapeur: '💨',
    four_chaleur_tournante: '🌡️',
    poele: '🍳',
    plancha: '🔲',
    wok: '🥘',
    sauteuse: '🍳',
    grill: '🔥',
    barbecue_charbon: '🔥',
    barbecue_gaz: '🔥',
    barbecue_electrique: '⚡',
    salamandre: '🔥',
    cocotte: '🍲',
    mijoteuse: '🍲',
    braisage: '🍲',
    ragout: '🍲',
    sous_vide: '💧',
    basse_temperature: '🌡️',
    rotissoire: '🔄',
    rotissoire_verticale: '🔄',
    vapeur: '💨',
    court_bouillon: '💧',
    pochage: '💧',
    saisie: '🔥',
    flambe: '🔥',
    fumoir_chaud: '💨',
    fumoir_froid: '❄️',
    air_fryer: '💨',
    micro_ondes: '📡',
    pierre_chaude: '🔥',
    tajine: '🏺',
    papillote: '📦',
    croute_sel: '🧂',
    croute_argile: '🏺',
    plancha_professionnelle: '🔲',
    grill_pierre_de_lave: '🔥',
    grill_salamandre: '🔥',
  };
  return icons[method] || '🍳';
};

export default function CalculatorScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<CalculatorScreenNavigationProp>();
  const route = useRoute<CalculatorScreenRouteProp>();

  // Mode state
  const [mode, setMode] = useState<CalculationMode>('simple');

  // Selection states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeat, setSelectedMeat] = useState<Meat | null>(null);
  const [selectedCut, setSelectedCut] = useState<MeatCut | null>(null);
  const [selectedDoneness, setSelectedDoneness] = useState<CookingTemperature | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<CookingMethodInfo | null>(null);

  // Configuration states
  const [weight, setWeight] = useState('');
  const [thickness, setThickness] = useState('');
  const [initialTemp, setInitialTemp] = useState(4); // Default fridge temp
  const [altitude, setAltitude] = useState('0');
  const [humidity, setHumidity] = useState('50');
  const [customOvenTemp, setCustomOvenTemp] = useState('');

  // UI states
  const [isCalculating, setIsCalculating] = useState(false);
  const [showCutSelection, setShowCutSelection] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>(1);

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  // Animate on step change
  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(30);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentStep]);

  // Handle preselected meat from navigation params
  useEffect(() => {
    const preselectedMeat = route.params?.preselectedMeat;
    if (preselectedMeat) {
      setSelectedMeat(preselectedMeat);
      setShowCutSelection(true);
      setCurrentStep(2);
    }
  }, [route.params?.preselectedMeat]);

  // Determine current step based on selections
  useEffect(() => {
    if (!selectedMeat) {
      setCurrentStep(1);
    } else if (!selectedCut) {
      setCurrentStep(2);
    } else if (!weight || !thickness) {
      setCurrentStep(3);
    } else if (!selectedDoneness) {
      setCurrentStep(4);
    } else if (!selectedMethod) {
      setCurrentStep(5);
    }
  }, [selectedMeat, selectedCut, weight, thickness, selectedDoneness, selectedMethod]);

  // Filter meats based on search query
  const filteredMeats = useMemo(() => {
    if (!searchQuery.trim()) {
      return meatsData;
    }
    const query = searchQuery.toLowerCase();
    return meatsData.filter(
      (meat) =>
        meat.name.toLowerCase().includes(query) ||
        meat.nameEn?.toLowerCase().includes(query) ||
        meat.description?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group meats by category
  const meatsByCategory = useMemo(() => {
    const grouped: Record<string, Meat[]> = {};
    filteredMeats.forEach((meat) => {
      if (!grouped[meat.category]) {
        grouped[meat.category] = [];
      }
      grouped[meat.category].push(meat);
    });
    return grouped;
  }, [filteredMeats]);

  // Category names in French
  const categoryNames: Record<MeatCategory, string> = {
    [MeatCategory.BOEUF]: 'Bœuf',
    [MeatCategory.PORC]: 'Porc',
    [MeatCategory.AGNEAU]: 'Agneau',
    [MeatCategory.VEAU]: 'Veau',
    [MeatCategory.VOLAILLE]: 'Volaille',
    [MeatCategory.SAUCISSES]: 'Saucisses',
    [MeatCategory.CERF]: 'Cerf',
    [MeatCategory.CHEVREUIL]: 'Chevreuil',
    [MeatCategory.SANGLIER]: 'Sanglier',
    [MeatCategory.LIEVRE]: 'Lièvre',
    [MeatCategory.FAISAN]: 'Faisan',
  };

  // Handle meat selection
  const handleSelectMeat = (meat: Meat) => {
    setSelectedMeat(meat);
    setShowCutSelection(true);
    setSelectedCut(null);
    setSelectedDoneness(null);
    setSelectedMethod(null);
    setCurrentStep(2);
  };

  // Handle cut selection
  const handleSelectCut = (cut: MeatCut) => {
    setSelectedCut(cut);
    setSelectedDoneness(null);
    setSelectedMethod(null);
    setShowCutSelection(false);
    setCurrentStep(3);
  };

  // Handle reset
  const handleReset = () => {
    setSelectedMeat(null);
    setSelectedCut(null);
    setSelectedDoneness(null);
    setSelectedMethod(null);
    setWeight('');
    setThickness('');
    setInitialTemp(4);
    setAltitude('0');
    setHumidity('50');
    setCustomOvenTemp('');
    setSearchQuery('');
    setShowCutSelection(false);
    setCurrentStep(1);
  };

  // Step completion status
  const isStepComplete = (step: Step): boolean => {
    switch (step) {
      case 1:
        return selectedMeat !== null;
      case 2:
        return selectedCut !== null;
      case 3:
        return weight !== '' && parseFloat(weight) > 0;
      case 4:
        return selectedDoneness !== null;
      case 5:
        return selectedMethod !== null;
      default:
        return false;
    }
  };

  // Progress percentage
  const progressPercentage = useMemo(() => {
    let completed = 0;
    if (selectedMeat) completed += 20;
    if (selectedCut) completed += 20;
    if (weight && parseFloat(weight) > 0) completed += 20;
    if (selectedDoneness) completed += 20;
    if (selectedMethod) completed += 20;
    return completed;
  }, [selectedMeat, selectedCut, weight, selectedDoneness, selectedMethod]);

  // Handle calculate
  const handleCalculate = async () => {
    // Validation
    if (!selectedMeat || !selectedCut || !selectedDoneness || !selectedMethod) {
      Alert.alert('Information manquante', 'Veuillez sélectionner tous les paramètres requis.');
      return;
    }

    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      Alert.alert('Poids invalide', 'Veuillez entrer un poids valide en kg.');
      return;
    }

    setIsCalculating(true);

    try {
      // Prepare calculation parameters
      const params = {
        meat: selectedMeat,
        cut: selectedCut,
        method: selectedMethod,
        weight: weightNum,
        thickness: thickness ? parseFloat(thickness) : undefined,
        targetTemperature: selectedDoneness.coreTemperature,
        initialTemperature: initialTemp,
        customCookingTemp: customOvenTemp ? parseFloat(customOvenTemp) : undefined,
      };

      // Calculate cooking time
      const result = CookingCalculator.calculate(params);

      // Navigate to result screen (you'll need to implement this)
      // For now, show an alert
      Alert.alert(
        'Temps de cuisson',
        `Cuisson: ${CookingCalculator.formatTime(result.cookingTime)}\n` +
          `Repos: ${result.restingTime} min\n` +
          `Total: ${CookingCalculator.formatTime(result.totalTime)}`,
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Result', { result });
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue lors du calcul.');
      console.error(error);
    } finally {
      setIsCalculating(false);
    }
  };

  // Check if we can calculate
  const canCalculate =
    selectedMeat &&
    selectedCut &&
    selectedDoneness &&
    selectedMethod &&
    weight &&
    parseFloat(weight) > 0 &&
    !isCalculating;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🔥</Text>
          <Text style={styles.headerTitle}>Calculer votre cuisson</Text>
          <Text style={styles.headerSubtitle}>Suivez les étapes pour un résultat parfait</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <Animated.View
              style={[
                styles.progressBarFill,
                { width: `${progressPercentage}%` }
              ]}
            />
          </View>
          <Text style={styles.progressText}>{progressPercentage}% complété</Text>
        </View>

        {/* Step Indicators */}
        <View style={styles.stepsIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View key={step} style={styles.stepIndicatorItem}>
              <View
                style={[
                  styles.stepCircle,
                  isStepComplete(step as Step) && styles.stepCircleComplete,
                  currentStep === step && styles.stepCircleCurrent,
                ]}
              >
                <Text
                  style={[
                    styles.stepNumber,
                    (isStepComplete(step as Step) || currentStep === step) &&
                      styles.stepNumberActive,
                  ]}
                >
                  {isStepComplete(step as Step) ? '✓' : step}
                </Text>
              </View>
              {step < 5 && <View style={styles.stepLine} />}
            </View>
          ))}
        </View>

        {/* Mode Toggle (Minimized) */}
        {selectedMeat && selectedCut && mode === 'simple' && (
          <View style={styles.modeToggleMinimal}>
            <TouchableOpacity onPress={() => setMode('advanced')}>
              <Text style={styles.modeToggleText}>Mode avancé ›</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* STEP 1: Meat Selection */}
        {!selectedMeat && !showCutSelection && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.stepHeader}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>Étape 1</Text>
              </View>
              <Text style={styles.stepTitle}>Choisir une viande</Text>
              <Text style={styles.stepHelper}>Sélectionnez le type de viande que vous souhaitez cuire</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Text style={styles.searchIconText}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="calc_search"
                placeholderTextColor={Colors.textSecondary + '80'}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Text style={styles.searchIconText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Meats Grid by Category */}
            {Object.entries(meatsByCategory).map(([category, meats]) => (
              <View key={category} style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>
                  {CATEGORY_ICONS[category as MeatCategory]}{' '}
                  {categoryNames[category as MeatCategory]}
                </Text>

                <View style={styles.meatsGrid}>
                  {meats.map((meat) => (
                    <TouchableOpacity
                      key={meat.id}
                      style={styles.meatCardLarge}
                      onPress={() => handleSelectMeat(meat)}
                      activeOpacity={0.8}
                    >
                      <View style={styles.meatRowContent}>
                        <View style={styles.meatIconLarge}>
                          <Text style={styles.meatIconLargeText}>{CATEGORY_ICONS[category as MeatCategory]}</Text>
                        </View>
                        <Text style={styles.meatNameLarge}>{meat.name}</Text>
                      </View>
                      <View style={styles.meatChevron}>
                        <Text style={styles.meatChevronText}>›</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}

            {filteredMeats.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateIcon}>🔍</Text>
                <Text style={styles.emptyStateText}>Aucune viande trouvée</Text>
                <Text style={styles.emptyStateSubtext}>
                  Essayez une autre recherche
                </Text>
              </View>
            )}
          </Animated.View>
        )}

        {/* STEP 2: Cut Selection */}
        {selectedMeat && (showCutSelection || !selectedCut) && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.stepHeader}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>Étape 2</Text>
              </View>
              <View style={styles.selectedMeatHeader}>
                <Text style={styles.selectedMeatIcon}>{selectedMeat.icon}</Text>
                <View>
                  <Text style={styles.stepTitle}>Choisir la coupe</Text>
                  <TouchableOpacity onPress={handleReset}>
                    <Text style={styles.changeMeatText}>{selectedMeat.name} - Changer</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.stepHelper}>Sélectionnez le morceau de viande</Text>
            </View>

            {/* Cut List */}
            <View style={styles.cutsList}>
              {selectedMeat.cuts.map((cut) => (
                <TouchableOpacity
                  key={cut.id}
                  style={styles.cutCardImproved}
                  onPress={() => handleSelectCut(cut)}
                  activeOpacity={0.8}
                >
                  <View style={styles.cutMainInfo}>
                    <Text style={styles.cutNameImproved}>{cut.name}</Text>
                    {cut.nameEn && (
                      <Text style={styles.cutNameEn}>({cut.nameEn})</Text>
                    )}
                    {cut.description && (
                      <Text style={styles.cutDescImproved} numberOfLines={2}>
                        {cut.description}
                      </Text>
                    )}
                  </View>
                  <View style={styles.cutArrow}>
                    <Text style={styles.cutArrowText}>→</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        )}

        {/* STEP 3: Weight & Thickness */}
        {selectedMeat && selectedCut && !showCutSelection && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.stepHeader}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>Étape 3</Text>
              </View>
              <Text style={styles.stepTitle}>Poids et épaisseur</Text>
              <Text style={styles.stepHelper}>Entrez les dimensions de votre viande</Text>
            </View>

            {/* Current Selection Summary */}
            <View style={styles.selectionSummary}>
              <Text style={styles.summaryIcon}>{selectedMeat.icon}</Text>
              <View style={styles.summaryText}>
                <Text style={styles.summaryMeat}>{selectedMeat.name}</Text>
                <TouchableOpacity onPress={() => setShowCutSelection(true)}>
                  <Text style={styles.summaryCut}>{selectedCut.name} - Modifier</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Weight Input */}
            <View style={styles.configSection}>
              <Text style={styles.inputLabel}>Poids (kg) *</Text>
              <TextInput
                style={styles.inputLarge}
                placeholder="Entrez le poids de votre viande..."
                placeholderTextColor={Colors.textSecondary}
                keyboardType="decimal-pad"
                value={weight}
                onChangeText={setWeight}
              />
              {selectedCut.typicalWeight && (
                <Text style={styles.hint}>
                  💡 Poids typique: {selectedCut.typicalWeight.min}-{selectedCut.typicalWeight.max}{' '}
                  {selectedCut.typicalWeight.unit}
                </Text>
              )}
            </View>

            {/* Thickness Input */}
            <View style={styles.configSection}>
              <Text style={styles.inputLabel}>Épaisseur (cm)</Text>
              <TextInput
                style={styles.inputLarge}
                placeholder="Entrez l'épaisseur de votre viande..."
                placeholderTextColor={Colors.textSecondary}
                keyboardType="decimal-pad"
                value={thickness}
                onChangeText={setThickness}
              />
              {selectedCut.typicalDimensions?.height && (
                <Text style={styles.hint}>
                  💡 Épaisseur typique: ~{selectedCut.typicalDimensions.height} cm
                </Text>
              )}
            </View>
          </Animated.View>
        )}

        {/* STEP 4: Doneness Selection */}
        {selectedMeat && selectedCut && weight && parseFloat(weight) > 0 && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.stepHeader}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>Étape 4</Text>
              </View>
              <Text style={styles.stepTitle}>Cuisson souhaitée</Text>
              <Text style={styles.stepHelper}>Choisissez votre niveau de cuisson préféré</Text>
            </View>
            {/* Doneness Badges Grid */}
            <View style={styles.donenessGrid}>
              {selectedCut.temperatures.map((temp) => (
                <TouchableOpacity
                  key={temp.doneness}
                  style={[
                    styles.donenessBadge,
                    selectedDoneness?.doneness === temp.doneness && styles.donenessBadgeSelected,
                  ]}
                  onPress={() => setSelectedDoneness(temp)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.donenessBadgeTitle,
                      selectedDoneness?.doneness === temp.doneness && styles.donenessBadgeTitleSelected,
                    ]}
                  >
                    {temp.doneness.charAt(0).toUpperCase() + temp.doneness.slice(1)}
                  </Text>
                  <Text style={styles.donenessBadgeTemp}>{temp.coreTemperature}°C</Text>
                  <Text style={styles.donenessBadgeDesc} numberOfLines={2}>
                    {temp.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        )}

        {/* STEP 5: Cooking Method Selection */}
        {selectedMeat && selectedCut && selectedDoneness && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.stepHeader}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>Étape 5</Text>
              </View>
              <Text style={styles.stepTitle}>Méthode de cuisson</Text>
              <Text style={styles.stepHelper}>Comment allez-vous cuire votre viande?</Text>
            </View>
            {/* Method Cards with Icons */}
            <View style={styles.methodsGrid}>
              {selectedCut.cookingMethods.map((method) => {
                const methodIcon = getMethodIcon(method.method);
                return (
                  <TouchableOpacity
                    key={method.method}
                    style={[
                      styles.methodCard,
                      selectedMethod?.method === method.method && styles.methodCardSelected,
                    ]}
                    onPress={() => setSelectedMethod(method)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.methodIcon}>{methodIcon}</Text>
                    <Text
                      style={[
                        styles.methodName,
                        selectedMethod?.method === method.method && styles.methodNameSelected,
                      ]}
                    >
                      {COOKING_METHOD_LABELS[method.method] || method.method}
                    </Text>
                    <Text style={styles.methodTemp}>{method.cookingTemperature}°C</Text>
                    {selectedMethod?.method === method.method && (
                      <View style={styles.methodCheckmark}>
                        <Text style={styles.methodCheckmarkText}>✓</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        )}

        {/* Recommendations */}
        {selectedMeat && selectedCut && selectedCut.recommendations && !showCutSelection && (
          <View style={styles.recommendationsCard}>
            <Text style={styles.recommendationsIcon}>💡</Text>
            <View style={styles.recommendationsContent}>
              <Text style={styles.recommendationsTitle}>Conseil de chef</Text>
              <Text style={styles.recommendationsText}>
                {selectedCut.recommendations}
              </Text>
            </View>
          </View>
        )}

        {/* Initial Temperature Slider */}
        {selectedMeat && selectedCut && !showCutSelection && (
          <View style={styles.section}>
            <View style={styles.configSection}>
              <Text style={styles.inputLabel}>
                Température initiale: {initialTemp}°C
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={-18}
                maximumValue={25}
                step={1}
                value={initialTemp}
                onValueChange={setInitialTemp}
                minimumTrackTintColor={Colors.gold}
                maximumTrackTintColor={Colors.border}
                thumbTintColor={Colors.gold}
              />
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>-18°C\nCongelé</Text>
                <Text style={styles.sliderLabel}>4°C\nFrigo</Text>
                <Text style={styles.sliderLabel}>20°C\nAmbiant</Text>
              </View>
            </View>
          </View>
        )}

        {/* Calculate Button - Large and Prominent */}
        {selectedMeat && selectedCut && !showCutSelection && (
          <View style={styles.calculateContainer}>
            <TouchableOpacity
              style={[styles.calculateButtonLarge, !canCalculate && styles.calculateButtonDisabled]}
              onPress={handleCalculate}
              disabled={!canCalculate}
              activeOpacity={0.8}
            >
              {isCalculating ? (
                <ActivityIndicator size="large" color="#FFFFFF" />
              ) : (
                <View style={styles.calculateButtonContent}>
                  <Text style={styles.calculateButtonIcon}>🔥</Text>
                  <Text style={styles.calculateButtonText}>Calculer le temps de cuisson</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.resetButtonSmall}
              onPress={handleReset}
              activeOpacity={0.7}
            >
              <Text style={styles.resetButtonSmallText}>Recommencer</Text>
            </TouchableOpacity>
          </View>
        )}

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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },

  // Header
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: Spacing.sm,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // Progress
  progressContainer: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: Colors.surface,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: Spacing.sm,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.gold,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontWeight: '600',
  },

  // Step Indicators
  stepsIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  stepIndicatorItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleComplete: {
    backgroundColor: Colors.gold,
    borderColor: Colors.gold,
  },
  stepCircleCurrent: {
    borderColor: Colors.gold,
    borderWidth: 3,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  stepNumberActive: {
    color: '#FFFFFF',
  },
  stepLine: {
    width: 24,
    height: 2,
    backgroundColor: Colors.border,
    marginHorizontal: 4,
  },

  // Mode Toggle Minimal
  modeToggleMinimal: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  modeToggleText: {
    fontSize: 14,
    color: Colors.gold,
    fontWeight: '600',
  },
  // Section
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  // Step Header
  stepHeader: {
    marginBottom: Spacing.xl,
  },
  stepBadge: {
    backgroundColor: Colors.gold,
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.small,
    marginBottom: Spacing.md,
  },
  stepBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A1A1A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  stepHelper: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
  },

  // Search
  searchContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 12,
  },
  searchIconContainer: {
    marginRight: Spacing.sm,
  },
  searchIconText: {
    fontSize: 18,
    opacity: 0.5,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: Colors.textPrimary,
  },
  // Category & Meats
  categoryContainer: {
    marginBottom: Spacing.xl,
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.gold,
    marginBottom: 8,
    paddingTop: 8,
  },
  meatsGrid: {
    flexDirection: 'column',
  },
  meatCardLarge: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meatRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  meatIconLarge: {
    width: 24,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meatIconLargeText: {
    fontSize: 20,
    color: Colors.gold,
  },
  meatNameLarge: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.textPrimary,
    flex: 1,
  },
  meatChevron: {
    marginLeft: 8,
  },
  meatChevronText: {
    fontSize: 28,
    color: Colors.textPrimary + '4D',
    fontWeight: '300',
  },
  // Selected Meat Header (Step 2)
  selectedMeatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  selectedMeatIcon: {
    fontSize: 40,
  },
  changeMeatText: {
    fontSize: 14,
    color: Colors.gold,
    fontWeight: '600',
    marginTop: Spacing.xs,
  },

  // Cuts List
  cutsList: {
    marginTop: Spacing.md,
  },
  cutCardImproved: {
    backgroundColor: '#2A2A2A',
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#3A3A3A',
    ...Shadows.small,
  },
  cutMainInfo: {
    flex: 1,
  },
  cutNameImproved: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  cutNameEn: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: Spacing.xs,
  },
  cutDescImproved: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },
  cutArrow: {
    marginLeft: Spacing.md,
  },
  cutArrowText: {
    fontSize: 28,
    color: Colors.gold,
    fontWeight: '300',
  },
  // Selection Summary (Step 3+)
  selectionSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    padding: Spacing.md,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.xl,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  summaryIcon: {
    fontSize: 36,
    marginRight: Spacing.md,
  },
  summaryText: {
    flex: 1,
  },
  summaryMeat: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs / 2,
  },
  summaryCut: {
    fontSize: 13,
    color: Colors.gold,
    fontWeight: '600',
  },

  // Input Sections
  configSection: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  inputLarge: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    fontSize: 17,
    color: Colors.textPrimary,
  },
  hint: {
    fontSize: 13,
    color: '#B0B0B0',
    marginTop: Spacing.sm,
    lineHeight: 18,
  },

  // Doneness Grid (Step 4)
  donenessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.xs,
  },
  donenessBadge: {
    width: '48%',
    backgroundColor: '#2A2A2A',
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginHorizontal: '1%',
    marginBottom: Spacing.md,
    borderWidth: 2,
    borderColor: '#3A3A3A',
    minHeight: 120,
  },
  donenessBadgeSelected: {
    borderColor: Colors.gold,
    backgroundColor: '#2F2A20',
  },
  donenessBadgeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  donenessBadgeTitleSelected: {
    color: Colors.gold,
  },
  donenessBadgeTemp: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.gold,
    marginBottom: Spacing.sm,
  },
  donenessBadgeDesc: {
    fontSize: 12,
    color: '#B0B0B0',
    lineHeight: 16,
  },

  // Methods Grid (Step 5)
  methodsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.xs,
  },
  methodCard: {
    width: '48%',
    backgroundColor: '#2A2A2A',
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginHorizontal: '1%',
    marginBottom: Spacing.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3A3A3A',
    minHeight: 140,
    position: 'relative',
  },
  methodCardSelected: {
    borderColor: Colors.gold,
    backgroundColor: '#2F2A20',
  },
  methodIcon: {
    fontSize: 40,
    marginBottom: Spacing.md,
  },
  methodName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  methodNameSelected: {
    color: Colors.gold,
  },
  methodTemp: {
    fontSize: 13,
    color: '#B0B0B0',
    fontWeight: '600',
  },
  methodCheckmark: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodCheckmarkText: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '700',
  },
  // Slider
  slider: {
    width: '100%',
    height: 48,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.md,
  },
  sliderLabel: {
    fontSize: 12,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 16,
  },

  // Recommendations
  recommendationsCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginHorizontal: Spacing.xl,
    marginBottom: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: Colors.gold,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  recommendationsIcon: {
    fontSize: 32,
    marginRight: Spacing.md,
  },
  recommendationsContent: {
    flex: 1,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.gold,
    marginBottom: Spacing.xs,
  },
  recommendationsText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },

  // Calculate Button
  calculateContainer: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  calculateButtonLarge: {
    backgroundColor: Colors.gold,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  calculateButtonDisabled: {
    backgroundColor: '#3A3A3A',
    opacity: 0.5,
  },
  calculateButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  calculateButtonIcon: {
    fontSize: 32,
  },
  calculateButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  resetButtonSmall: {
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  resetButtonSmallText: {
    fontSize: 15,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxl,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: Spacing.md,
  },
  emptyStateText: {
    ...Typography.title2,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  emptyStateSubtext: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  bottomPadding: {
    height: Spacing.xl,
  },
});
