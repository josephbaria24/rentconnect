import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';


const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {

    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
        <Text className="text-2 text-black
        text-semibold mt-10 font-psemibold">Sign up to RentConnect</Text>

        <FormField 
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form,
          username: e })}
          otherStyles="mt-7"
        />
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form,
          email: e })}
          otherStyles="mt-4"
          keyboardType="email-address"
        />
         <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form,
          password: e })}
          otherStyles="mt-4"
        />

        <CustomButton 
          title="Register"
          handlePress={submit}
          containerStyles={{ marginTop: 20, padding: 10 }}
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-m text-gray-500
            font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-m
            font-psemibold text-secondary">Sign in</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp