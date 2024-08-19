import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';


export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/trends" />
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pbold">Welcome</Text>
      <Text className="text-2xl font-psemibold">to</Text>
      <Text className="text-3xl font-pbold text-[#6A4DF6] mb-6">Rentconnect</Text>
      <Text className="text-xs font-pregular text-center ml-4 mr-4">A place where you can seamlessly connect with your ideal rental property and list property.</Text>
      
      <Image
        source={require('./../assets/images/welcome.png')}
        style={{ width: 250, height: 250, marginBottom: 30 }}
        resizeMode="contain"
      />

      <TouchableOpacity style={{ backgroundColor: '#6A4DF6', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 30 }}>
        <Link href="/trends" style={{ color: 'white', fontSize: 18, }}>Discover</Link>
      </TouchableOpacity>

      <Text className="text-2xs font-psemibold p-3">or</Text>
      <CustomButton
        title="Continue with email"
        handlePress={() => router.push('/sign-in')}
      />

      <StatusBar style="auto" />
    </View>
  );
}
