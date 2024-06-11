import { StyleSheet, Text, View } from "react-native";
import { FontAwesome }            from '@expo/vector-icons';

const ViewError = ({ content, kind }: { content: string, kind: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <FontAwesome name={`exclamation-${kind == "error" ? "circle" : "triangle"}`} size={32} color="#E65050" style={{ marginRight: 10 }} />
        <Text style={styles.headingText}>{kind}</Text>
        <FontAwesome name={`exclamation-${kind == "error" ? "circle" : "triangle"}`} size={32} color="#E65050" style={{ marginRight: 10 }} />
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default ViewError;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding:      10,

    borderRadius: 10,
    borderWidth:   2,
    elevation:     1,

    borderColor:     "#E65050",
    shadowColor:     "#FF7383",
    backgroundColor: "#FF7383",

  },
  heading: {
    flexDirection:  "row",
    alignItems:     "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  headingText: {
    fontFamily: "Montserrat_500Medium",
    fontSize:     24,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#F8F9FA"
  },
  content: {
    fontFamily: "Montserrat_400Regular",
    letterSpacing: 0.5,
    lineHeight:     20,
    color: "#F8F9FA"
  }
});