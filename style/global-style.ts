import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: "400",
    // fontFamily: "SpaceMono",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300",
    // fontFamily: "SpaceMono",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 18,
  },

  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: Colors.textPrimary,
    fontSize: 24.5,
    fontWeight: "300",
    fontFamily: "SpaceMono",
  },
});
