import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TryCarousel from '../../components/MyCarrousel.jsx'
import Banner from '../../components/Banner.jsx'
import MapSection from '../../components/MapSection.jsx'
import { styles } from '../../styles/StyledHomeScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'
import dishes from '../../../data/dishes.json'
import fashions from '../../../data/fashion.json'
import { fashionsmap, extraFields } from '../../constants/fashionConst.js'
import bannerImage from '../../../assets/img/banner.webp'

const Home = () => {
  return (
    <SafeAreaProvider style={styles.bg2}>
      <SafeAreaView style={[styles.bg, globalStyles.bgColor]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner image={bannerImage} header='Thank you for visiting us, we hope you come back soon!' />
          <View>
            <TryCarousel header='Dishes' data={dishes} screen='Dishes' type='dish' />
          </View>
          <View>
            <TryCarousel header='Fashion' data={fashions} screen='Fashion' type='fashion' map={fashionsmap} extraField={extraFields} />
          </View>
          <View>
            <MapSection />
          </View>
        </ScrollView>
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home
