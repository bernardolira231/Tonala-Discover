import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView } from "react-native";
import Dishes from "./Dishes.jsx";
import { StatusBar } from "expo-status-bar";

const MainDishes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bg}>
        <Dishes />
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  bg: {
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    flex: 1,
  },
  scrollViewContent: {},
});

export default MainDishes;
