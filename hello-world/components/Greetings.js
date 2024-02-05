import {View, Button, Text} from "react-native"
import {useState} from "react"

export default function Greeting({name}){
    const [isBeforeNoon, setIsBeforeNoon] = useState(true);
    const greeting =  isBeforeNoon ? "Good morning" : "Good afternoon";

    const switchTime = () => { setIsBeforeNoon(!isBeforeNoon) };
    return (
        <View>
        <Text>{greeting}, {name}</Text>
        <Button
        title = "Switch Time"
        onPress = {switchTime}
        />
        </View>
    )
}