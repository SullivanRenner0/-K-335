import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from "./components/Greetings";
import {useState} from "react"

export default function App() {
    const openAlert = () => {
        alert("Alert");
    }
  return (
    <View style={styles.container}>
      <Greeting name="Sullivan"/>
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
