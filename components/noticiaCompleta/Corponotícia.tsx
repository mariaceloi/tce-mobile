
import { View, Text, Image, StyleSheet } from 'react-native';

type CorponotíciaProps = {
  imageSource: any;
  text: string;
};

export default function Corponotícia({ imageSource, text }: CorponotíciaProps) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 130,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  image: {
    width: 370,
    height: 200,
    borderRadius: 5,
    marginBottom: 140,
  },
  text: {
    width: 370,
    fontSize: 20,
    color: '#333',
    textAlign: 'left',
    marginBottom: 10,
    top: -130,
  },
});