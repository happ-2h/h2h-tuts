import { memo }                              from "react";
import { ColorSchemeName, StyleSheet, Text } from "react-native";

import { Colors }                            from "@constants/Colors";

const SubHeading = ({ content, theme }: { content: string, theme: ColorSchemeName }) => {
  return (
    <Text style={
      StyleSheet.flatten([
        styles.text,
        { color: Colors[theme].subheading }
    ])}>{ content }</Text>);
};

export default memo(SubHeading);

const styles = StyleSheet.create({
  text: {
    marginBottom:  5,
    fontFamily:   "Montserrat_500Medium",
    fontSize:     20,
    letterSpacing: 1
  }
});