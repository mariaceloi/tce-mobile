
import { View, Text, StyleSheet } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.chapeu}>Sustentabilidade</Text>
      <Text style={styles.title}>TCE-MS e MPMS celebram Acordo de Cooperação Técnica entre as instituições</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#295A9F',
    borderRadius: 5,
    alignItems: 'flex-start',
    width: 130,
    height: 27, 
    top: 40,
    left: 15,
  },
  chapeu: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    color: '#00000',
    marginTop: 10,
    height: 100,
    width: 370,
    textAlign: 'left',
    left: -5,
    fontWeight: 'bold',

},
});