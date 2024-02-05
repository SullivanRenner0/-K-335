import {Text, TouchableOpacity, StyleSheet } from "react-native"

export default function AppButton({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 240,
        elevation: 8,
        backgroundColor: "#009ee3",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
})