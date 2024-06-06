import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/StyledDishesCard'
import { useNavigation } from '@react-navigation/native'

const DishItem = (props) => {
  const navigation = useNavigation()
  return (
    <View key={props.id} style={styles.container}>
      <ImageBackground source={{ uri: props.image }} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('DishDetails', {
                id: props.id,
                name: props.name,
                description: props.description,
                image: props.image,
                ingredients: props.ingredients
              })}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default DishItem
