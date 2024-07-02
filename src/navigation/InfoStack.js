import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainDishes from '../screens/dishesScreen/DishesScreen'
import DishDetails from '../screens/dishDetailScreen/DishDetails'
import theme from '../styles/theme'

const Stack = createStackNavigator()

const InfoStack = () => {
  return (
    <Stack.Navigator initialRouteName='DishesScreen'>
      <Stack.Screen
        name='DishesScreen'
        component={MainDishes}
        options={{
          headerTitle: 'Dishes',
          headerStyle: {
            backgroundColor: theme.colors.bgColor
          }
        }}
      />
      <Stack.Screen
        name='DishDetails'
        component={DishDetails}
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

export default InfoStack
