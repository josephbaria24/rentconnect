import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';

const ContinueWithEmailButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={{

        backgroundColor: '#e62267',
        borderRadius: 7,       // Same as rounded-xl
        height: 40,
        minHeight: 40,
        width: "50%",
        minWidth: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',   // To position icon and text in a row
        ...containerStyles,
        opacity: isLoading ? 0.5 : 1,
      }}
      disabled={isLoading}
    >
     
      <Text style={{
        color: '#ffff',      // Adjust the text color
        fontFamily: 'Poppins-SemiBold', // Ensure to use correct font family
        fontSize: 12,           // Adjust text size as needed
        ...textStyles,
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ContinueWithEmailButton;
