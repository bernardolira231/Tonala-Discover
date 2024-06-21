import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Map from './Map.jsx'
import { styles } from '../styles/StyledMapSection.jsx'

const MapSection = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Map</Text>
      <Map />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Tour')} style={styles.button}>
          <Text>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MapSection
