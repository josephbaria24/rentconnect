import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
        <Text className="text-2 text-black
        text-semibold mt-10 font-psemibold">Login to RentConnect</Text>

        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form,
          email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
         <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form,
          password: e })}
          otherStyles="mt-4"
          keyboardType="email-address"
        />

        <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyles={{ marginTop: 20, padding: 10 }}
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-m text-gray-500
            font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className="text-m
            font-psemibold text-secondary">Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn