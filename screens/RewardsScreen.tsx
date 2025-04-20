import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type RewardsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Rewards'>;
  route: { params: { userCoins: number; rewards: { name: string; cost: number }[] } };
};

export default function RewardsScreen({ navigation, route }: RewardsScreenProps) {
  const { userCoins, rewards } = route.params;

  const handleClaimReward = (rewardName: string, cost: number) => {
    if (userCoins >= cost) {
      // Logic for claiming the reward (e.g., update the user's GrindCoins)
      console.log(`Reward claimed: ${rewardName}`);
    } else {
      console.log('Not enough GrindCoins');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reward Store</Text>
      <Text style={styles.coins}>Your GrindCoins: {userCoins}</Text>

      <FlatList
        data={rewards}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <Text style={styles.rewardName}>{item.name}</Text>
            <Text style={styles.rewardCost}>{item.cost} GC</Text>
            <TouchableOpacity
              style={styles.claimButton}
              onPress={() => handleClaimReward(item.name, item.cost)}
              disabled={userCoins < item.cost}
            >
              <Text style={styles.buttonText}>
                {userCoins >= item.cost ? 'Claim Reward' : 'Not Enough Coins'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0B0F1A',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  coins: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  rewardItem: {
    backgroundColor: '#1E242F',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  rewardName: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  rewardCost: {
    color: '#53D1A2',
    fontSize: 16,
    marginBottom: 10,
  },
  claimButton: {
    backgroundColor: '#53D1A2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#E75D55',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
});
