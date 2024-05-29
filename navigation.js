import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainDishes from "./src/components/MainDishes";
import HomePage from "./src/components/Home";
import DishDetails from "./src/components/DishDetails";
import CameraScreen from "./src/components/CameraScreen"; 

const Tab = createBottomTabNavigator();
const InfoStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="HomeStack">
      <HomeStack.Screen
        name="HomeStack"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="DishesStack"
        component={MainDishes}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function MyStack() {
  return (
    <InfoStack.Navigator initialRouteName="DishesScreen">
      <InfoStack.Screen
        name="DishesScreen"
        component={MainDishes}
        options={{ headerShown: false }}
      />
      <InfoStack.Screen
        name="DishDetails"
        component={DishDetails}
        options={{ headerShown: false }}
      />
    </InfoStack.Navigator>
  );
}

const CameraButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cameraButton}>
      <MaterialCommunityIcons name="camera" color="#fff" size={30} />
    </TouchableOpacity>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cameraIconContainer}>
              <CameraButton
                onPress={() => console.log("Camera Button Pressed")}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dishes"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    top: -30,
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
