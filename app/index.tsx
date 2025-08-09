import CalculatorBtn from "@/components/CalculatorBtn";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { GlobalStyle } from "@/style/global-style";
import React from "react";
import { View } from "react-native";

const CalCulatorApp = () => {
  const { buildNumber, formula, number, prevNumber } = useCalculator();
  return (
    <View style={GlobalStyle.calculatorContainer}>
      {/* resultados */}
      <View style={{ paddingHorizontal: 30, marginVertical: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* filas de botones */}
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="C" blackText color={Colors.lightGray} />
        <CalculatorBtn label="+/-" blackText color={Colors.lightGray} />
        <CalculatorBtn label="del" blackText color={Colors.lightGray} />
        <CalculatorBtn label="÷" color={Colors.orange} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="7" />
        <CalculatorBtn label="8" />
        <CalculatorBtn label="9" />
        <CalculatorBtn label="X" color={Colors.orange} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="4" />
        <CalculatorBtn label="5" />
        <CalculatorBtn label="6" />
        <CalculatorBtn label="-" color={Colors.orange} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="1" />
        <CalculatorBtn label="2" />
        <CalculatorBtn label="3" />
        <CalculatorBtn label="+" color={Colors.orange} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn doubleSize label="0" />
        <CalculatorBtn label="." />
        <CalculatorBtn label="=" color={Colors.orange} />
      </View>
    </View>
  );
};

export default CalCulatorApp;
