import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TryCarousel from '@components/MyCarrousel.jsx'
import Banner from '@components/Banner.jsx'
import dishes from '../../../data/dishes.json'
import bannerImage from '../../../assets/img/banner.webp'

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner image={bannerImage} header='Tonalá as a vibrant tourist destination in Jalisco ' />
          <TryCarousel header='Dishes' data={dishes} screen='Dishes' />
        </ScrollView>
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  bg: {
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    flex: 1
  }
})

export default Home
