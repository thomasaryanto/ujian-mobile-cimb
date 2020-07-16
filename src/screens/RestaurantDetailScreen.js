import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";

export default (props) => {
  const { restaurantDetailData } = props.route.params;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: restaurantDetailData.restaurantName,
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView />
      <Image
        source={{
          uri: restaurantDetailData.image,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "row",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Rating
        </Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Icon
            style={{
              fontSize: 17,
              color: "#ffd500",
              marginTop: 3,
              marginRight: 5,
            }}
            type="FontAwesome"
            name="star"
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            {restaurantDetailData.rating}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
          }}
        >
          Address
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {restaurantDetailData.address}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
          }}
        >
          Cuisines
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {restaurantDetailData.cuisine}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
          }}
        >
          Open
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {restaurantDetailData.openTime} AM to {restaurantDetailData.closeTime}{" "}
          PM
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
          }}
        >
          Cost for 2
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {restaurantDetailData.currency} {restaurantDetailData.costForTwo}
        </Text>
      </ScrollView>
    </View>
  );
};
