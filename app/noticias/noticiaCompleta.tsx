import { ScrollView, StyleSheet, Dimensions, View, SafeAreaView, StatusBar } from 'react-native';
import Container from '../../components/noticiaCompleta/Container';
import Titulo from '../../components/noticiaCompleta/Titulo';
import Corponotícia from '../../components/noticiaCompleta/Corponotícia';
import SVGBordaSuperior from "../../assets/SVGBordaSuperior.svg";
import SVGLogoPequena from "../../assets/SVGLogoPequena.svg";


export default function BorderedScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <SVGBordaSuperior />
        <SVGLogoPequena />
      </View>

      <SafeAreaView style={styles.box}>
        <Container>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Titulo />
            <Corponotícia
              imageSource={require('../../assets/imagensNoticiaCompleta/imagennoticia.png')}
              text="O Tribunal de Contas do Estado de Mato Grosso do Sul (TCE-MS) deu mais um passo importante para a gestão pública sustentável ao aprovar o Plano de Logística Sustentável (PLS). A decisão, publicada na edição extra do Diário Oficial Eletrônico desta quarta-feira, 8 de janeiro de 2025, tem como objetivo alinhar as práticas administrativas do órgão aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030.A aprovação do Plano de Logística Sustentável, normatizada pela Instrução Normativa nº 43/2025, marca um esforço do TCE-MS para promover práticas que conciliem eficiência administrativa e sustentabilidade. Entre os objetivos do plano estão a racionalização de gastos e a implementação de procedimentos que respeitem critérios ambientais, sociais, culturais e econômicos."
            />
          </ScrollView>
        </Container>
      </SafeAreaView>   
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
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
  logoContainer: {
    width: "100%",  
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column", 
    marginBottom: 5, 
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingBottom: 10,
  },
});


