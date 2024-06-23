import React from 'react'
import TourCard from '../../components/TourCard'
import tours from '../../../data/tours.json'
import { View, Text } from 'react-native'
import { styles } from '../../styles/StyledToursSection'

const ToursSection = () => {
  return (
    <View>
      <Text style={styles.h1}>Tourist Routes</Text>
      {tours.map((tour, index) => (
        <View key={index} style={styles.cardContainer}>
          <TourCard data={tour} />
        </View>
      ))}
    </View>
  )
}

export default ToursSection
