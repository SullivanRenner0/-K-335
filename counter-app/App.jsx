import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Counter from "./components/counter"
import AppButton from "./components/appButton"
import NumberInput from "./components/numberInput"




export default function App() {
  const [count, setCount] = useState(0)
  const [maxValue, setMaxValue] = useState(20)

  const changeMaxValue = (value) => {
    const isValid = /^-?\d+\.?\d*$/.test(maxValue.toString())
    if (isValid)
        setMaxValue(value)
    else
        setMaxValue(0)
  }
  const increase = () => {
    if (count + 1 <= maxValue)
        setCount(parseInt(count) + 1);
  }
  const decrease = () => {
    if (count - 1 >= 0)
        setCount(count - 1);
  }

  const [valid, setValid] = useState(true)

  useEffect(() => {
    const isValid = /^-?\d+\.?\d*$/.test(maxValue.toString())
    setValid(isValid)
    if (count > maxValue)
        setCount(maxValue)
  }, [maxValue])

  return (
    <View style={styles.container}>
       <Counter count={count} />
       <NumberInput
            label="Maximum"
            value={maxValue}
            onChangeText={changeMaxValue}
       />
       <AppButton onPress={increase}>Increase count</AppButton>
       <AppButton onPress={decrease}>Decrease count</AppButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
