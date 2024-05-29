import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { styles } from "./StyledCarouselItem";


const CarouselItem = (props) => {

  return (
    <View key={props.id} style={styles.container}>
      <ImageBackground source={{ uri: props.image }} style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarouselItem;
