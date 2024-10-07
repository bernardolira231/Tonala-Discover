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
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Tour')} style={styles.button}>
          <Text>Turist Guides</Text>
        </TouchableOpacity>
        <ScrollView style={styles.infoContainer}>
          <Text>Popular Destinations</Text>
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
      <View />
    </View>
  )
}

export default MapSection
