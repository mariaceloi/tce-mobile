import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { NoticiaInfos } from "../../@types/noticiaType";



type Props = {
    noticia: NoticiaInfos;
};

function ComponenteNoticias(props: Props) {

    const goToNews = () => {
        router.navigate('../noticias/noticiaCompleta');
    }

    return (
        <Pressable style={styles.container} onPress={goToNews}>
            <Image
                source={{
                    uri: props.noticia.image,
                }}
                resizeMode="cover"
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.tag}>{props.noticia.tag}</Text>
                <Text style={styles.title}>
                    {props.noticia.title}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.daysAgo}>{props.noticia.daysAgo}</Text>
                    <Text style={styles.releaseDate}>{props.noticia.releaseDate}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '86%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 12,
        marginVertical: 7,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        marginTop: 3,
        width: 97,
        height: 107,
        borderRadius: 10,
    },
    content: {
        flex: 1,
        marginLeft: 18,
        justifyContent: 'space-between',
    },
    tag: {
        marginTop: 7,
        backgroundColor: '#295A9F',
        color: '#FFF',
        fontSize: 12,
        fontWeight: '500',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    title: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1,
        top: 5.5,
        marginLeft: 4
    },
    daysAgo: {
        color: '#3F75B4',
        fontSize: 11,
    },
    releaseDate: {
        color: '#666',
        fontSize: 12,
    },
});

export default ComponenteNoticias;
