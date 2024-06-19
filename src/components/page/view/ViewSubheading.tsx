import { memo }             from "react";
import { StyleSheet, Text } from "react-native";

const SubHeading = ({ content }: { content: string }) => {
  return <Text style={ styles.text }>{ content }</Text>;
};

export default memo(SubHeading);

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
    fontFamily: "Montserrat_500Medium",
    fontSize:   20,
    letterSpacing: 1,
    color: "#1F2430"
  }
});