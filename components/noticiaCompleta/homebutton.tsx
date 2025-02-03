
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


interface HomeButtonProps {
    onPress: () => void;
  }
  
  export default function HomeButton({ onPress }: HomeButtonProps) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.container}>
          <Entypo name="home" size={30} color="black" />
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