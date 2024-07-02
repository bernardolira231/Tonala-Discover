import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'
import HomePage from '../screens/homeScreen/HomeScreen'
import MainDishes from '../screens/dishesScreen/DishesScreen'
import DishDetails from '../screens/dishDetailScreen/DishDetails'
import DetailsScreen from '../screens/detailScreen/Details'
import TourScreen from '../screens/tourScreen/TourScreen'
import theme from '../styles/theme'
import logo from '../../assets/img/logo.png'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage'>
      <Stack.Screen
        name='HomePage'
        component={HomePage}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bgColor,
            shadowColor: 'transparent',
            shadowOpacity: 0
          },
          headerTitle: () => (
            <Image
              style={{ width: 100, height: 40 }}
              source={logo}
              resizeMode='contain'
            />
          )
        }}
      />
      <Stack.Screen
        name='DishesStack'
        component={MainDishes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DishDetails'
        component={DishDetails}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bgColor
          },
          headerTitle: '',
          headerBackTitleVisible: false,
          presentation: 'modal'
        }}
      />
      <Stack.Screen
        name='HandicraftDetails'
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bgColor
          },
          headerTitle: '',
          headerBackTitleVisible: false,
          presentation: 'modal'
        }}
      />
      <Stack.Screen
        name='Tour'
        component={TourScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bgColor
          },
          headerTitle: '',
          headerBackTitle: 'Back'
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
