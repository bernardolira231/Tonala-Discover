import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Other from "./src/components/OtherScreen";
import MainDishes from "./src/components/MainDishes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Gastronomy"
        component={MainDishes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={size}
              color={color}
            />
          ),
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
