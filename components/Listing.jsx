import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Listing = ({ posts }) => {
  return (
    <FlatList 
     data={posts}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({ item }) => (
        <Text className="text-3xl">{item.id}</Text>
     )}
    />
  )
}

export default Listing

const styles = StyleSheet.create({})