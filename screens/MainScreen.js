import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Select from "../components/Select";
import GetProducts from "../components/GetProducts";

export default function MainScreen({ navigation, route }) {
  const dv = [
    { id: 1, name: "Проба" },
    { id: 2, name: "Проба2" },
    { id: 3, name: "Проба3" },
    { id: 4, name: "Проба4" },
    { id: 5, name: "Проба5" },
  ];
  const dv2 = [
    { code1c: 1, name: "0001" },
    { code1c: 2, name: "0001Проба2" },
    { code1c: 3, name: "0001Проба3" },
    { code1c: 4, name: "0001Проба4" },
    { code1c: 5, name: "0001Проба5" },
  ];

  const [vtext, setText] = useState("");
  const [vtext1, setText1] = useState("");
  const [vtext2, setText2] = useState("");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
       
    }, []);


  useEffect(() => {
    if (route.params != undefined) {
      const { nomenFind } = route.params;
      if (nomenFind != undefined) {
        setText2(nomenFind.name);
      }
    }
  }, [route]);
  return (
    <View style={styles.container}>
      
      <GetProducts
      setData = {setData}
      strFind = '12'/>
      <GetProducts
      setData = {setData2}
      strFind = '1'/>

      <Text>Новый модуль</Text>
      <Text>{vtext}</Text>
      <Text>{"\n"}</Text>
      <Button title="Поиск" onPress={() => navigation.navigate("Find")} />
      <TextInput
        style={styles.text}
        value={vtext}
        onChangeText={setText}
        placeholder="Введите текст"
      />
      <View style={styles.touchableContainer}>
        <Text>{vtext1}</Text>
        <Select
          Caption="Выберите для первого"
          data={data}
          SelectValue={vtext1}
          SetSelectValue={setText1}
        />
      </View>
      <View style={styles.touchableContainer}>
        <Text>{vtext2}</Text>
        <Select
          data={data2}
          // vKey="code1c"
          SelectValue={vtext2}
          SetSelectValue={setText2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
