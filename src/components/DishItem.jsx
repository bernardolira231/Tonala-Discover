import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./StyledDishesCard";

const DishItem = (props) => (
  <View key={props.id} style={styles.container}>
    <ImageBackground source={{ uri: props.image }} style={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Ver más presionado")}
        >
          <Text style={styles.buttonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

export default DishItem;
