import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image 
        source={images.empty} className="mt-10 w-[150px]
        h-[150px]" resizeMode='contain'
      />
      <Text className="font-pmedium text-sm text-gray-800">
                {subtitle}
        </Text>
        <Text className="text-lg text-center font-psemibold mt-2">
                {title}
        </Text>

        <CustomButton 
            title="Create Listing"
            handlePress={() => router.push('/create')}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState