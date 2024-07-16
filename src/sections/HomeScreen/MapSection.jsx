import React from 'react'
// import { markers } from '../../constants/markers.js'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../styles/StyledMapSection.jsx'
import Card from '../../components/Card.jsx'
import places from '../../../data/places.json'

const MapSection = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Map</Text>
      <View>
        <ScrollView style={styles.infoContainer}>
          {places.map((place, index) => (
            <Card
              key={index}
              images={place.images}
              heading={place.heading}
              subheading={place.subheading}
              stars={place.stars}
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
