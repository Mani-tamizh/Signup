 import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import LoginScreen from './src/screen/LoginScreen.jsx';
import SignupScreen from './src/screen/SignupScreen.jsx';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Define Stack Navigator
const Stack = createStackNavigator();

// Create a Stack Navigator for Authentication
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        {/* Tabs */}
        <Tab.Screen 
        name="Home" 
        component={LoginScreen} 
        options={{
          tabBarIcon: ({ color, size,focused }) => (
            <AntDesign name='home' size={size} color={focused? 'blue':'black'} />
          )
        }} 
      />
      <Tab.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="user-o" size={size} color={focused ? "red":"black"} />
          )
        }} 
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
