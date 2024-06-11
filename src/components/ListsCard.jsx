import React from 'react'
import { Text, FlatList } from 'react-native'
import DishItem from './CardItem.jsx'
import { styles } from '../styles/StyledListCard.jsx'

const ListCards = ({ title, data, map, extraFields = [], type }) => {
  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      ListHeaderComponent={<Text style={styles.h1}>{title}</Text>}
      renderItem={({ item }) => <DishItem item={item} map={map} extraFields={extraFields} type={type} />}
    />
  )
}

export default ListCards
