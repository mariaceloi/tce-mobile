import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DiarioCard from "../../components/diarioComponents/DiarioCard";
import BoxDiarioOficial from "../../components/diarioComponents/DiarioOficial";
import SVGBordaSuperior from "../../assets/SVGBordaSuperior.svg";

export default function DiarioScreen() {
  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SVGBordaSuperior/>
        {/* //implementar a logo do TCE sem letras */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Palavra-chave"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton} >
            <Text style={styles.searchButtonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>

        <BoxDiarioOficial />

        <DiarioCard
          date="10"
          month="NOV"
          year="2024"
          title="Comunicado nº 02-2023"
          description="Atualização do Cadastro dos Jurisdicionados e-CJUR para envio das Prestações de Contas."
          onPress={() => console.log("Ver detalhes")}
        />

        <DiarioCard
          date="05"
          month="OUT"
          year="2024"
          title="Comunicado nº 01-2023"
          description="Novas diretrizes para a auditoria de contas municipais."
          onPress={() => console.log("Ver detalhes")}
        />

        <DiarioCard
          date="31"
          month="OUT"
          year="2025"
          title="Comunicado nº 01-2025"
          description="Novas diretrizes para a auditoria de contas municipais."
          onPress={() => console.log("Ver detalhes")}
        />

        <DiarioCard
          date="15"
          month="OUT"
          year="2025"
          title="Comunicado nº 01-2024"
          description="Novas diretrizes para a auditoria de contas municipais."
          onPress={() => console.log("Ver detalhes")}
        />

        <DiarioCard
          date="15"
          month="OUT"
          year="2025"
          title="Comunicado nº 01-2024"
          description="Novas diretrizes para a auditoria de contas municipais."
          onPress={() => console.log("Ver detalhes")}
        />

        <DiarioCard
          date="15"
          month="OUT"
          year="2025"
          title="Comunicado nº 01-2024"
          description="Novas diretrizes para a auditoria de contas municipais."
          onPress={() => console.log("Ver detalhes")}
        />

      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565c0",
    marginBottom: 10,
  },
  subtitle: {
    color: "black",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fffff",
    padding: 0,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#E3E5E5",
  },
  searchButton: {
    backgroundColor: "#1565c0",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  fixedTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});