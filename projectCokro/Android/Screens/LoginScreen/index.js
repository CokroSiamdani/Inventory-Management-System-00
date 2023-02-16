import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LOGIN_URL, TOKEN_URL } from "../../api-url";
import React, { useLayoutEffect, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import image from "../../assets/logo-1.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  const login = async () => {
    if (email !== "") {
      if (password !== "") {
        try {
          const csrf = await axios.get(TOKEN_URL);
          if (csrf) {
            const request = {
              method: "post",
              url: LOGIN_URL,
              headers: {
                Accept: "application/json, text-plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": csrf?.data,
              },
              data: { email, password },
            };
            const res = await axios(request);
            if (res?.data == "true") {
              setEmail("");
              setPassword("");
              navigation.navigate("MenuScreen");
            }
          }
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageLogo} source={image} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="EMAIL"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "ios-eye" : "ios-eye-off"}
            color="#AEBCC3"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imageLogo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignItems: "center",
  },

  inputView: {
    flexDirection: "row",
    backgroundColor: "#97233F",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    height: "100%",
    flex: 1,
    padding: 4,
    color: "#FFB612",
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  registerBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  loginText: {
    color: "#EFEFEF",
  },

  registerText: {
    color: "#EFEFEF",
  },
});

export default LoginScreen;
