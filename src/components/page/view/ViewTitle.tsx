import { StyleSheet, Text } from "react-native";

const ViewTitle = ({ title }: { title: string }) => {
  return <Text style={styles.text}>{title}</Text>
};

export default ViewTitle;

const styles = StyleSheet.create({
  text: {
    color: "#5C6166",
    textAlign: "center",
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 10,
    padding: 10,
    borderBottomColor: "#5C61660F",
    borderStyle: "solid",
    borderBottomWidth: 2
  }
});