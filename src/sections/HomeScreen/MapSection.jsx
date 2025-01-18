import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../styles/StyledMapSection.jsx'
import places from '../../../data/places.json'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

const MapSection = () => {
  const navigation = useNavigation()
  const [visibleItems] = useState(4)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular places</Text>
      <View style={styles.gridContainer}>
        {places.slice(0, visibleItems).map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Swiper para múltiples imágenes */}
            <Swiper
              style={styles.swiper}
              showsPagination
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
            >
              {item.images.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={styles.image} />
              ))}
            </Swiper>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.heading}</Text>
              <Text style={styles.price}>${item.subheading}/night</Text>
              <Text style={styles.stars}>⭐ {item.stars}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Tour')} style={styles.button}>
        <Text style={styles.buttonText}>Show more</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MapSection
