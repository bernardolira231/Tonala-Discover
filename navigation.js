import React from 'react'
import { View, Platform, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MainDishes from './src/screens/dishesScreen/DishesScreen.jsx'
import HomePage from './src/screens/homeScreen/HomeScreen.jsx'
import DishDetails from './src/screens/dishDetailScreen/DishDetails.jsx'
import CameraScreen from './src/screens/cameraScreen/CameraScreen.jsx'
import FashionScreen from './src/screens/fashionScreen/FashionScreen.jsx'
import HandicraftScreen from './src/screens/handicraftScreen/HandicraftScreen.jsx'
import { styles } from './src/styles/stylesButtonBar.js'
import theme from './src/styles/theme.js'
import logo from './assets/img/logo.png'

const Tab = createBottomTabNavigator()
const InfoStack = createStackNavigator()
const HomeStack = createStackNavigator()

function HomeStackScreen () {
  return (
    <HomeStack.Navigator initialRouteName='HomeStack'>
      <HomeStack.Screen
        name='HomeStack'
        component={HomePage}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.bgColor,
            shadowColor: 'transparent',
            shadowOpacity: 0
          },
          headerTitle: () => (
            <Image
              style={{ width: 100, height: 40 }}
              source={logo}
              resizeMode='contain'
            />
          )
        }}
      />
      <HomeStack.Screen
        name='DishesStack'
        component={MainDishes}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name='DishDetails'
        component={DishDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

function MyStack () {
  return (
    <InfoStack.Navigator initialRouteName='DishesScreen'>
      <InfoStack.Screen
        name='DishesScreen'
        component={MainDishes}
        options={{ headerShown: false }}
      />
      <InfoStack.Screen
        name='DishDetails'
        component={DishDetails}
        options={{ headerShown: false }}
      />
    </InfoStack.Navigator>
  )
}

function MyTabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 15 : 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: theme.colors.bgColor,
          borderRadius: 15,
          height: 70,
          display: route.name === 'Camera' ? 'none' : 'flex', // Ocultar la tab bar en CameraScreen
          ...styles.shadow
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' size={30} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Fashion'
        component={FashionScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='tshirt-crew'
              size={30}
              color={color}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Camera'
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.cameraButton}>
              <MaterialCommunityIcons name='camera' color='white' size={40} />
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Dishes'
        component={MyStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='food-fork-drink'
              size={30}
              color={color}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Handicraft'
        component={HandicraftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='brush' size={30} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
