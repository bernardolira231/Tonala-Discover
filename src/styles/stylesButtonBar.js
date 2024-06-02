import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cameraButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: "#FF6347",
    borderRadius: 35,
    position: "absolute",
    // top: Platform.OS === "ios" ? -30 : -40,
    top: -10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cameraIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
