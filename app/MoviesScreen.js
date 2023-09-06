import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function MoviesScreen({ changeScreen }) {
  const data = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
    { id: 3, name: "Mei", email: "mei@gmail.com" },
    { id: 4, name: "Steve", email: "steve@gmail.com" },
  ];
  const item = ({ item }) => (
    <View style={styles.row}>
      <View style={{ width: "10%", backgroundColor: "lightyellow" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.id}
        </Text>
      </View>
      <View style={{ width: "60%", backgroundColor: "lightpink" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.name}
        </Text>
      </View>
      <View style={{ width: "20%", backgroundColor: "lavender" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.email}
        </Text>
      </View>
      <View style={{ width: "10%", backgroundColor: "lavender" }}>
        <Button
          title="Edit"
          onPress={() => {
            changeScreen("EditMovieScreen");
          }}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View styles={styles.navbar}>
        <Button
          title="Log in"
          onPress={() => {
            changeScreen("LoginScreen");
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add Movie"
        onPress={() => {
          changeScreen("AddMovieScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
  },
  head: { height: 44, backgroundColor: "lavender" },
  row: { flexDirection: "row", borderColor: "blue" },
  navbar: {
    backgroundColor: "#0000ff",
  },
});
