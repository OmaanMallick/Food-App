import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

export default function Hello() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown:false }} />
    </Stack>
    
  )
}

const styles = StyleSheet.create({})