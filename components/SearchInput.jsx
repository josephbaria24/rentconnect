import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { router, usePathname } from 'expo-router'



const SearchInput = ({ initialQuery}) => {

   const pathname = usePathname()
   const [query, setQuery] = useState(initialQuery || '')

  return (
   

      <View className="border border-gray-100 w-[86%] h-10 px-4 bg-gray-100 rounded-xl
      focus:border-secondary items-center flex-row
      space-x-2">
        
        <TextInput
             style={{ fontSize: 13, color: '#1f1f1f', paddingVertical: 0, }}
            className="text-base mt-1 flex-1 font-pregular"
            value={query}
            placeholder="Search for a property"
            placeholderTextColor="#a19d9d"
            onChangeText={(e) => setQuery(e)}

        />

        <TouchableOpacity
          onPress={() => {
            if(!query) {
              return Alert.alert('Missing Input', 
              "Please input something to search result across database")
            }
            if (pathname.startsWith('/search')) 
            router.setParams({ query })
            else router.push(`/search/${query}`) 
          }}
        >
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