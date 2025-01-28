import { View, Text, StyleSheet, Image } from "react-native";
import LogoTce from "../components/LogoTce";
import { SafeAreaView } from "react-native-safe-area-context";
import ComponenteNoticias from "../components/InformacoesNoticia";

export default function TelaNoticiasInicial() {
    return (
        <SafeAreaView style={styles.container}>
            <LogoTce />
            <Image
                source={{
                    uri: 'https://portal-services.tce.ms.gov.br/portal-services/files/noticia/foto_arquivo/7855/xxvga_f262af4929281dbb5c691c8b762dab7f.png',
                }}
                resizeMode="cover"
                style={styles.image}
            />
            <View style= {styles.boxUltimasNoticias}>
                <Text style={styles.txtUltimasNoticias}>Últimas Notícias</Text>
                <View style={styles.blueBorder}></View>
            </View>
            <ComponenteNoticias />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        paddingHorizontal: 0,
    },
    image: {
        width: '86%',
        height: 186,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    txtUltimasNoticias: {
        marginLeft: 28,
        color: '#54A6CB',
        fontSize: 15,
        fontWeight: '300',
        marginBottom: 2,
    },
    blueBorder: {
        width: '86%',
        height: 1,
        backgroundColor: '#54A6CB',
        alignSelf: 'center',
        marginBottom: 10,
    },
    boxUltimasNoticias:{
       marginTop: 10
    }
});
