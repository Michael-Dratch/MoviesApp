// src/LoginScreen.js
import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useForm } from "react-hook-form";

export default function LoginScreen({ changeScreen }) {
  const [username, setUsername] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("username");
  }, [register]);

  return (
    <SafeAreaView>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => {
            changeScreen("MoviesScreen");
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/back.png")}
          ></Image>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Enter your username to log in.</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={onChangeField("username")}
        />
        <Button title="Log in" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: 200,
    padding: 10,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
  image: {
    width: 40,
    height: 40,
  },
  navbar: {
    marginTop: 50,
  },
});
