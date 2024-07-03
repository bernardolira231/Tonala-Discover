import React, { useLayoutEffect } from 'react'
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

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
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View>
        <Text>{data.description}</Text>
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
  }
})
