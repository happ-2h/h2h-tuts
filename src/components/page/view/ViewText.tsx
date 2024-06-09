import { StyleSheet, Text } from "react-native";

const ViewText = ({ content }: { content: string }) => {
  return <Text style={styles.text}>{content}</Text>
};

export default ViewText;

const styles = StyleSheet.create({
  text: {
    color: "#000",
    marginBottom: 20
  }
});