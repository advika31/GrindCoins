import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WalletProps {
  coins: number;
  xp: number;
  level: number;
}

const WalletOverview: React.FC<WalletProps> = ({ coins, xp, level }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wallet</Text>
      <Text style={styles.coins}>🪙 {coins} GrindCoins</Text>
      <Text style={styles.xpLevel}>💠 XP: {xp} | 🧠 Level: {level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e', // Dark background
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  coins: {
    color: '#fbbf24', // Yellow
    fontSize: 18,
  },
  xpLevel: {
    color: '#3b82f6', // Blue
  },
});

export default WalletOverview;
