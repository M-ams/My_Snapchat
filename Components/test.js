





import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import * as Animatable from "react-native-animatable";
import {
  StyleSheet,
  Animated,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";

export default function register() {
  
  return (
    <View style={styles.register}>
      <FontAwesome5
        style={styles.snaplogo}
        name="snapchat-square"
        size={80}
        color="yellow"
      />
      <Animatable.Text
        style={styles.header}
        animation="bounceOut"
        iterationCount={"1"}
        direction="alternate-reverse"
      >
        Inscrivez-vous
      </Animatable.Text>
      <View style={styles.reg}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="mams@gmail.com"
          onChangeText={(email) => setEmail(email)}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />

        <Button
          style={styles.subbutton}
          title="S'inscrire"
          onPress={register}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 400,
    borderBottomWidth: 4,
    borderBottomColor: "#fff",
    width: "80%",
    paddingBottom: 10,
    position: "relative",
    top: 150,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  reg: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    padding: 30,
    bottom: 200,
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 20,
  },
  subbutton: {
    backgroundColor: "#36485f",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: "20%",
  },
  snaplogo: {
    top: 100,
    position: "relative",
  },
});
