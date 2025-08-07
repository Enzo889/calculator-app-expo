import { GlobalStyle } from "@/style/global-style";
import React from "react";
import { Text, View } from "react-native";

const CalCulatorApp = () => {
  return (
    <View style={GlobalStyle.calculatorContainer}>
      <Text style={GlobalStyle.mainResult}>50 x 50</Text>
      <Text style={GlobalStyle.subResult}>2500</Text>
    </View>
  );
};

export default CalCulatorApp;
