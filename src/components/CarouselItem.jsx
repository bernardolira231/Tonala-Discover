import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import { styles } from '../styles/StyledCarouselItem'
import { useNavigation } from '@react-navigation/native'

const CarouselItem = ({ props, type, map, extraFields }) => {
  const navigation = useNavigation()
  if (type === 'dish') {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('DishDetails', {
            ...props,
            type
          })}
      >
        <View key={props.id} style={styles.container}>
          <ImageBackground source={{ uri: props.image }} style={styles.image}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{props.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  if (type === 'handicraft') {
    const mappedItem = {
      id: props[map.id],
      name: props[map.name],
      image: props[map.image],
      description: props[map.description],
      ingredients: props[map.ingredients]
    }

    const extraParams = extraFields.reduce((acc, field) => {
      acc[field] = props[map[field]]
      return acc
    }, {})
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('HandicraftDetails', {
            ...mappedItem,
            extraFields: extraParams
          })}
      >
        <View key={props.id} style={styles.container}>
          <ImageBackground source={{ uri: props.image }} style={styles.image}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{props.itemName}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default CarouselItem
