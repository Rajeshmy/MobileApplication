import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ToastAndroid,
} from "react-native";
import data from "../static/data.json";
import Toast from "react-native-toast-message";

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

  const showToast = (e) => {
    // Toast.show({
    //   type: "success",
    //   text1: e,
    //   text2: "Pressed above game!!",
    //   position: "bottom",
    // });

    ToastAndroid.show(
      "You pressed: " + e,
      ToastAndroid.SHORT,

      ToastAndroid.TOP
    );
  };

  return (
    <View style={{ flex: 1 }}>
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
                    showToast(e.title);
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
    </View>
  );
};

export default Game;
