import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Slot} from "expo-router"

export default function HomeScreen() {
  return (
    <>
    <Text style={{marginTop: 50}}>Das ist der Header</Text>
    <Slot />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
