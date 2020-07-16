import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import RestaurantStack from "./RestaurantStack";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f4511e",
        showLabel: false,
        style: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Restaurant"
        component={RestaurantStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              type="FontAwesome5"
              name="utensils"
              style={{ color, fontSize: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              type="FontAwesome5"
              name="user"
              style={{ color, fontSize: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
