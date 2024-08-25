import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import {searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import PropertiesPhoto from '../../components/PropertiesPhoto'
import { useLocalSearchParams } from 'expo-router'
import EmptyState from '../../components/EmptyState'


const Search = () => {
  const { query } = useLocalSearchParams()
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));


useEffect(() => {
  refetch()
}, [query])


  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <PropertiesPhoto property={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="px-3 space-y-1">
   
              <Text className="font-pmedium text-sm text-gray-800">
                Search Results
              </Text>
              <Text className="text-lg font-psemibold">
                {query}
              </Text>

              <View className="mt-6">
                <SearchInput initialQuery={query}/>
              </View>
              

          </View>
        )}

       ListEmptyComponent={() => (
        <EmptyState 
          title="No listing found"
        />
       )}
      />
    </SafeAreaView>
  )
}

export default Search