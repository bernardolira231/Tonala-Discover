import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const DishItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize={"subheading"} fontWeight={"bold"}>
      {props.name}
    </StyledText>
    <StyledText color={"primary"}>{props.description}</StyledText>
    <StyledText color={"secondary"}>{props.ingredients.join(", ")}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default DishItem;
