import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GamificationProps {
  streak: number;
  badges: string[];
  weeklyChallenge: string;
}

const GamificationCard: React.FC<GamificationProps> = ({ streak, badges, weeklyChallenge }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏆 Gamification</Text>
      <Text style={styles.streak}>🔥 Streak: {streak} days</Text>
      <Text style={styles.challenge}>🎯 Challenge: {weeklyChallenge}</Text>
      <Text style={styles.badges}>🏅 Badges: {badges.join(', ') || 'None Yet'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818', // Dark background
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  streak: {
    color: '#22c55e', // Green
  },
  challenge: {
    color: '#fbbf24', // Yellow
    marginTop: 8,
  },
  badges: {
    color: '#fff',
    marginTop: 12,
  },
});

export default GamificationCard;
