import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles/StyledDishDetailsScreen'
import { globalStyles } from '../../styles/StyledGlobalScreen'

const Details = ({ route }) => {
  const { name, description, image, ingredients, extraFields, type } = route.params
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, globalStyles.bgColor]}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.header}>
          <View style={styles.firstpart}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          {type === 'dish' && (
            <View style={styles.secondpart}>
              <Text style={styles.subtitle}>Ingredients:</Text>
              {ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredients}>
                  {ingredient}
                </Text>
              ))}
            </View>
          )}
          {type === 'handicraft' && (
            <View style={styles.secondpart}>
              {Object.keys(extraFields).map((key, index) => (
                <View key={index} style={styles.extraFieldContainer}>
                  <Text style={styles.subtitle}>{key}:</Text>
                  <Text style={styles.extraField}>{extraFields[key]}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Details
