import { View, FlatList } from "react-native";
import ComponenteNoticias from "../../components/noticiaInicial/InformacoesNoticia";
import { ListaNoticias } from "../../../testeData";
import { NoticiaInfos } from "../../../@types/noticiaType";



function CardNoticia() {
    return (

        <View>
            <FlatList nestedScrollEnabled
                data={ListaNoticias}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: { item: NoticiaInfos }) => <ComponenteNoticias noticia={item} />}
            />
        </View>

    );
}



export default CardNoticia;