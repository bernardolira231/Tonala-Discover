import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bg}>
        <View>
          <Text>HomePage</Text>
        </View>
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
});

export default Home;
