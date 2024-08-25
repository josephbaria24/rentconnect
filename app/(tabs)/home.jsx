import { View, Text, FlatList, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import Listing from '../../components/Listing'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import PropertiesPhoto from '../../components/PropertiesPhoto'
import EmptyState from '../../components/EmptyState'


const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false)
  }


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
           <View className="justify-between items-start
           flex-row mb-6">
            </View> 
              <Text className="font-pmedium text-sm text-gray-800">
                Welcome Back
              </Text>
              <Text className="text-lg font-psemibold">
                Joseph
              </Text>
            
              <SearchInput />

          
              
          </View>
          
        )}
        
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

        
        ListEmptyComponent={() => {
          <EmptyState 
            title="No Listing Found"
            subtitle="Stay Tuned! or Start Your Listing Now!"
          />
        }}
      />
    </SafeAreaView>
  )
}

export default Home