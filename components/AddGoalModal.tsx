import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (goal: string, type: 'daily' | 'weekly' | 'monthly') => void;
};

const AddGoalModal = ({ visible, onClose, onAdd }: Props) => {
  const [goal, setGoal] = useState('');
  const [type, setType] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <TextInput placeholder="Enter Goal" onChangeText={setGoal} value={goal} style={styles.input} />
        <Picker selectedValue={type} onValueChange={(val) => setType(val)}>
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
        </Picker>
        <Button title="Add Goal" onPress={() => { onAdd(goal, type); onClose(); setGoal(''); }} />
        <Button title="Cancel" color="red" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default AddGoalModal;
