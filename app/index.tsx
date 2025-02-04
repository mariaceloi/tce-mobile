import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonCard from '../components/home/ButtonCard';
import TabBar from '../components/home/TabBar';
import { router } from 'expo-router';

export default function HomeScreen({ navigation }: any) {
  
  function navToDiario() {
    router.navigate('./diario/diarioScreen');
  }

  function navToNoticia() {
    router.navigate('./noticias/noticiaInicial');
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* <View style={styles.box}>
    
          <Image source={require('../assets/BordaSuperior.png')}
            resizeMode="cover"
          /> */}
        {/* </View> */}

        {/* <View style={styles.image}>
    
          <Image source={require('../assets/tceLogo.png')}
            resizeMode="cover"
          />
        </View> */}
        
        <View style={styles.buttonContainer}>
          <ButtonCard title="Diário Oficial" onPress={navToDiario}/>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonCard title="Noticias" onPress={navToNoticia}/>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonCard title="Ouvidoria" onPress={navToNoticia}/>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonCard title="Legislação" onPress={navToNoticia}/>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonCard title="Área do Advogado" onPress={navToNoticia}/>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonCard title="Corregedoria" onPress={navToNoticia}/>
        </View>

        <StatusBar style="auto" />

      </ScrollView>
      
      <View style={styles.fixedTabBar}>
        <TabBar />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, 
  },
  box: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    
    width: '100%',
    height: 51
},
  image: {
    width: 100,
    height: 100,
    marginVertical: 5,
    marginTop: 20,
    alignSelf: 'center', 
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center', 
  },
  fixedTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 5, 
  },
});
