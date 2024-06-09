import { StyleSheet, Text } from "react-native";

const PageHeader = ({ content } : { content: string }) => {
  return <Text style={styles.text}>{ content }</Text>
};

export default PageHeader;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: "center",
    padding: 20,
    color: "#5C6166"
  }
});