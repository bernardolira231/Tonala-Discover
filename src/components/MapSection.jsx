import React from 'react'
import { View, Text } from 'react-native'
import Map from './Map.jsx'
import { styles } from '../styles/StyledMapSection.jsx'

const MapSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Map</Text>
      <Map />
    </View>
  )
}

export default MapSection
