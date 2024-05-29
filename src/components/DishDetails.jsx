import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText.jsx";

const DishDetails = ({ route }) => {
  const { id, name, description, image, ingredients } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <StyledText fontSize={"title"} fontWeight={"bold"}>
          {name}
        </StyledText>
        <StyledText style={styles.description}>{description}</StyledText>
        <StyledText style={styles.ingredients}>
          Ingredients: {ingredients.join(", ")}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 15,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  ingredients: {
    fontSize: 14,
    color: "#555",
  },
});

export default DishDetails;
