import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

import { Camera } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.body}>
      <MaterialCommunityIcons name="snapchat" size={80} color="black" />
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.txt_menu}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.txt_menu}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "yellow",
    paddingTop: 300,
    alignItems: "center",
  },
  btn1: {
    width: 500,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 320,
    backgroundColor: "red",
  },
  btn2: {
    width: 500,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BFFF",
  },
  txt_menu: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
});
