import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HabitCardProps {
  habit: string;
  coins: number;
  isCompleted: boolean;
  time: string;
  onProofSubmit: () => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, coins, isCompleted, time, onProofSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.habitName}>{habit}</Text>
      <Text style={styles.coins}>+{coins} GC</Text>
      <Text style={styles.time}>🕒 {time}</Text>
      <TouchableOpacity
        onPress={onProofSubmit}
        disabled={isCompleted}
        style={[styles.button, isCompleted ? styles.completedButton : styles.incompleteButton]}
      >
        <Text style={styles.buttonText}>{isCompleted ? 'Completed' : 'Submit Proof'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818', // Dark background
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  habitName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  coins: {
    color: '#22c55e', // Green
    fontSize: 14,
  },
  button: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  completedButton: {
    backgroundColor: '#4b5563', // Gray
  },
  incompleteButton: {
    backgroundColor: '#6b46c1', // Purple
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  time: {
    fontSize: 14,
    color: '#999',
    marginVertical: 4,
  },
  
});

export default HabitCard;
