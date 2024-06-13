import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishDetailsScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'

const DishDetails = ({ route }) => {
  const { name, description, image, ingredients } = route.params

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, globalStyles.bgColor]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.header}>
            <View style={styles.firstpart}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.secondpart}>
              <Text style={styles.subtitle}>Ingredients:</Text>
              {ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredients}>
                  {ingredient}
                </Text>
              ))}
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default DishDetails
