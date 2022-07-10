import React, { useState, useEffect, switchState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Torch from "react-native-torch";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';


export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //choisir image du téléphone
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.body}>
      <Camera style={styles.cam} type={type}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.camButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons
              name="md-camera-reverse-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flash}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              );
            }}
          >
            <Ionicons name="md-flash" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.capture}>
          <Entypo name="circle" size={70} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.folderImg}>
          <Entypo name="image" size={24} color="white" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.messageIcon}
          onPress={() => navigation.navigate("Message")}
        >
          <Feather name="message-square" size={30} color="white" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  cam: {
    flex: 1,
  },
  camButton: {
    flex: 0.1,
    // margin: "auto",
    left: "48%",
    marginTop: 100,
    alignItems: "center",
  },
  capture: {
    border: "4px solid #fff",
    margin: "auto",
    alignItems: "center",
    marginBottom: 80,
  },
  folderImg: {
    position: "absolute",
    marginTop: "186%",
    marginLeft: "54%",
    alignItems: "center",
  },
  flash: {
    flex: 0.1,
    left: "42.5%",
    marginTop: 140,
    alignItems: "center",
  },
  messageIcon: {
    position: "absolute",
    marginTop: "186%",
    marginLeft: "28%",
  },
});
