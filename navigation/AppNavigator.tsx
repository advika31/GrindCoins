// navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
// import ProofScreen from '../screens/ProofScreen';
import RewardsScreen from '../screens/RewardsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Stack.Screen name="Proof" component={ProofScreen} /> */}
      <Stack.Screen name="Rewards" component={RewardsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
