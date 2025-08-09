import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/style/global-style";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface CalculatorBtnProps {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress?: () => void;
}

const CalculatorBtn = ({
  label,
  color = Colors.darkGray,
  onPress,
  doubleSize = false,
  blackText = false,
}: CalculatorBtnProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...GlobalStyle.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        if (onPress) {
          onPress();
        }
        Haptics.selectionAsync();
      }}
    >
      <Text
        style={{
          ...GlobalStyle.buttonText,
          color: blackText ? "black" : Colors.textPrimary,
        }}
        onPress={onPress}
      >
        {" "}
        {label}{" "}
      </Text>
    </Pressable>
  );
};
export default CalculatorBtn;
