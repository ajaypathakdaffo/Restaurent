import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import BgImg from "../image/back.jpg";

function Contactus(props) {
  return (
    <View>
      <ImageBackground source={BgImg} style={{ height: "100%" }}>
        <Text>contck us page</Text>
        <View accessible={true}>
          <Text>text one</Text>
          <Text>text two</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Contactus;
