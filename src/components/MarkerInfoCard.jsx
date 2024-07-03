import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MarkerInfoCard = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    marginTop: 5
  }
})

export default MarkerInfoCard
