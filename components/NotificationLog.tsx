import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Email {
  subject: string;
  body: string;
  timestamp: string;
}

const NotificationLog: React.FC<{ mails: Email[] }> = ({ mails }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📬 Email Log</Text>
      <FlatList
        data={mails}
        keyExtractor={(item) => item.timestamp}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e', // Dark background
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  header: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    marginBottom: 8,
  },
  subject: {
    color: '#fbbf24', // Yellow color
  },
  body: {
    color: '#fff',
    fontSize: 14,
  },
  timestamp: {
    color: '#6b7280', // Gray color
    fontSize: 12,
  },
});

export default NotificationLog;
