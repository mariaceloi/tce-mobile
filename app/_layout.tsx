import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="noticias/noticiaInical"/>
            <Stack.Screen name="noticias/noticiaCompleta"/>
            <Stack.Screen name="diario/diarioScreen"/>
        </Stack>
    );
}