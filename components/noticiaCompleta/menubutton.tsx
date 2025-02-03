import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


interface MenuButtonProps {
  onPress: () => void;
}


export default function MenuButton({ onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
        <SimpleLineIcons name="menu" size={30} color="black" />
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