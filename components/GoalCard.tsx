import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  goal: string;
  type: 'daily' | 'weekly' | 'monthly';
  completed: boolean;
  onToggleComplete: () => void;
};

const GoalCard = ({ goal, type, completed, onToggleComplete }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Your Goals</Text>
      {goal ? (
        <Text style={styles.goal}>
          📅 {type.charAt(0).toUpperCase() + type.slice(1)}: {goal}
        </Text>
      ) : null}

      <TouchableOpacity onPress={onToggleComplete}>
        <Text style={styles.buttonText}>{completed ? 'Completed' : 'Mark as Completed'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 2,
  },
  buttonText: {
    fontSize: 14,
    color: '#53D1A2',
  },
});

export default GoalCard;
