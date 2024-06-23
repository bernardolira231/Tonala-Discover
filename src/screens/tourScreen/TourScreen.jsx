import React from 'react'
import ToursSection from '../../sections/TourScreen/RoutesSection'
import GuidesSection from '../../sections/TourScreen/GuidesSection'
import { ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import { styles } from '../../styles/StyledTourSection'

const TourScreen = () => {
  return (
    <SafeAreaProvider style={styles.bg2}>
      <SafeAreaView style={[globalStyles.bgColor, styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          <ToursSection />
          <GuidesSection />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default TourScreen
