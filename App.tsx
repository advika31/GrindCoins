import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProofScreen from './screens/ProofScreen';
import RewardsScreen from './screens/RewardsScreen';
import { RootStackParamList } from './navigation/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Proof" component={ProofScreen} />
        <Stack.Screen
          name="Rewards"
          component={RewardsScreen}
          initialParams={{
            userCoins: 100, // Pass the user's current coins here
            rewards: [
              { name: 'Reward 1', cost: 50 },
              { name: 'Reward 2', cost: 100 },
              { name: 'Reward 3', cost: 200 }
            ], // Pass available rewards here
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
