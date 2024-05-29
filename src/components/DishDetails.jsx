import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import StyledText from "./StyledText.jsx";

const DishDetails = ({ route }) => {
  const { name, description, image, ingredients } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <StyledText fontSize={"title"} fontWeight={"bold"} style={styles.title}>
          {name}
        </StyledText>
        <StyledText style={styles.description}>{description}</StyledText>
        <View style={styles.ingredientsContainer}>
          <StyledText style={styles.ingredientsTitle}>Ingredients:</StyledText>
          <StyledText style={styles.ingredients}>
            {ingredients.join(", ")}
          </StyledText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
    lineHeight: 22,
  },
  ingredientsContainer: {
    marginTop: 10,
  },
  ingredientsTitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 14,
    color: "#777",
  },
});

export default DishDetails;
