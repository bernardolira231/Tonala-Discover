import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText.jsx";

const DishItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Image
      source={{ uri: props.image }}
      style={{
        //  width: 80,
        //  height: 80,
        //  borderRadius: 80 / 2
        width: "100%",
        height: 200,
      }}
    />
    <View style={{ padding: 10 }}>
      <StyledText fontSize={"subheading"} fontWeight={"bold"}>
        {props.name}
      </StyledText>
      <StyledText color={"primary"} style={{marginVertical: 5,}}>{props.description}</StyledText>
      <StyledText color={"secondary"}>
        {props.ingredients.join(", ")}
      </StyledText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingBottom: 5,
    // paddingTop: 5,
    backgroundColor: "#2C3E50",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
    overflow: "hidden",
  },
});

export default DishItem;
