import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantListScreen from "../screens/RestaurantListScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={RestaurantListScreen}
        name="RestaurantListScreen"
      />
      <Stack.Screen
        component={RestaurantDetailScreen}
        name="RestaurantDetailScreen"
      />
    </Stack.Navigator>
  );
};
