import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface UserButtonProps {
  onPress: () => void;
}

export default function UserButton({ onPress }: UserButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
        <FontAwesome name="user" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});