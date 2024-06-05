import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import dishes from '../../data/dishes.json'
import DishItem from './CardItem.jsx'

const Dishes = () => {
  return (
    <FlatList
      nestedScrollEnabled
      data={dishes}
      ListHeaderComponent={<Text style={styles.h1}>Dishes</Text>}
      renderItem={({ item }) => <DishItem {...item} />}
    />
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginVertical: 10,
    color: '#202020'
  }
})

export default Dishes
