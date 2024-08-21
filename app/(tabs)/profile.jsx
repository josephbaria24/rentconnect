import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { icons } from '../../constants'; // Assuming your icons are imported from a constants file

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Menu />
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://placehold.co/100x100.png' }} // Placeholder for profile image
        style={styles.profileImage}
      />
      <Text style={styles.username}>Mike C. Tyson</Text>
    </View>
  )
}

const Menu = () => {
  return (
    <View style={styles.menu}>
      <MenuItem text="Personal Information" icon={icons.profile} />
      <MenuItem text="Account" icon={icons.settings} />
      <MenuItem text="Listing" icon={icons.listing} />
      <MenuItem text="About" icon={icons.info} />
      <MenuItem text="Log out" icon={icons.logout} />
    </View>
  )
}

const MenuItem = ({ text, icon }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Light background
    padding: 20,
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#6A4DF6', // Blue background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    color: '#FFFFFF', // White text
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#FFFFFF', // White background for menu
    borderRadius: 10,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // Light gray border
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#374151', // Dark text
  },
})

export default Profile
