import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"
import BottomNavIcon from "../../components/BottomNavIcon"

export default function TabsLayout() {
    const tabs = [
        {
            name: "explore/index",
            title: "Explore",
            icon: "compass-outline",
            iconFocused: "compass",
        },
        {
            name: "trails/index",
            title: "Trails",
            icon: "trail-sign-outline",
            iconFocused: "trail-sign",
        },
        {
            name: "favorites/index",
            title: "Favorites",
            icon: "heart-outline",
            iconFocused: "heart",
        },
        {
            name: "profile/index",
            title: "Profile",
            icon: "person-circle-outline",
            iconFocused: "person-circle",
        }
    ]
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#008300",
                tabBarInactiveTintColor: "#008300"
            }}
        >
            {tabs.map(({ name, title, icon, iconFocused }) => {
                return (
                    <Tabs.Screen
                        key={name}
                        name={name}
                        options={{
                            title,
                            tabBarIcon: ({ color, focused }) => (
                                focused ? <BottomNavIcon name={iconFocused} color={color} /> : <BottomNavIcon name={icon} color={color} />
                            ),
                        }}
                    />
                )
            })}
        </Tabs>
    )
}