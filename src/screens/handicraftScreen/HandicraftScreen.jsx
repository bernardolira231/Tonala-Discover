import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishDetailsScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import { StatusBar } from 'expo-status-bar'
import HandCraft from '../../components/ListsCard.jsx'
import handicrafts from '../../../data/handicraft.json'

const handicraftsmap = {
  id: 'id',
  name: 'craftName',
  image: 'image[0]',
  description: 'information',
  ingredients: 'materials',
  recomendations: 'recomendations',
  productionTime: 'productionTime',
  craftsmanName: 'craftsmanName'
}

const extraFields = ['recomendations', 'productionTime', 'craftsmanName']

const HandicraftScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <HandCraft title='Handicraft' data={handicrafts} map={handicraftsmap} extraFields={extraFields} type='handicraft' />
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HandicraftScreen
