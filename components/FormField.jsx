import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'



const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-sm text-black
      font-pregular">{title}</Text>

      <View className="border border-gray-100 w-full h-12 px-4 bg-gray-100 rounded-xl
      focus:border-secondary items-center flex-row">
        <TextInput
            className="flex-1 text-black font-psemibold
            text-m"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#1f1f1f"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() =>
            setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyehide } 
                className="w-6 h-6" resizeMode='contain' />

            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField