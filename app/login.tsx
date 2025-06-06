import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function login() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <View className='px-10'>
          <Text className='text-base text-center text-black-200'>Welcome Back</Text>
          <TouchableOpacity className='bg-white shadow-md shadow-slate-300 rounded-full w-full py-4 mt-5'>
            <Text className='text-center text-black-200 font-semibold'>Login with Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}