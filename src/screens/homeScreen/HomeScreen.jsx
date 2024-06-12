import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TryCarousel from '../../components/MyCarrousel.jsx'
import Banner from '../../components/Banner.jsx'
import Map from '../../components/Map.jsx'
import { styles } from '../../styles/StyledHomeScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import dishes from '../../../data/dishes.json'
import handicrafts from '../../../data/handicraft.json'
import { handicraftsmap, extraFields } from '../../constants/handicraftConst.js'
import bannerImage from '../../../assets/img/banner.webp'

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner image={bannerImage} header='Thank you for visiting us, we hope you come back soon!' />
          <TryCarousel header='Dishes' data={dishes} screen='Dishes' type='dish' />
          <TryCarousel header='Handicraft' data={handicrafts} screen='Handicraft' type='handicraft' map={handicraftsmap} extraField={extraFields} />
          <Map />
        </ScrollView>
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home
