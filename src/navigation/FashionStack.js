import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FashionScreen from '../screens/fashionScreen/FashionScreen'
import DetailsScreen from '../screens/detailScreen/Details'
import CameraScreen from '../screens/cameraScreen/CameraScreen'
import theme from '../styles/theme'

const Stack = createStackNavigator()

const FashionStack = () => {
  return (
    <Stack.Navigator initialRouteName='FashionScreen'>
      <Stack.Screen
        name='FashionScreen'
        component={FashionScreen}
        options={{
          headerTitle: 'Fashion',
          headerStyle: {
            backgroundColor: theme.colors.bgColor
          }
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
          headerBackTitle: 'Back'
        }}
      />
      <Stack.Screen
        name='CameraScreen'
        component={CameraScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default FashionStack
