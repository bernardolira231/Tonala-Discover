import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishesScreen.jsx'
import { globalStyles } from '../../styles/StyledGlobalScreen.jsx'
import { StatusBar } from 'expo-status-bar'
import Fashion from '../../components/ListsCard.jsx'
import fashions from '../../../data/fashion.json'
import { fashionsmap, extraFields } from '../../constants/fashionConst.js'
import CameraButton from '../../components/CameraButton.jsx'

const FashionScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <Fashion data={fashions} map={fashionsmap} extraFields={extraFields} type='fashion' />
        <CameraButton />
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default FashionScreen
