import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/LoginScreen.js";
import AddMovieScreen from "./app/AddMovieScreen.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <AddMovieScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
