import CalculatorBtn from "@/components/CalculatorBtn";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { GlobalStyle } from "@/style/global-style";
import React from "react";
import { View } from "react-native";

const CalCulatorApp = () => {
  const {
    buildNumber,
    formula,
    prevNumber,
    clean,
    toggleSign,
    divideOperation, 
    addOperation, 
    multiplyOperation, 
    subtractOperation,
    deleteLast,
    calculateResult
  } = useCalculator();
  return (
    <View style={GlobalStyle.calculatorContainer}>
      {/* resultados */}
      <View style={{ paddingHorizontal: 30, marginVertical: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* filas de botones */}
      <View style={GlobalStyle.row}>
        <CalculatorBtn
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />
        <CalculatorBtn
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSign}
        />
        <CalculatorBtn
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />
        <CalculatorBtn label="÷" color={Colors.orange} onPress={divideOperation} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="7" onPress={() => buildNumber("7")} />
        <CalculatorBtn label="8" onPress={() => buildNumber("8")} />
        <CalculatorBtn label="9" onPress={() => buildNumber("9")} />
        <CalculatorBtn label="X" color={Colors.orange} onPress={multiplyOperation} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="4" onPress={() => buildNumber("4")} />
        <CalculatorBtn label="5" onPress={() => buildNumber("5")} />
        <CalculatorBtn label="6" onPress={() => buildNumber("6")} />
        <CalculatorBtn label="-" color={Colors.orange} onPress={subtractOperation} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn label="1" onPress={() => buildNumber("1")} />
        <CalculatorBtn label="2" onPress={() => buildNumber("2")} />
        <CalculatorBtn label="3" onPress={() => buildNumber("3")} />
        <CalculatorBtn label="+" color={Colors.orange} onPress={addOperation} />
      </View>
      <View style={GlobalStyle.row}>
        <CalculatorBtn doubleSize label="0" onPress={() => buildNumber("0")} />
        <CalculatorBtn label="." onPress={() => buildNumber(".")} />
        <CalculatorBtn label="=" color={Colors.orange} onPress={calculateResult} />
      </View>
    </View>
  );
};

export default CalCulatorApp;
