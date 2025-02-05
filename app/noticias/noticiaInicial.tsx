import { View,StyleSheet, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemDestaque from "../../components/noticiaInicial/imagemDestaqueNoticia";
import CardNoticia from "../../components/noticiaInicial/cardsNoticia";
import BoxUltimasNoticias from "../../components/noticiaInicial/ultimasNoticias";
import SVGLogoTce from "../../assets/SVGLogoTce.svg";

export default function TelaNoticiasInicial() {
    return (
        <SafeAreaView style={styles.container}>
            
                <View style={styles.logo}>
                    <SVGLogoTce width={110} height={75} />
                </View>
                <ImagemDestaque />
                <BoxUltimasNoticias />
                <CardNoticia />

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