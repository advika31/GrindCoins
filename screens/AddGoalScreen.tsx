import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GoalScreen = ({ navigation }: { navigation: any }) => {
  const [daily, setDaily] = useState('');
  const [weekly, setWeekly] = useState('');
  const [monthly, setMonthly] = useState('');

  useEffect(() => {
    const loadGoals = async () => {
      const storedGoals = await AsyncStorage.getItem('userGoals');
      if (storedGoals) {
        const { daily, weekly, monthly } = JSON.parse(storedGoals);
        setDaily(daily);
        setWeekly(weekly);
        setMonthly(monthly);
      }
    };
    loadGoals();
  }, []);

  const saveGoals = async () => {
    await AsyncStorage.setItem('userGoals', JSON.stringify({ daily, weekly, monthly }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Your Goals</Text>
      <TextInput
        placeholder="Enter Daily Goal"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={daily}
        onChangeText={setDaily}
      />
      <TextInput
        placeholder="Enter Weekly Goal"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={weekly}
        onChangeText={setWeekly}
      />
      <TextInput
        placeholder="Enter Monthly Goal"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={monthly}
        onChangeText={setMonthly}
      />
      <TouchableOpacity style={styles.button} onPress={saveGoals}>
        <Text style={styles.buttonText}>Save Goals</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#53D1A2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default GoalScreen;
