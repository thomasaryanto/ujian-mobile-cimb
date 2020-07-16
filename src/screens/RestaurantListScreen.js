import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, SafeAreaView } from "react-native";
import RestaurantCard from "./RestaurantCard";
import Axios from "axios";
import { API_URL } from "../constants/API";

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: `Hello, ${userSelector.username}!`,
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: { alignSelf: "flex-end" },
    });

    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        setRestaurantList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderRestaurants = ({ item }) => {
    return <RestaurantCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <FlatList
          data={restaurantList}
          renderItem={renderRestaurants}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};
