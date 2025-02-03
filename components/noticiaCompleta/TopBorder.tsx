import { Image, StyleSheet, View } from 'react-native';

export default function TopBorder() {
  return (
    <View style={styles.container}>
    <Image
      source={require('C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/assets/imagensNoticiaCompleta/topborder_hd-.png')}
      style={styles.topBorder}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    position: 'absolute',
    top: -60,
    zIndex: 5,
  },
  topBorder: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});