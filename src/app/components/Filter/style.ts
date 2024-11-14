import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  pressable: {

  },
  text:{
    color: theme.colors.white,
    fontFamily:theme.fontFamily.medium,
    fontSize: 16,
  },
  pressableSelected:{
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  }

})