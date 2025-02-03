import { ScrollView, StyleSheet, View, Alert, SafeAreaView, StatusBar } from 'react-native';
import Container from '../components/noticiaCompleta/Container';
import Titulo from '../components/noticiaCompleta/Titulo';
import TopBorder from '../components/noticiaCompleta/TopBorder';
import Content from '../components/noticiaCompleta/Content';
import BottomBorder from '../components/noticiaCompleta/BottomBorder';
import Corponotícia from '../components/noticiaCompleta/Corponotícia';
import Voltar from '../components/noticiaCompleta/voltar';


export default function BorderedScreen() {

  const handleMenuPress = () => {
    Alert.alert('Menu button pressed');
  };

  const handleHomePress = () => {
    Alert.alert('Home button pressed');
  };

  const handleUserPress = () => {
    Alert.alert('User button pressed');
  };

  return (
    <SafeAreaView style={styles.box}>
    <Container>
     <View style={styles.iconContainer}>
       <Voltar onPress={function (): void {
          throw new Error('Function not implemented.');
        } } />
     </View>
        <TopBorder />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Titulo />
        <Content />
        <Corponotícia
          imageSource={require('../assets/imagensNoticiaCompleta/imagennoticia.png')}
          text="O Tribunal de Contas do Estado de Mato Grosso do Sul (TCE-MS) deu mais um passo importante para a gestão pública sustentável ao aprovar o Plano de Logística Sustentável (PLS). A decisão, publicada na edição extra do Diário Oficial Eletrônico desta quarta-feira, 8 de janeiro de 2025, tem como objetivo alinhar as práticas administrativas do órgão aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030.A aprovação do Plano de Logística Sustentável, normatizada pela Instrução Normativa nº 43/2025, marca um esforço do TCE-MS para promover práticas que conciliem eficiência administrativa e sustentabilidade. Entre os objetivos do plano estão a racionalização de gastos e a implementação de procedimentos que respeitem critérios ambientais, sociais, culturais e econômicos."
        />
      </ScrollView>
        <BottomBorder
        onMenuPress={handleMenuPress} 
        onHomePress={handleHomePress} 
        onUserPress={handleUserPress}  />
    </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginBottom: StatusBar.currentHeight || 0,
    marginTop: StatusBar.currentHeight || 0,
  },
  iconContainer: {
    position: 'absolute',
    top: -20,
    left: -10,
    padding: 20,
    zIndex: 6,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 100, 
    paddingBottom: 10,
  },
});


