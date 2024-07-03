import React from 'react'
import Map from '../../components/Map.jsx'
import MarkerInfoCard from '../../components/MarkerInfoCard.jsx'
import { markers } from '../../constants/markers.js'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../styles/StyledMapSection.jsx'

const MapSection = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Map</Text>
      <Map />
      <View>
        <ScrollView style={styles.infoContainer}>
          {markers.map((marker, index) => (
            <MarkerInfoCard
              key={index}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Tour')} style={styles.button}>
          <Text>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MapSection
