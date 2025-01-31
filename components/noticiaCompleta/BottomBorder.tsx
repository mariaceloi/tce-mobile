import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeButton from 'C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/components/noticiaCompleta/homebutton';
import MenuButton from 'C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/components/noticiaCompleta/menubutton';
import UserButton from 'C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/components/noticiaCompleta/userbutton';

interface BottomBorderProps {
  onMenuPress: () => void;
  onHomePress: () => void;
  onUserPress: () => void;
}


export default function BottomBorder({ onMenuPress, onHomePress, onUserPress }: BottomBorderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bottomBorder} />
      <View style={styles.buttonContainer}>
        <MenuButton onPress={onMenuPress} />
        <HomeButton onPress={onMenuPress} />
        <UserButton onPress={onMenuPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    position: 'absolute',
    bottom: -40,
    zIndex: 1,
  },
  bottomBorder: {
    height: 100,
    width: '100%',
    backgroundColor: '#ffffffff',
    borderTopWidth: 2,
    borderTopColor: '#295A9F',
    bottom: -40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 0, 
  },
});