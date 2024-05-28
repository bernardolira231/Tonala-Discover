import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView } from "react-native";
import Dishes from "./Dishes.jsx";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bg}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.h1}>Dishes</Text> 
          <Dishes />
          <StatusBar style="light" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
    color: "#E0E0E0",
  },
  bg: {
    backgroundColor: "#00131f",
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
});

export default Main;
