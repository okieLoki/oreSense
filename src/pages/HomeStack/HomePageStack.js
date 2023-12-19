import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ActivityPage, DataPage, ProfilePage } from './pages'
import React from 'react'

const Tab = createBottomTabNavigator()

const HomePageStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Activity" component={ActivityPage} />
      <Tab.Screen name="Data" component={DataPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  )
}

export default HomePageStack