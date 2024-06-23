import React from 'react'
import { View } from 'react-native'
import MyCarousel from '../../components/MyCarousel.jsx'
import dishes from '../../../data/dishes.json'
import fashions from '../../../data/fashion.json'
import { fashionsmap, extraFields } from '../../constants/fashionConst.js'

const CarouselSection = () => {
  return (
    <View>
      <MyCarousel header='Dishes' data={dishes} screen='Dishes' type='dish' />
      <MyCarousel header='Fashion' data={fashions} screen='Fashion' type='fashion' map={fashionsmap} extraField={extraFields} />
    </View>
  )
}

export default CarouselSection
