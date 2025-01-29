import { View, Image, StyleSheet } from "react-native";


function ImagemDestaque() {
    return (

        <Image
            source={{
                uri: 'https://portal-services.tce.ms.gov.br/portal-services/files/noticia/foto_arquivo/7857/xxvga_0c862f8e5ed3227a80494b66e7028a32.jpg',
            }}
            resizeMode="cover"
            style={styles.image}

        />
    );
}


const styles = StyleSheet.create({


    image: {
        width: '86%',
        height: 186,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        //justifyContent: 'flex-end'
    },
})

export default ImagemDestaque;