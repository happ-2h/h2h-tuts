import { memo }             from "react";
import { StyleSheet, Text } from "react-native";

const ViewText = ({ content }: { content: string }) => {
  return <Text style={ styles.text }>{ content }</Text>
};

export default memo(ViewText);

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontFamily: "Montserrat_400Regular",
    letterSpacing: 0.5,
    lineHeight:     20,
    color: "#5C6166"
  }
});