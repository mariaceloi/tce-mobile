import { View, Image, StyleSheet } from "react-native";


function LogoTce(){
    return(
        
        <View style={styles.box}>
            <View style = {styles.blue}></View>
            <View style = {styles.green}></View>

            <Image source={require('../assets/logoTce.png')}
            resizeMode="cover"
            />


        </View>
    );
}


const styles = StyleSheet.create({
   

    box: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    blue:{
        backgroundColor: '#295A9F',
        width: '100%',
        height: 45
    }, 

    green: {
        backgroundColor: '#059D54',
        width: '100%',
        height: 15,
        marginBottom: 2
    }
})

export default LogoTce;