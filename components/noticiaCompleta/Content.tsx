
import { View, Image, StyleSheet } from 'react-native';
import SVGLogoTce from '../../assets/SVGLogoTce.svg';
export default function Content() {
  return (
    <View style={styles.content}>
      <SVGLogoTce width={180} height={123} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -105,
  },
});