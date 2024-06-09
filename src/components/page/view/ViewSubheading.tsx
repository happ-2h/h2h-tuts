import { StyleSheet, Text } from "react-native";

const SubHeading = ({ content }: { content: string }) => {
  return <Text style={styles.text}>{ content }</Text>;
};

export default SubHeading;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '100',
    color: "#1F2430",
    marginBottom: 5
  }
});