import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import TimerScreen from '../screens/TimerScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultView from '../screens/ResultView';
import MeatDetailView from '../screens/MeatDetailView';
import HistoryDetailView from '../screens/HistoryDetailView';
import { Colors, Typography } from '../constants/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for Explorer flow (Explorer → MeatDetail → Calculator)
function ExplorerStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.gold,
        headerTitleStyle: {
          ...Typography.title2,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name="ExplorerMain"
        component={ExplorerScreen}
        options={{ title: t('tab_explorer') }}
      />
      <Stack.Screen
        name="MeatDetail"
        component={MeatDetailView}
        options={{ title: t('meat_detail') || 'Détails' }}
      />
    </Stack.Navigator>
  );
}

// Stack navigator for Calculator flow (Calculator → Result)
function CalculatorStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.gold,
        headerTitleStyle: {
          ...Typography.title2,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name="CalculatorMain"
        component={CalculatorScreen}
        options={{ title: t('tab_calculator') }}
      />
      <Stack.Screen
        name="Result"
        component={ResultView}
        options={{ title: t('result_title') || 'Résultat' }}
      />
    </Stack.Navigator>
  );
}

// Stack navigator for History flow (History → HistoryDetail → Timer/Calculator)
function HistoryStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.gold,
        headerTitleStyle: {
          ...Typography.title2,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name="HistoryMain"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryDetailView"
        component={HistoryDetailView}
        options={{ title: t('history_detail') || 'Détails' }}
      />
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{ title: t('tab_timer') || 'Timer' }}
      />
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{ title: t('tab_calculator') || 'Calculateur' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.gold,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          ...Typography.small,
          fontWeight: '600',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('tab_home'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>🏠</span>,
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={ExplorerStack}
        options={{
          title: t('tab_explorer'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>📖</span>,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorStack}
        options={{
          title: t('tab_calculator'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>🔥</span>,
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          title: t('tab_timer'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>⏱️</span>,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: Colors.border,
            borderBottomWidth: 1,
          },
          headerTintColor: Colors.gold,
          headerTitleStyle: {
            ...Typography.title2,
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          title: t('tab_history'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>🕐</span>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t('tab_profile'),
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>👤</span>,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: Colors.border,
            borderBottomWidth: 1,
          },
          headerTintColor: Colors.gold,
          headerTitleStyle: {
            ...Typography.title2,
          },
        }}
      />
    </Tab.Navigator>
  );
}
