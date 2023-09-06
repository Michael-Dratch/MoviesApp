import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Image,
} from "react-native";

export default function MoviesScreen({ changeScreen, goToEditScreen }) {
  const data = [
    { name: "John", rating: 100 },
    { name: "Bob", rating: 100 },
    { name: "Mei", rating: 100 },
    { name: "Steve", rating: 100 },
    { name: "Steve", rating: 100 },
  ];
  const item = ({ item }) => (
    <View style={styles.row}>
      <View
        style={{
          width: "60%",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "Black",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.name}
        </Text>
      </View>
      <View
        style={{
          width: "30%",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "Black",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {item.rating}
        </Text>
      </View>
      <View style={styles.editCell}>
        <Pressable
          onPress={() => {
            goToEditScreen(item.name);
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/pencil.png")}
          ></Image>
        </Pressable>
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
      <View style={styles.navbar}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Movie Ratings</Text>
      </View>
      <FlatList data={data} renderItem={item} />
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
  hearer: { fontSize: 20, fontWeight: "bold" },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  cell: {
    borderStyle: "solid",
    borderColor: "black",
  },
  navbar: {
    padding: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  editCell: {
    width: "20%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "Black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
