import { memo }                              from "react";
import { ColorSchemeName, StyleSheet, Text } from "react-native";

import { Colors }                            from "@constants/Colors";

const ViewText = ({ content, theme }: { content: string, theme: ColorSchemeName }) => {
  return (
    <Text style={
      StyleSheet.flatten([
        styles.text,
        { color: Colors[(theme ? theme : "dark")].fg }
    ])}>{ content }</Text>);
};

export default memo(ViewText);

const styles = StyleSheet.create({
  text: {
    marginBottom:   20,
    fontFamily:    "Montserrat_400Regular",
    letterSpacing: 0.5,
    lineHeight:     20
  }
});