import React from 'react'
import TourCard from '../../components/TourCard'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import { styles } from '../../styles/StyledTourSection'

const Tours = [
  {
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fb/76/de.jpg',
    title: 'Tour Tonalá – Tlaquepaque',
    description: 'Recorreremos Tonalá y Tlaquepaque y sus lugares más representativos.',
    price: '1,290.00 MXN',
    time: '6 hours'
  },
  {
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/2d/7d/5d/caption.jpg',
    title: 'Tour Tequila Express',
    description: 'Recorreremos la fábrica de tequila y degustaremos la bebida más representativa de Jalisco.',
    price: '1,500.00 MXN',
    time: '8 hours'
  }
]

const TourScreen = () => {
  return (
    <SafeAreaProvider style={styles.bg2}>
      <SafeAreaView style={[globalStyles.bgColor, styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.h1}>Tourist Routes</Text>
          {Tours.map((tour, index) => (
            <View key={index} style={styles.cardContainer}>
              <TourCard data={tour} />
            </View>
          ))}
          <Text style={styles.h1}>Our Tour Guides</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default TourScreen
