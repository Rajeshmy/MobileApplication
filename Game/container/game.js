import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import data from "../static/data.json";

let Game = () => {
  let b = [
    {
      id: 100031911,
      title: "7 Days to Die",
      highlightsSupported: false,
      fullyOptimized: true,
      steamUrl: "https://store.steampowered.com/app/251570",
      publisher: "The Fun Pimps Entertainment LLC",
      genre: "Action,Adventure,Indie,",
      status: "AVAILABLE",
    },
  ];
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <View>
        <Text
          style={{
            color: "#FFF",
            fontSize: 20,
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
            marginHorizontal: "30%",
            marginVertical: 20,
          }}
        >
          Games List!!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {data.map((e) => {
          return (
            <View key={e.id}>
              <TouchableOpacity
                onPress={() => {
                  window.alert("you pressed : " + e.title);
                }}
              >
                <View
                  style={{
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 20,
                    margin: 20,
                    padding: 20,
                    marginHorizontal: 40,
                    backgroundColor: "grey",
                    width: "80%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{e.title}</Text>
                  <Text style={{ color: "white" }}>{e.publisher}</Text>
                  <Text style={{ color: "white" }}>{e.genre}</Text>
                  <Text style={{ color: "white" }}>{e.status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Game;
