import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishesScreen.jsx'
import { globalStyles } from '../../styles/StyledGlobalScreen.jsx'
import { StatusBar } from 'expo-status-bar'
import HandCraft from '../../components/ListsCard.jsx'
import handicrafts from '../../../data/handicraft.json'
import { handicraftsmap, extraFields } from '../../constants/fashionConst.js'

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
