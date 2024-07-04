import React from 'react'
import { Image, View } from 'react-native'
import Swiper from 'react-native-swiper'

const MySwiper = ({ images }) => {
  return (
    <Swiper
      height={239}
      activeDotColor='#E94F37'
      activeDotStyle={{
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3
      }} dotStyle={{
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3
      }}
      paginationStyle={{ bottom: -17 }}
    >
      {images.map((image, index) => (
        <View key={index}>
          <Image source={{ uri: image }} style={{ width: 500, height: 239 }} />
        </View>
      ))}
    </Swiper>
  )
}

export default MySwiper
