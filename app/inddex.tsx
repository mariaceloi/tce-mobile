import { View, Text, StyleSheet, ScrollView, } from "react-native";
import LogoTce from "../components/noticiaInicial/LogoTce";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemDestaque from "../components/noticiaInicial/imagemDestaqueNoticia";
import CardNoticia from "../components/noticiaInicial/cardsNoticia";
import BoxUltimasNoticias from "../components/noticiaInicial/ultimasNoticias";

export default function TelaNoticiasInicial() {
    return (
        <SafeAreaView style={styles.container}>
 
            <ScrollView>
                <LogoTce />
                <ImagemDestaque />
                <BoxUltimasNoticias />
                <CardNoticia />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        paddingHorizontal: 0,
    },
});