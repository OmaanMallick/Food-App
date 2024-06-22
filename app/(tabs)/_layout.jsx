import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo,  } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function tabslayout() {
  return (
    <Tabs> 
        <Tabs.Screen name="home" options={{
        headerShown:false,  tabBarLabel: 'Home',tabBarIcon: ({}) =>(
          <Entypo name='home' size={24} color="grey"/>
      )}}  />
        <Tabs.Screen name="ourstore" options={{ 
        headerShown:false ,  tabBarLabel: 'Our Store',   tabBarIcon: ({}) =>(
          <FontAwesome5 name="store" size={20} color= "grey"  />
      )}} />
        <Tabs.Screen name="order" options={{
        headerShown:false,  tabBarLabel: 'Order', tabBarIcon: ({}) =>(
          <Ionicons name="bag-handle-sharp" size={24} color="grey" />
      )}}/>
        <Tabs.Screen name="account" options={{
        headerShown:false,  tabBarLabel: 'Account', tabBarIcon: ({}) =>(
          <FontAwesome name="user" size={24} color="grey" />
      )}}/>
        
    </Tabs>
  )
}

const styles = StyleSheet.create({})