// import React from 'react';
// import { View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';

// export default function Voltar() {
//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Ionicons name="arrow-back" size={30} color="#ffffff" />
//     </View>
//   );
// }


import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface VoltarProps {
  onPress: () => void;
}

export default function Voltar({ onPress }: VoltarProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
        <Ionicons name="arrow-back" size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginLeft: -10,
    marginTop: -15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});