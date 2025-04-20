import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Reward {
  name: string;
  cost: number;
}

const RewardPreview: React.FC<{ rewards: Reward[] }> = ({ rewards }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎁 Rewards Store</Text>
      <FlatList
        horizontal
        data={rewards}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <Text style={styles.rewardName}>{item.name}</Text>
            <Text style={styles.rewardCost}>{item.cost} GC</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818', // Dark background
    padding: 16,
    borderRadius: 16,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rewardItem: {
    backgroundColor: '#6b46c1', // Purple
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 8,
  },
  rewardName: {
    color: '#fff',
    fontWeight: '600',
  },
  rewardCost: {
    color: '#fbbf24', // Yellow
  },
});

export default RewardPreview;
