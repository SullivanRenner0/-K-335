import Ionicons from "@expo/vector-icons/Ionicons"

export default function BottomNavIcon({ name, color }) {
    return (
        <Ionicons
            size={28}
            style={{ marginBottom: -3 }}
            name={name}
            color={color}
        />
    )
}