import { memo }                              from "react";
import { ColorSchemeName, StyleSheet, Text } from "react-native";

import { Colors }                            from "@constants/Colors";

const PageHeader = ({ content, theme } : { content: string, theme: ColorSchemeName }) => {
  return <Text style={
    StyleSheet.flatten([
      styles.text,
      { color: Colors[(theme ? theme : "dark")].fg }
  ])}>{ content }</Text>
};

export default memo(PageHeader);

const styles = StyleSheet.create({
  text: {
    padding: 20,

    textAlign:     "center",
    fontFamily:    "Montserrat_600SemiBold",
    fontSize:      32,
    letterSpacing:  1
  }
});