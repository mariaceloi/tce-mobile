import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";


interface ButtonCardProps {
    title: string;
    onPress: () => void;
}

export default function ButtonCard({ title, onPress }: ButtonCardProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.content}>
                <Entypo name="newsletter" size={24} color="#0057b8" />
                <Text style={styles.text}>{title}</Text>
                <Entypo name="chevron-right" size={20} color="#0057b8" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 395,
        height: 80,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
        marginLeft: 10,
    },
});