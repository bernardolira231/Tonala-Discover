import React from 'react'
import { Text, FlatList } from 'react-native'
import dishes from '../../data/dishes.json'
import DishItem from './CardItem.jsx'
import { styles } from '../styles/StyledListCard.jsx'

const Dishes = ({ title }) => {
  return (
    <FlatList
      nestedScrollEnabled
      data={dishes}
      ListHeaderComponent={<Text style={styles.h1}>{title}</Text>}
      renderItem={({ item }) => <DishItem {...item} />}
    />
  )
}

export default Dishes
