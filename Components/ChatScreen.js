import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Camera } from "expo-camera";

export default function ChatScreen() {
  return (
    <View style={styles.test}>
      <Text>chatScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
});
