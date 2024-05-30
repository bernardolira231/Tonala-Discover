import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TryCarousel from "../../components/TryCarousel.jsx";
import dishes from "../../../data/dishes.json";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TryCarousel header="Dishes" data={dishes} screen="Dishes" />
        </ScrollView>
        <StatusBar style="auto" />
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
});

export default Home;
