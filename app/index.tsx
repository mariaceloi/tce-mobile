import { View, Text, StyleSheet, ScrollView, } from "react-native";
import LogoTce from "../components/LogoTce";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemDestaque from "../components/imagemDestaqueNoticia";
import CardNoticia from "../components/cardsNoticia";
import BoxUltimasNoticias from "../components/ultimasNoticias";
import SVGLogoTce from "../assets/SVGLogoTce.svg";
import SVGCabecalho from "../assets/SVGCabecalho.svg";

export default function TelaNoticiasInicial() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <SVGCabecalho width={800} height={50} />
            </View>
            <ScrollView>

                <View style={styles.logo}>
                    <SVGLogoTce width={110} height={75} />
                </View>

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
    logo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cabecalho: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
    }
});