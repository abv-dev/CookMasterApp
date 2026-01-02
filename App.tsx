import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import './src/i18n/i18n.config';
import AppNavigator from './src/navigation/AppNavigator';
import { Colors, Typography } from './src/constants/theme';
import { AuthProvider } from './src/context/AuthContext';
import { HistoryProvider } from './src/context/HistoryContext';

function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.gold} />
      <Text style={styles.loadingText}>CookMaster</Text>
    </View>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AuthProvider>
        <HistoryProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </HistoryProvider>
      </AuthProvider>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.title,
    color: Colors.gold,
    marginTop: 16,
  },
});
