import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

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
    backgroundColor: "#ff7383",
    borderRadius: 10,
    padding: 10,
    borderColor: "#E65050",
    borderWidth: 2,
    marginBottom: 20,
    elevation: 1,
    shadowColor: "#FF7383"

  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  headingText: {
    fontSize: 24,
    textTransform: "uppercase",
    color: "#F8F9FA"
  },
  content: {
    color: "#F8F9FA"
  }
});