import { View, Image, StyleSheet } from "react-native";


export default function Topo(){
    return(
        <View style={styles.topo}>
            {/* <Image source={require('../assets/BorderTopLogo.png')}
                resizeMode="cover"
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        
    },
})