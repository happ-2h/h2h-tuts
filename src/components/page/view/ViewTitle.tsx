import { memo }                              from "react";
import { ColorSchemeName, StyleSheet, Text } from "react-native";

import { Colors }                            from "@constants/Colors";

const ViewTitle = ({ title, theme }: { title: string, theme: ColorSchemeName }) => {
  return (
    <Text style={
      StyleSheet.flatten([
        styles.text,
        {
          color:             Colors[(theme ? theme : "dark")].title,
          borderBottomColor: Colors[(theme ? theme : "dark")].separator
        }
    ])}>{ title }</Text>);
};

export default memo(ViewTitle);

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    padding:      10,

    textAlign:    "center",
    fontFamily:   "Montserrat_500Medium",
    fontSize:     24,
    letterSpacing: 1,

    borderBottomWidth: 2,
    borderStyle: "solid"
  }
});