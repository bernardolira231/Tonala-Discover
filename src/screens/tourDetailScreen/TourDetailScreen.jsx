import React, { useLayoutEffect } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MySwiper from '../../components/Swiper'

const TourDetailScreen = () => {
  const navigation = useNavigation()
  const {
    params: { data }
  } = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.title
    })
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Text>{data.title}</Text>
        <Text>{data.shortphrase}</Text>
      </View>
      <View style={styles.swiper}>
        <MySwiper images={data.images} />
      </View>
      <View>
        <Text>Route Description</Text>
        <Text>{data.description}</Text>
      </View>
      <View style={styles.detailSection}>
        <View style={styles.priceSection}>
          <Text>Price</Text>
          <Text>{`${data.price} per person`}</Text>
        </View>
        <View style={styles.durationSection}>
          <Text>Duration</Text>
          <Text>{data.duration}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default TourDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 16
  },
  imageContainer: {
    marginBottom: 16
  },
  image: {
    width: '800',
    height: 300
  },
  swiper: {
    paddingBottom: 25
  },
  detailSection: {
    flexDirection: 'row',
    gap: 20
  }
})
