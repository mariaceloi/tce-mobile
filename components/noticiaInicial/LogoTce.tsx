import { View, Image, StyleSheet } from "react-native";


function LogoTce(){
    return(
        
        <View style={styles.box}>

            <Image source={require('C:/Users/thiagoalves/Desktop/app_principal_TCE/tce-mobile/assets/logoTce.png')}
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
        
        width: '100%',
        height: 51
    },
})

export default LogoTce;