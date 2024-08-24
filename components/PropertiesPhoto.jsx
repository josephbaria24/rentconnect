import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants';

const PropertiesPhoto = ({property: { description, photo, users: { username, avatar }}}) => {
  return (
    <View className="flex-col items-center px-4 mb-8 mt-10">
        <View className="flex-row gap-3 items-start">
            <View className="justify-center items-center flex-row flex-1">
                <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center
                items-center p-0.5">
                    <Image 
                    source={avatar ? { uri: avatar } : require('../assets/images/profile.png')}
                    className="w-full h-full rounded-lg"
                    resizeMode='cover' 
                    />

                </View>
                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text className="text-black font-psemibold text-sm">
                        {description}
                    </Text>
                    <Text className="text-gray-600 font-pregular text-xs" numberOfLines={1}>
                        {username}
                    </Text>
                </View>
            </View>

            <View className="pt-2">
                <Image 
                source={icons.menu} className="w-5 h-5"
                resizeMode='contain'
                />
            </View>
        </View>
        {photo ? (
        <Image 
          source={{ uri: photo }} 
          className="w-full h-64 mt-4 rounded-lg" // Adjust size as needed
          resizeMode='cover'
        />
      ) : (
        <View className="w-full h-64 mt-4 bg-gray-200 rounded-lg justify-center items-center">
          <Text>No Photo Available</Text>
        </View>
      )}
      
    </View>
  )
}

export default PropertiesPhoto;
