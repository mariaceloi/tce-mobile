import { View, Text, StyleSheet, Image } from "react-native";
import LogoTce from "../components/LogoTce";
import { SafeAreaView } from "react-native-safe-area-context";
import ComponenteNoticias from "../components/InformacoesNoticia";



export default function telaNoticiaslInicial() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <LogoTce />


                <Image
                    source={{ uri: 'https://portal-services.tce.ms.gov.br/portal-services/files/noticia/foto_arquivo/7855/xxvga_f262af4929281dbb5c691c8b762dab7f.png' }}
                    resizeMode="cover"
                    style={styles.image} />


                <Text style={styles.txtUltimasNoticias}>Últimas Notícias</Text>
                <View style={styles.bordinha}></View>
                <ComponenteNoticias/>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },

    image: {
        width: '86%',
        height: 186,
        margin: 'auto',
        marginTop: 10,
        borderRadius: 10,
    },

    txtUltimasNoticias: {
        marginLeft: 32,
        //marginTop: ,
        color: '#54A6CB',
        fontSize: 15,
        fontWeight: '300',
        marginBottom: 2
    },

    bordinha: {
        width: '86%',
        height: 0.8,
        backgroundColor: '#54A6CB',
        marginLeft: 29,
        borderRadius: 1
    }
})