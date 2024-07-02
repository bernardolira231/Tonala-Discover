import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
