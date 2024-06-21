import React from 'react'
import TourCard from '../../components/TourCard'
import { ScrollView, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import { styles } from '../../styles/StyledTourSection'

const TourScreen = () => {
  return (
    <SafeAreaProvider style={[globalStyles.bgColor, styles.container]}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.h1}>Tourist Routes</Text>
          <TourCard />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default TourScreen
