import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainDishes from "./src/components/MainDishes";
import HomePage from "./src/components/Home";
import DishDetails from "./src/components/DishDetails";
import CameraScreen from "./src/components/CameraScreen";
import CarouselItem from "./src/components/CarouselItem";
import FashionScreen from "./src/components/FashionScreen";
import HandicraftScreen from "./src/components/HandicraftScreen";
import { styles } from "./src/styles/stylesButtonBar.js";

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
      <HomeStack.Screen
        name="DishDetails"
        component={DishDetails}
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
      <MaterialCommunityIcons name="camera" color="#fff" size={40} />
    </TouchableOpacity>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6346",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS === "ios" ? 15 : 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Fashion"
        component={FashionScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tshirt-crew"
              size={30}
              color={color}
            />
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={30}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Handicraft"
        component={HandicraftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="brush" size={30} color={color} />
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
