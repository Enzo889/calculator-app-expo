import { GlobalStyle } from "@/style/global-style";
import React from "react";
import { Text, type TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
  children: string;
  variant?: "h1" | "h2";
}
const ThemeText = ({ children, variant = "h1", ...rest }: ThemeTextProps) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" ? GlobalStyle.mainResult : GlobalStyle.subResult,
      ]}
      {...rest}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {" "}
      {children}{" "}
    </Text>
  );
};

export default ThemeText;
