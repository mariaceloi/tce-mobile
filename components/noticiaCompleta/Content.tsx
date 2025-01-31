import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.content}>
      <Image 
        source={require('C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/assets/imagensNoticiaCompleta/logosemtitulohd(1).png')}

        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 130,
    height: 59,
    top: -80,
    position: 'absolute',
  },
});