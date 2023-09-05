// src/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const LoginScreen = () => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Implement your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your username to log in.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

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
});

export default LoginScreen;
