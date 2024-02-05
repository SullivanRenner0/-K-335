import { Text, View, StyleSheet  } from "react-native"

export default function Counter({count}) {

    return (
        <View>
            <Text style={styles.text}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
    fontSize: 72,
    fontWeight: "bold",
    },
})