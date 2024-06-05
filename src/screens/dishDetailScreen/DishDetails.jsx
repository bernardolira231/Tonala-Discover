import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const DishDetails = ({ route }) => {
  const { name, description, image, ingredients } = route.params

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  header: {
    backgroundColor: '#FFD365',
    borderRadius: 30,
    padding: 16,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    paddingVertical: 8
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  ingredients: {
    fontSize: 14
  },
  imageContainer: {
    flex: 1,
    marginVertical: 16
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  iconButton: {
    padding: 8
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#666'
  },
  iconActive: {
    width: 24,
    height: 24,
    tintColor: '#FF6347'
  }
})

export default DishDetails
