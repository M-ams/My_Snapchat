// import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
} from "react-native";

export default function MessageScreen({ navigation, route }) {
  const req = route.token || "unknown";
  const headers = "Content-Type: multipart/form-data";
  const [rep, setRep] = React.useState([]);

  axios
    .get("http://snapi.epitech.eu:8000/all", { headers: req })
    .then((response) => {
      if (response.status === 200) {
        const rep = response.data.data;
        setRep(rep);
      } else {
        Alert.alert("error : " + response.data);
      }
    })
    .catch((err) => {
      
      Alert.alert(err.data);
      alert("An error occurred. Please try again later.");
    });

  const lapsList = rep.slice(0, 10).map((email) => {
    return (
      <View>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("Chat", { token: email.email })}
        >
          <Text style={styles.carre}>recu</Text>
          {email.email}
        </Text>
        <Text></Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text>Your Messagehhh</Text>
      {lapsList}
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    border: "1px solid window",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "wildblue",
  },
  carre: {
    fontSize: 20,
    color: "black",
    border: "1px solid window",
    margin: 10,
    width: "5%",
    height: "50%",
    textAlign: "center",
    backgroundColor: "blue",
  },
});

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';

// class App extends Component {
//   state = {
//     messages: [
//       {
//         _id: 1,
//         text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'FAQ Bot',
//           avatar: 'https://i.imgur.com/7k12EPD.png'
//         }
//       }
//     ]
//   };

//   onSend(messages = []) {
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages)
//     }));
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#fff' }}>
//         <GiftedChat
//           messages={this.state.messages}
//           onSend={messages => this.onSend(messages)}
//           user={{
//             _id: 1
//           }}
//         />
//       </View>
//     );
//   }
// }

// export default App;
