import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';
import WalletOverview from '../components/WalletOverview';
import HabitCard from '../components/HabitCard';
import RewardPreview from '../components/RewardPreview';
import GamificationCard from '../components/GamificationCard';
import AntiCheatStatus from '../components/AntiCheatStatus';
import NotificationLog from '../components/NotificationLog';
import GoalCard from '../components/GoalCard';

import AsyncStorage from '@react-native-async-storage/async-storage';

type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

type GoalType = 'daily' | 'weekly' | 'monthly';

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const habits = [
    { habit: 'Meditation', coins: 15, isCompleted: false },
    { habit: 'Gym', coins: 30, isCompleted: true },
  ];

  const [goals, setGoals] = useState<{ [key in GoalType]: string }>({
    daily: '',
    weekly: '',
    monthly: '',
  });
    const goalTypes: GoalType[] = ['daily', 'weekly', 'monthly'];

  useEffect(() => {
    const loadGoals = async () => {
      const storedGoals = await AsyncStorage.getItem('userGoals');
      if (storedGoals) setGoals(JSON.parse(storedGoals));
    };
    loadGoals();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.heading}>GrindCoins</Text>
      <Text style={styles.subheading}>Track Your Daily Hustle</Text>

      <WalletOverview coins={150} xp={220} level={3} />

      {/* {habits.map((h, idx) => (
        <HabitCard
          key={idx}
          habit={h.habit}
          coins={h.coins}
          isCompleted={h.isCompleted}
          onProofSubmit={() => navigation.navigate('Proof')}
        />
      ))} */}

      {goalTypes.map((type) => (
        <GoalCard
          key={type}
          goal={goals[type]}
          type={type}
          completed={false}
          onToggleComplete={() => {}}
        />
      ))}

      <TouchableOpacity style={styles.goalButton} onPress={() => navigation.navigate('Goal')}>
        <Text style={styles.goalButtonText}>Edit Goals</Text>
      </TouchableOpacity>

      <RewardPreview
        rewards={[
          { name: 'Netflix Hour', cost: 100 },
          { name: 'Sweet Treat', cost: 150 },
          { name: 'Gaming Break', cost: 75 },
        ]}
      />

      <GamificationCard streak={5} badges={['7-day Streak']} weeklyChallenge="3x Gym this week" />
      <AntiCheatStatus faceMatch={true} poseVerified={true} timestampOk={true} />

      <NotificationLog
        mails={[
          {
            subject: '🌅 Morning Boost',
            body: 'Your grind today: Gym + Meditation',
            timestamp: '2025-04-20T07:00',
          },
        ]}
      />

      <View style={styles.actions}>
        {/* <TouchableOpacity style={[styles.button, { backgroundColor: '#53D1A2' }]} onPress={() => navigation.navigate('Proof')}>
          <Text style={styles.buttonText}>Submit Proof</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#7067F0' }]}
          onPress={() =>
            navigation.navigate('Rewards', {
              userCoins: 150,
              rewards: [
                { name: 'Netflix Hour', cost: 100 },
                { name: 'Sweet Treat', cost: 150 },
                { name: 'Gaming Break', cost: 75 },
              ],
            })
          }
        >
          <Text style={styles.buttonText}>Rewards</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#9DA5B4',
    textAlign: 'center',
    marginBottom: 30,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  goalButton: {
    marginVertical: 10,
    backgroundColor: '#F0A500',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  goalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DashboardScreen;
