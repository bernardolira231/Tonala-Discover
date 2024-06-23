import React from 'react'
import { View } from 'react-native'
import Banner from '../../components/Banner.jsx'

const BannerSection = ({ image, header }) => {
  return (
    <View>
      <Banner image={image} header={header} />
    </View>
  )
}

export default BannerSection
