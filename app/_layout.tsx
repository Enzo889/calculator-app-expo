import { GlobalStyle } from "@/style/global-style";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={GlobalStyle.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
