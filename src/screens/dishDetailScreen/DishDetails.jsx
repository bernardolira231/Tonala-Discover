import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishDetailsScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'

const DishDetails = ({ route }) => {
  const { name, description, image, ingredients } = route.params

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, globalStyles.bgColor]}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.subtitle}>Ingredients:</Text>
          <Text style={styles.ingredients}>{ingredients.join(', ')}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default DishDetails
