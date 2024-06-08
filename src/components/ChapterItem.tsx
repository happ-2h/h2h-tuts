import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChapterItem = ({ details, book }) => {
  // let [fontsLoaded, fontError]

  return (
    <Link href={{
      pathname: `/books/${details.id}`,
      params: {
        book
      }
    }} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.desc}>{details.desc}</Text>
      </Pressable>
    </Link>
  );
};

export default ChapterItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    aspectRatio: 1.9
  },
  title: {
    flex: 1,
    color: "#399EE6",
    textAlign: "center",
    fontSize: 24,
    fontWeight: '600',
    fontFamily: "Montserrat_600SemiBold",
    borderBottomColor: "#5C61660F",
    borderStyle: "dotted",
    borderBottomWidth: 2
  },
  desc: {
    flex: 2,
    textAlign: "center",
    color: "#5C6166",
    fontFamily: "Montserrat_400Regular",
    fontSize: 20
  }
});