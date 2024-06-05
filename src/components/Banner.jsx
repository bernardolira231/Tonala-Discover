import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '@styles/StyledBanner'

const Banner = ({ header, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.banner} />
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Tonalá</Text>
        <Text style={styles.header}>{header}</Text>
      </View>
    </View>
  )
}

export default Banner
