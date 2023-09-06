import {
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditMovieScreen({ movieTitle, changeScreen }) {
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
    register("rating");
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
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
          Edit Movie Rating.
        </Text>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>{movieTitle}</Text>
        <TextInput
          style={styles.input}
          placeholder="Rating"
          onChangeText={onChangeField("rating")}
        />
        <Button
          title="Update Movie Rating"
          onPress={handleSubmit(onSubmit)}
          style={styles.submitButton}
        />
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
  input: {
    width: 200,
    padding: 10,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
  header: {
    fontWeight: "bold",
    margin: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  navbar: {
    marginTop: 50,
    right: 60,
  },
});
