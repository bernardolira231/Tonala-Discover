import React from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./StyledCarouselItem";
import { useNavigation } from "@react-navigation/native";

const CarouselItem = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("DishDetails", {
          id: props.id,
          name: props.name,
          description: props.description,
          image: props.image2,
          ingredients: props.ingredients,
        })
      }
    >
      <View key={props.id} style={styles.container}>
        <ImageBackground source={{ uri: props.image }} style={styles.image}>
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CarouselItem;
