import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Enter your username</Text>
      <TextInput name="username" label="username"></TextInput>
      <Button title={"Login"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: dodgerblue,
  },
});
