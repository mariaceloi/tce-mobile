import { View, Text, StyleSheet,} from "react-native";
import LogoTce from "../components/LogoTce";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagemDestaque from "../components/imagemDestaqueNoticia";
import CardNoticia from "../components/cardsNoticia";
import BoxUltimasNoticias from "../components/ultimasNoticias";

export default function TelaNoticiasInicial() {
    return (
        <SafeAreaView style={styles.container}>
            <LogoTce />
            <ImagemDestaque />
            <BoxUltimasNoticias />
            <CardNoticia/>
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