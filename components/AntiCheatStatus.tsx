import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AntiCheatStatusProps {
  faceMatch: boolean;
  poseVerified: boolean;
  timestampOk: boolean;
}

const AntiCheatStatus: React.FC<AntiCheatStatusProps> = ({
  faceMatch,
  poseVerified,
  timestampOk,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔒 Anti-Cheat Status</Text>
      <Text style={[styles.status, faceMatch ? styles.valid : styles.invalid]}>
        Face Match: {faceMatch ? '✅' : '❌'}
      </Text>
      <Text style={[styles.status, poseVerified ? styles.valid : styles.invalid]}>
        Pose Verified: {poseVerified ? '✅' : '❌'}
      </Text>
      <Text style={[styles.status, timestampOk ? styles.valid : styles.invalid]}>
        Timestamp Valid: {timestampOk ? '✅' : '❌'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9b1d20', // Red background
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 8,
    fontSize: 16,
  },
  valid: {
    color: '#22c55e', // Green
  },
  invalid: {
    color: '#ef4444', // Red
  },
});

export default AntiCheatStatus;
