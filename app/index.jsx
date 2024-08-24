import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
import ContinueWithEmailButton from '../components/ContinueWithEmailButton';



export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />
  return (
    <View className="flex-1 items-center justify-center bg-white">
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -50 }}>
          <Image
            source={require('./../assets/images/logo.jpg')}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <Text className="text-xl font-psemibold text-center">
            RentConnect
          </Text>
        </View>
      <Image
        source={require('./../assets/images/house.png')}
        style={{ width: 400, height: 270 }}
        resizeMode="contain"
      />
      <Text className="text-xs font-pregular text-center ml-4 mr-4 mb-10">A place where you can seamlessly connect with your ideal rental property and list property.</Text>
      
      
      <View className="items-center justify-center">
      <TouchableOpacity className="bg-primary py-2 px-10 rounded-lg">
        <Link href="/home" className="text-white text-md font-psemibold">
          Discover
        </Link>
      </TouchableOpacity>
    </View>

      <Text className="text-2xs font-psemibold p-3 ml">or</Text>
      <ContinueWithEmailButton
        title="Continue with email"
        handlePress={() => router.push('/sign-in')}
      />

      <StatusBar style="auto" />
    </View>
  );
}
