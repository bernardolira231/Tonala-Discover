import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/StyledDishesCard'
import { useNavigation } from '@react-navigation/native'

const localImages = {
  'ceviche.jpeg': require('../../assets/img/ceviche.jpeg')
  // Añade más imágenes aquí según sea necesario
}

const DishItem = ({ item, map, extraFields, type }) => {
  const navigation = useNavigation()
  const mappedItem = {
    id: item[map.id],
    name: item[map.name],
    image: item[map.image],
    description: item[map.description],
    ingredients: item[map.ingredients]
  }

  const extraParams = extraFields.reduce((acc, field) => {
    acc[field] = item[map[field]]
    return acc
  }, {})

  const imageSource = mappedItem.image.startsWith('http')
    ? { uri: mappedItem.image }
    : localImages[mappedItem.image]
  return (
    <View key={mappedItem.id} style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{mappedItem.name}</Text>
          {type === 'dish' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('DishDetails', {
                  ...mappedItem,
                  type
                })}
            >
              <Text style={styles.buttonText}>Show More</Text>
            </TouchableOpacity>
          )}
          {type === 'handicraft' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('HandicraftDetails', {
                  ...mappedItem,
                  extraFields: extraParams,
                  type
                })}
            >
              <Text style={styles.buttonText}>Show More</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  )
}

export default DishItem
