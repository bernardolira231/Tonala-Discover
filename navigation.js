import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Other from "./src/components/OtherScreen";
import MainDishes from "./src/components/MainDishes";
import HomePage from "./src/components/Home";
import DishDetails from "./src/components/DishDetails";

const Tab = createBottomTabNavigator();
const InfoStack = createStackNavigator();

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

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
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
      <Tab.Screen name="Other" component={Other} />
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
