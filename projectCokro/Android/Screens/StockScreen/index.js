import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { DataTable } from "react-native-paper";
import { STOCK } from "../../api-url";
import axios from "axios";

const StockScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const read = async () => {
      try {
        const result = await axios.get(STOCK);
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
      title: "Stock",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView horizontal={true}>
        <DataTable style={{ marginTop: 30, marginBottom: 30 }}>
          <DataTable.Header style={{ width: 2000 }}>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              product_name
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              specification
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              serial_number
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              buy_date
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              expired_date
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              price
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              brand
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              category_id
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              nilai_asset
            </DataTable.Title>
            <DataTable.Title
              style={{ borderWidth: 3, backgroundColor: "red" }}
              textStyle={{ textAlign: "auto", fontWeight: "200" }}
            >
              deskripsi
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView style={{ marginTop: -1 }}>
            {products &&
              products.map((pro, idx) => {
                let p = pro.product_name;
                let r = pro.specification;
                let o = pro.serial_number;
                let d = pro.buy_date;
                let u = pro.expired_date;
                let c = pro.price;
                let t = pro.brand;
                let s = pro.category_id;
                let a = pro.nilai_asset;
                let b = pro.deskripsi;
                return (
                  <DataTable.Row key={idx} style={{ width: 2000 }}>
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
                  </DataTable.Row>
                );
              })}
          </ScrollView>
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default StockScreen;
