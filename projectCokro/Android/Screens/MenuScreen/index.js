import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Menu",
      headerTitleAlign: "center",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const maintenance = () => {
    navigation.navigate("HomeScreen");
  };

  const stock = () => {
    navigation.navigate("StockScreen");
  };

  const category = () => {
    navigation.navigate("CategoryScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={maintenance}>
        <Text style={styles.loginText}>Maintenance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={stock}>
        <Text style={styles.loginText}>stock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={category}>
        <Text style={styles.loginText}>category</Text>
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
    backgroundColor: "#97233F",
    marginBottom: 15,
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

export default MenuScreen;
