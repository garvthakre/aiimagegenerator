import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import Globalapi from '../../services/Globalapi';

import { useUser } from '@clerk/clerk-react';
export default function tablayout() {
    const verifyUser=async()=>{
      const result = await Globalapi.GetUserInfo(user?.primarEmailAddress?.emailAddress) 
      console.log(result.data) 
    }
  return (
 <Tabs>
    <Tabs.Screen name = 'home'
    options={{
        title : 'Home',
        tabBarIcon : ({color}) =><Foundation name="home" size={24} color={color} />
    }}/>
    <Tabs.Screen name = 'collection'
    options={{
        title : 'Collection',
        tabBarIcon : ({color}) =><Entypo name="folder" size={24} color="black" />
    }}/>
    <Tabs.Screen name = 'profile'
    options={{
        title : 'Profile',
        tabBarIcon : ({color}) =><AntDesign name="profile" size={24} color="black" />
    }}/>
 </Tabs>
  )
}