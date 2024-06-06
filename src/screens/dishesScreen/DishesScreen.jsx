import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Dishes from '../../components/ListsCard.jsx'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles/StyledDishesScreen.jsx'
import { globalStyles } from '../../styles/StyledGlobalScreen'

const MainDishes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <Dishes title='Dishes' />
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MainDishes
