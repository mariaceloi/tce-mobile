import { View, StyleSheet,Text } from "react-native";


function BoxUltimasNoticias() {
    return (

        <View style={styles.boxUltimasNoticias}>
            <Text style={styles.txtUltimasNoticias}>Últimas Notícias</Text>
            <View style={styles.blueBorder}></View>
        </View>
    );
}


const styles = StyleSheet.create({


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
    boxUltimasNoticias: {
        marginVertical: 10,
    },
})

export default BoxUltimasNoticias;