import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Dishes from '../../components/ListsCard.jsx'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles/StyledDishesScreen.jsx'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import dishes from '../../../data/dishes.json'

const dishesmap = {
  id: 'id',
  name: 'name',
  image: 'image',
  description: 'description',
  ingredients: 'ingredients'
}

const MainDishes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <Dishes data={dishes} map={dishesmap} type='dish' />
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MainDishes
