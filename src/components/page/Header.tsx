import { StyleSheet, Text } from "react-native";

const PageHeader = ({ content } : { content: string }) => {
  return <Text style={styles.text}>{ content }</Text>
};

export default PageHeader;

const styles = StyleSheet.create({
  text: {
    padding: 20,

    textAlign:  "center",
    fontFamily: "Montserrat_600SemiBold",
    fontSize:   32,
    letterSpacing: 1,

    color: "#5C6166"
  }
});