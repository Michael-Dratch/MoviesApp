import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditMovieScreen({ movieTitle }) {
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
    <View style={styles.container}>
      <Text styles={styles.header}>Edit Movie Rating.</Text>
      <Text>{movieTitle}</Text>
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
});
