import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LocationsScreen from '../../container/Locations.js';
import MenuScreen from '../../container/Menu.js';
import HomeScreen from '../../container/Home.js';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}
