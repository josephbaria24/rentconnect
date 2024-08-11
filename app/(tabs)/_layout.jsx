import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
                name="trends"
                options={{
                    title: 'Trends',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="trends"
                            focus={focused}
                        />
                    )
                }}
            />
             <Tabs.Screen 
                name="bookmarks"
                options={{
                    title: 'Bookmarks',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmarks"
                            focus={focused}
                        />
                    )
                }}
            />
             <Tabs.Screen 
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.search}
                            color={color}
                            name="Search"
                            focus={focused}
                        />
                    )
                }}
            />
            
             <Tabs.Screen 
                name="message"
                options={{
                    title: 'Message',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.envelope}
                            color={color}
                            name="Message"
                            focus={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focus={focused}
                        />
                    )
                }}
            />
        </Tabs>

    </>
  )
}

export default TabsLayout