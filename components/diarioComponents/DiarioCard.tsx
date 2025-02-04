import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface DiarioCardProps {
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  onPress: () => void;
}

export default function DiarioCard({ date, month, year, title, description, onPress }: DiarioCardProps) {
  return (
    <View style={styles.card}>

      <View style={styles.dateContainer}>
        <View style={styles.yearContainer}>
          <Text style={styles.yearText}>{year}</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.monthText}>{month}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity onPress={onPress} style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>VER DETALHES</Text>
        </TouchableOpacity>
      </View>

      <AntDesign name="download" size={24} color="black" style={styles.downloadIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dateContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: 70,
  },
  yearContainer: {
    backgroundColor: "#1B5497", 
    width: "100%",
    paddingVertical: 4,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  yearText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  dateText: {
    color: "#1B5497", 
    fontSize: 22,
    fontWeight: "bold",
  },
  monthText: {
    color: "#009245", 
    fontSize: 12,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
  detailsButton: {
    backgroundColor: "#1B5497",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  downloadIcon: {
    marginLeft: 10,
  },
});
