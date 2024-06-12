import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishesScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import { StatusBar } from 'expo-status-bar'
import HandCraft from '../../components/ListsCard.jsx'
import handicrafts from '../../../data/handicraft.json'

const handicraftsmap = {
  id: 'id',
  name: 'itemName',
  image: 'image',
  description: 'description',
  recomendations: 'recommendations',
  productionTime: 'productionTime',
  craftsmanName: 'craftsmanName',
  collaboration: 'collaboration',
  collectionName: 'collectionName',
  itemType: 'itemType',
  designedBy: 'designedBy'
}

const extraFields = ['recomendations', 'productionTime', 'craftsmanName', 'collaboration', 'collectionName', 'itemType', 'designedBy']

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
