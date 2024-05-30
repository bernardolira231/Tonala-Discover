import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
      {/* Aquí iría tu lógica para la cámara */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraScreen;
