import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        marginVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetailScreen", {
            restaurantDetailData: data,
          })
        }
      >
        <Image
          source={{
            uri: data.image,
          }}
          style={{ width: 330, height: 200 }}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 22,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Icon
              style={{
                fontSize: 13,
                color: "#ffd500",
                marginTop: 2,
                marginRight: 5,
              }}
              type="FontAwesome"
              name="star"
            />
            <Text
              style={{
                fontSize: 13,
              }}
            >
              {data.rating}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            {data.restaurantName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
