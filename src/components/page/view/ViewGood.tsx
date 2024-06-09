import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const ViewGood = ({ content, kind }: { content: string, kind: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <FontAwesome name="check-circle" size={32} color="#F8F9FA" style={{ marginRight: 10 }} />
        <Text style={styles.headingText}>{kind}</Text>
        <FontAwesome name="check-circle" size={32} color="#F8F9FA" style={{ marginRight: 10 }} />
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default ViewGood;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CBF99",
    borderRadius: 10,
    padding: 10,
    borderColor: "#6CBF43",
    borderWidth: 2,
    marginBottom: 20
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