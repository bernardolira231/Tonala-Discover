import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import StyledText from "../../components/StyledText";

const DishDetails = ({ route }) => {
  const { name, description, image, ingredients } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.textOverlay}>
          <StyledText
            fontSize={"title"}
            fontWeight={"bold"}
            style={styles.title}
          >
            {name}
          </StyledText>
          <StyledText style={styles.description}>{description}</StyledText>
          <View style={styles.ingredientsContainer}>
            <StyledText style={styles.ingredientsTitle}>
              Ingredients:
            </StyledText>
            <StyledText style={styles.ingredients}>
              {ingredients.join(", ")}
            </StyledText>
          </View>
        </View>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.imageOverlay} />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  background: {
    flex: 1,
    backgroundColor: "#FFA726",
    borderRadius: 100,
    overflow: "hidden",
    padding: 20,
    marginTop: 100,
  },
  textOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  ingredientsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  ingredientsTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DishDetails;
