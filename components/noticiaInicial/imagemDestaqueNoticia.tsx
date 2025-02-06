import { View, ImageBackground, StyleSheet, Text } from "react-native";

function ImagemDestaque() {
    return (
        <View style={styles.container}>
            <View style={styles.shadowContainer}>
                <ImageBackground
                    source={{
                        uri: 'https://portal-services.tce.ms.gov.br/portal-services/files/noticia/foto_arquivo/7857/xxvga_0c862f8e5ed3227a80494b66e7028a32.jpg',
                    }}
                    imageStyle={{ borderRadius: 6 }}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.text}>Idams homenageia presidente do TCE-MS</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowContainer: {
        width: '86%',
        height: 188,
        alignSelf: 'center',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4, 
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 6,
        justifyContent: 'flex-end', 
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto com 50% de opacidade
        padding: 10,
        borderRadius: 6, // Garante que o fundo do texto seja arredondado
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'semibold',
    },
});

export default ImagemDestaque;
