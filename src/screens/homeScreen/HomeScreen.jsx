import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import BannerSection from '../../sections/HomeScreen/BannerSection.jsx'
import CarouselSection from '../../sections/HomeScreen/CarouselSection.jsx'
import MapSection from '../../sections/HomeScreen/MapSection.jsx'
import { styles } from '../../styles/StyledHomeScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import bannerImage from '../../../assets/img/banner.webp'

const Home = () => {
  return (
    <SafeAreaProvider style={styles.bg2}>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BannerSection image={bannerImage} header='Thank you for visiting us, we hope you come back soon!' />
          <CarouselSection />
          <MapSection />
        </ScrollView>
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home
