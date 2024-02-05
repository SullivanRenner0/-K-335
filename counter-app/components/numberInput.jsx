import { View, Text, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback  } from "react-native"

export default function NumberInput({ label, value, onChangeText }) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Text>{label}</Text>
                <TextInput
                    inputMode="numeric"
                    style={styles.input}
                    value={parseInt(value).toString()}
                    onChangeText={onChangeText}
                ></TextInput>
            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        width: 240,
        marginBottom: 15
    },
    input: {
        height: 48,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 24,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
})