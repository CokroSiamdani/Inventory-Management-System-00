import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { DataTable } from "react-native-paper";
import { MAINTENANCE_PC_LAPTOP_URL } from "../../api-url";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const read = async () => {
      try {
        const result = await axios.get(MAINTENANCE_PC_LAPTOP_URL);
        if (result) {
          setProducts(result?.data);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    read();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Maintenance",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView horizontal={true}>
        <DataTable style={{ marginTop: 30, marginBottom: 30 }}>
          <DataTable.Header style={{ width: 1000 }}>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Id
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Maintenance Date
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Category
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Item_name
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Brand
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Serial_number
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              User_Name
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Status
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Password 8 chars
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Password combination
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              Description
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView style={{ marginTop: -1 }}>
            {products &&
              products.map((pro, idx) => {
                let p = pro.id;
                let r = pro.maintenance_date;
                let o = pro.category;
                let d = pro.item_name;
                let u = pro.brand;
                let c = pro.serial_number;
                let t = pro.user_name;
                let s = pro.status;
                let a = pro.password_8_chars;
                let b = pro.password_combination;
                let e = pro.description;
                return (
                  <DataTable.Row key={idx} style={{ width: 1000 }}>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {p}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {r}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {o}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {d}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {u}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {c}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {t}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {s}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {a}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {b}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{ borderWidth: 1 }}
                      textStyle={{ textAlign: "auto", fontWeight: "200" }}
                    >
                      {e}
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })}
          </ScrollView>
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
