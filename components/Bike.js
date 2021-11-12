import React from "react";
import { Text, View, Image } from "react-native";

const Bike = ({ bName, price }) => {
  return (
    <View style={{ height: 50, weightt: 40 }}>
      <Image
        source={{
          uri: "https://pngimg.com/uploads/bicycle/bicycle_PNG5392.png",
        }}
      ></Image>
    </View>
  );
};

export default Bike;
