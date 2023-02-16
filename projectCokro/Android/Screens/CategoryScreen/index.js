import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { CATEGORY } from "../../api-url";
import { DataTable } from "react-native-paper";
import axios from "axios";

const CategoryScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const read = async () => {
      try {
        const result = await axios.get(CATEGORY);
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
      title: "Category",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView horizontal={true}>
        <DataTable style={{ marginTop: 30, marginBottom: 30 }}>
          <DataTable.Header style={{ width: 500 }}>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              id
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              status
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              name
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView style={{ marginTop: -1 }}>
            {products &&
              products.map((pro, idx) => {
                let p = pro.id;
                let r = pro.status;
                let o = pro.name;
                return (
                  <DataTable.Row key={idx} style={{ width: 500 }}>
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
                  </DataTable.Row>
                );
              })}
          </ScrollView>
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
