import { StyleSheet, Text } from "react-native";

const ViewTitle = ({ title }: { title: string }) => {
  return <Text style={ styles.text }>{ title }</Text>
};

export default ViewTitle;

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    padding:      10,

    textAlign:  "center",
    fontFamily: "Montserrat_500Medium",
    fontSize:   24,
    letterSpacing: 1,

    borderBottomWidth: 2,
    borderStyle: "solid",

    borderBottomColor: "#5C61660F",
    color: "#1F2430"
  }
});