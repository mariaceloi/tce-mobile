import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router'

export default function TabBar({ }: any) {

  // const navigation = useNavigation();

  // function navToHome() {
  //     navigation.navigate('Home');
  // }
  // function navToDiario() {
  //     navigation.navigate('Diario');
  // }
  // function navToNoticia() {
  //     navigation.navigate('Noticia' );
  // }

  function navToHome() {
    router.navigate('/');
  }
  function navToDiario() {
    router.navigate('../diario/diarioScreen');
  }
  function navToNoticia() {
    router.navigate('../noticias/noticiaInicial');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navToNoticia}>
        <AntDesign name="menu-fold" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navToHome}>
        <AntDesign name="home" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navToDiario}>
        <AntDesign name="calendar" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
