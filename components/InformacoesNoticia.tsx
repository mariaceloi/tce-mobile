import { View, Image, StyleSheet, Text } from "react-native";

function ComponenteNoticias() {
    return (
        <View style = {styles.container}>
            <Image source={{ uri: 'https://portal-services.tce.ms.gov.br/portal-services/files/noticia/0b00a54b009a5d47d9e4d120eb8944bf.jpg'}}
            resizeMode="cover"
            style = {styles.image}
             />

            <Text style={styles.chapeu}> Contas </Text>
            <Text style= {styles.titulo}>e-Sfinge completa um mês de lançamento e 95% dos municípios enviam dados com eficiência ao TCE-MS</Text>
            <Text style={styles.diasLançados}>Há 2d</Text>
            <Text></Text>
        </View>
    );
}


const styles = StyleSheet.create({
    image: {
        width: 88,
        height: 88,
        marginTop: 14,
        marginLeft: 9,
        borderRadius: 10
    },

    container: {
        backgroundColor: '#FFF',
        width: '86%',
        height: '23%',
        margin: 'auto',
        borderRadius: 10,
        flexDirection: 'row'
    },

    chapeu: {
        flex: 1,
        position: 'absolute',
        marginLeft: '31%',
        marginTop: '5%',
        backgroundColor: '#295A9F',
        color: '#FFF',
        fontSize: 12,
        fontWeight:'400',
        borderRadius: 5
    },

    titulo: {
        fontSize: 12,
        flex: 1,
        marginTop: '11%',
        marginLeft: '4%',
        marginRight: 3
    },

    diasLançados: {
        position: 'absolute',
        marginTop: '29.5%',
        marginLeft: '32.5%',
        color: '#3F75B4',
        fontSize: 10,
    }

    
});


export default ComponenteNoticias;