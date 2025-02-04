
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import {router} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

interface VoltarProps {
  onPress: () => void;
}

export default function Voltar({ onPress }: VoltarProps) {

  const goToHome = () =>{
    router.navigate('../noticias/noticiaInicial');
  }
  return (
    <TouchableOpacity onPress={goToHome} style={styles.button}>
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