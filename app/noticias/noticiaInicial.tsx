import { View,StyleSheet, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemDestaque from "../../components/noticiaInicial/imagemDestaqueNoticia";
import CardNoticia from "../../components/noticiaInicial/cardsNoticia";
import BoxUltimasNoticias from "../../components/noticiaInicial/ultimasNoticias";
import SVGBordaSuperior from "../../assets/SVGBordaSuperior.svg";
import SVGLogoPequena from "../../assets/SVGLogoPequena.svg.svg";


export default function TelaNoticiasInicial() {
    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>

            <SVGBordaSuperior />
            <SVGLogoPequena />
            
        </View>

        <SafeAreaView style={styles.bodyContainer}>

            <ImagemDestaque />
            <BoxUltimasNoticias />
            <CardNoticia />

        </SafeAreaView>
    </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
      },
    bodyContainer: {
        backgroundColor: '#FAFAFA',
        flex: 1,
        paddingHorizontal: 0,
    },
    logoContainer: {
        width: "100%",  
        alignItems: "center",
        justifyContent: "center", 
        flexDirection: "column", 
        marginBottom: 5, 
      },
});