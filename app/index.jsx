import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pbold">Welcome</Text>
      <Text className="text-2xl font-psemibold">to</Text>
      <Text className="text-3xl font-pbold text-[#6A4DF6] mb-6">Rentconnect</Text>
      <Text className="text-xs font-pmedium text-center ml-4 mr-4">A place where you can seamlessly connect with your ideal rental property and list property.</Text>
      
      <Image
        source={require('./../assets/images/welcome.png')}
        style={{ width: 200, height: 200, marginBottom: 30 }}
        resizeMode="contain"
      />

      <TouchableOpacity style={{ backgroundColor: '#6A4DF6', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30 }}>
        <Link href="/trends" style={{ color: 'white', fontSize: 18 }}>Discover</Link>
      </TouchableOpacity>

      <View style={{ position: 'absolute', bottom: 30 }}>
        <Image
          source={require('./../assets/icons/upload.png')} // Add the bottom icon to your project
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
