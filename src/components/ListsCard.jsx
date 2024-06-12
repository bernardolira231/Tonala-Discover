import React from 'react'
import { FlatList } from 'react-native'
import DishItem from './CardItem.jsx'

const ListCards = ({ data, map, extraFields = [], type }) => {
  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      renderItem={({ item }) => <DishItem item={item} map={map} extraFields={extraFields} type={type} />}
    />
  )
}

export default ListCards
