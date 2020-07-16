import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((result) => {
        dispatch({
          type: "USER_LOGOUT",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          fontSize: 18,
          height: 50,
          textAlign: "center",
        }}
      >
        {`Logged in as: ${userSelector.username}`}
      </Text>

      <TouchableOpacity
        onPress={logoutHandler}
        activeOpacity={0.7}
        style={{
          borderRadius: 22,
          width: "100%",
          paddingVertical: 9,
          backgroundColor: "#f4511e",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            lineHeight: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
