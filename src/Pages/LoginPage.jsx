import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";

const musicLogo = require("../assets/logo.jpg");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signed, signIn } = useAuth();
  console.log(signed);

  const handleSignIn = () => {
    if (email && password) {
      signIn(email, password)
        .then(() => {
          Alert.alert("Cool.");
        })
        .catch((error) => {
          Alert.alert("Error", "Invalid credentials. Please try again.");
        });
    } else {
      Alert.alert("Error", "Please enter your email and password.");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={musicLogo} />

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={handleRegistration}
        >
          <Text style={styles.registerText}>Não tem conta? Registar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 50,
    },
    inputView: {
        width: 300,
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    loginButton: {
        width: 100,
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerText: {
        color: 'pink',
        fontSize: 16,
        opacity: 0.7,
    },
});
