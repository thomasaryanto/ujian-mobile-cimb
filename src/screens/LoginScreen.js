import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        username,
      })
    );

    dispatch({
      type: "USER_LOGIN",
      payload: { username },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ justifyContent: "center", flex: 1 }}
      >
        <View
          style={{
            ...styles.contentContainer,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              height: 50,
              color: "#f4511e",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            TomatoApp
          </Text>
          <Icon
            style={{
              fontSize: 95,
              textAlign: "center",
              color: "#f4511e",
            }}
            type="MaterialCommunityIcons"
            name="food"
          />
          <View
            style={{
              borderRadius: 22,
              paddingVertical: 11,
              paddingHorizontal: 20,
              justifyContent: "center",
              marginTop: 58,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                opacity: 0.2,
                borderRadius: 22,
                ...StyleSheet.absoluteFillObject,
              }}
            />
            <TextInput
              autoCapitalize="none"
              placeholderTextColor="lightgrey"
              style={{
                fontSize: 17,
                lineHeight: 19,
              }}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          {/* button nih */}
          <TouchableOpacity
            onPress={loginBtnHandler}
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
              Enter
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
