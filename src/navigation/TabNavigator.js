import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons'
import HomeStack from './HomeStack'
import InfoStack from './InfoStack'
import FashionStack from './FashionStack'
import HandicraftScreen from '../screens/handicraftScreen/HandicraftScreen'
import theme from '../styles/theme'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.bgColor
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Fashion'
        component={FashionStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='tshirt-crew'
              size={25}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name='Dishes'
        component={InfoStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='food-fork-drink'
              size={25}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name='Handicraft'
        component={HandicraftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='jar' size={25} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
