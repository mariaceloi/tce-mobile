import { View, FlatList } from "react-native";
import ComponenteNoticias from "../components/InformacoesNoticia";
import { ListaNoticias } from "../testeData";
import { NoticiaInfos } from "../types/noticiaType";


function CardNoticia() {
    return (

            <FlatList 
                data={ListaNoticias}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: { item: NoticiaInfos }) => <ComponenteNoticias noticia={item} />}
            />

    );
}



export default CardNoticia;