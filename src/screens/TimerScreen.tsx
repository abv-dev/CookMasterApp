import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';
import { RootTabParamList } from '../types/navigation';

type TimerScreenRouteProp = RouteProp<RootTabParamList, 'Timer'>;

export default function TimerScreen() {
  const route = useRoute<TimerScreenRouteProp>();
  const { t } = useTranslation();

  // Get duration and title from route params if provided
  const initialDuration = route.params?.duration ?? 0;
  const timerTitle = route.params?.title ?? null;

  const [seconds, setSeconds] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  // Update seconds when initialDuration changes
  useEffect(() => {
    if (initialDuration > 0) {
      setSeconds(initialDuration);
    }
  }, [initialDuration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s: number) => s - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('timer_title')}</Text>

        {timerTitle && (
          <Text style={styles.subtitle}>{timerTitle}</Text>
        )}

        <View style={styles.timerDisplay}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>

        <View style={styles.controls}>
          {!isRunning ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (seconds === 0) setSeconds(300); // 5 minutes par défaut
                setIsRunning(true);
              }}
            >
              <Text style={styles.buttonText}>▶️ {t('timer_start')}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.pauseButton]}
              onPress={() => setIsRunning(false)}
            >
              <Text style={styles.buttonText}>⏸️ {t('timer_pause')}</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={() => {
              setSeconds(0);
              setIsRunning(false);
            }}
          >
            <Text style={styles.buttonText}>🔄 {t('timer_reset')}</Text>
          </TouchableOpacity>
        </View>
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
    padding: Spacing.lg,
    justifyContent: 'center',
  },
  title: {
    ...Typography.title,
    color: Colors.gold,
    textAlign: 'center',
    marginBottom: Spacing.xxl,
  },
  subtitle: {
    ...Typography.bodyRegular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    marginTop: -Spacing.lg,
  },
  timerDisplay: {
    backgroundColor: Colors.surface,
    padding: Spacing.xxl,
    borderRadius: BorderRadius.xl,
    marginBottom: Spacing.xxl,
  },
  timerText: {
    fontSize: 72,
    fontWeight: '700',
    color: Colors.gold,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  },
  controls: {
    gap: Spacing.md,
  },
  button: {
    backgroundColor: Colors.gold,
    padding: Spacing.lg,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  pauseButton: {
    backgroundColor: Colors.warning,
  },
  resetButton: {
    backgroundColor: Colors.surface,
  },
  buttonText: {
    ...Typography.bodyBold,
    color: '#FFFFFF',
    fontSize: 18,
  },
});
