import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/LoginScreen.js";
import AddMovieScreen from "./app/AddMovieScreen.js";
import MoviesScreen from "./app/MoviesScreen.js";
import EditMovieScreen from "./app/EditMovieScreen.js";

export default function App() {
  const [screenType, setScreen] = useState("");

  const changeScreen = (screenType) => {
    setScreen(screenType);
  };
  let screen;
  switch (screenType) {
    case "":
      screen = <MoviesScreen changeScreen={changeScreen}></MoviesScreen>;
      break;
    case "MoviesScreen":
      screen = <MoviesScreen changeScreen={changeScreen}></MoviesScreen>;
      break;
    case "LoginScreen":
      screen = <LoginScreen changeScreen={changeScreen}></LoginScreen>;
      break;
    case "AddMovieScreen":
      screen = <AddMovieScreen changeScreen={changeScreen}></AddMovieScreen>;
      break;
    case "EditMovieScreen":
      screen = <EditMovieScreen></EditMovieScreen>;
      break;
  }

  return <View style={styles.container}>{screen}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
