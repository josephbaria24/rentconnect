import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'



const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
   

      <View className="border border-gray-100 w-[86%] h-10 px-4 bg-gray-100 rounded-xl
      focus:border-secondary items-center flex-row
      space-x-2">
        
        <TextInput
             style={{ fontSize: 13, color: '#1f1f1f', paddingVertical: 0, }}
            className="text-base mt-1 flex-1 font-pregular"
            value={value}
            placeholder="Search for a property"
            placeholderTextColor="#a19d9d"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        <TouchableOpacity>
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
            />
        </TouchableOpacity>
      </View>

  )
}

export default SearchInput