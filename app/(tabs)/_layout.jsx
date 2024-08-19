import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';
import { useEffect } from 'react';


const TabIcon = ({ icon, color, name, focused, isSearchTab }) => {
    return (
      <View 
        className={`items-center justify-center ${isSearchTab ? 'p-3 rounded-full bg-black' : 'gap-2'}`}
        style={isSearchTab ? {
          elevation: 5, // for Android
          shadowColor: '#000', // for iOS
          shadowOffset: { width: 0, height: 2 }, // for iOS
          shadowOpacity: 0.1, // for iOS
          shadowRadius: 4, // for iOS
        } : {}}
      >
        <Image 
          source={icon}
          resizeMode="contain"
          tintColor={isSearchTab ? 'white' : color}
          className={`${isSearchTab ? 'w-8 h-5' : 'w-6 h-6'}`} // Adjust icon size for the search tab
        />
        {!isSearchTab && (
          <Text style={{ fontSize: 10, fontFamily: focused ? 'Poppins-SemiBold' : 'Poppins-Regular' }}>
            {name}
          </Text>
        )}
      </View>
    );
  };
const TabsLayout = () => {
  
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#3E06DD',
                tabBarStyle: {
                    borderTopColor: '#ffff',
                    height: 70, // Adjust the height as needed
                    paddingBottom: 10, // Ensure the content inside the tab bar is centered properly
                    paddingTop: 10, // Adjust padding to ensure even spacing
                  },
            }}
        >
            <Tabs.Screen 
                name="trends"
                options={{
                    title: 'Trends',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.pie}
                            color={color}
                            name="Trends"
                            focused={focused}
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
                            name="Bookmark"
                            focused={focused}
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
                focused={focused}
                isSearchTab={true} // Pass isSearchTab prop to apply special styles
              />
            ),
            
          }}
        />
            
             <Tabs.Screen 
                name="message"
                options={{
                    title: 'Message',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.message}
                            color={color}
                            name="Message"
                            focused={focused}
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
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>

    </>
  )
}

export default TabsLayout