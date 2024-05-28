import React from "react";
import { Text, FlatList, View } from "react-native";
import dishes from "../../data/dishes.json";
import DishItem from "./DishItem.jsx";

const Dishes = () => {
  return (
    <FlatList
      data={dishes}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
      renderItem={({ item }) => <DishItem {...item} />}
    />
  );
};

export default Dishes;
