import { Pressable, StyleSheet, Text } from "react-native";
import { Link }                        from "expo-router";

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
    padding:      10,
    aspectRatio: 1.9,
    borderRadius: 10,
    elevation:     5,
    backgroundColor: "#FCFCFC"
  },
  title: {
    flex: 1,

    textAlign:  "center",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: '600',
    fontSize:      24,

    borderBottomColor: "#5C61660F",
    borderStyle:       "dotted",
    borderBottomWidth: 2,

    color: "#399EE6"
  },
  desc: {
    flex: 2,
    textAlign:  "center",
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    color: "#5C6166"
  }
});