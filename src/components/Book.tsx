import { BookCover } from "@/types";
import { defaultImage } from "@assets/data/bookCovers";
import { Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from "@expo-google-fonts/montserrat";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Book = ({ book }: { book: BookCover }) => {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular
  });

  if (!fontsLoaded && !fontError) {
    // TODO: font load fail handler
    return null;
  }

  return (
    <Pressable style={styles.container}>
      <Image 
        style={styles.image}
        source={ book.img || defaultImage }
      />
      <View style={{ flexShrink: 1 }}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.desc} numberOfLines={5}>{book.desc}</Text>
      </View>
    </Pressable>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FCFCFC",
    borderRadius: 10,
    padding: 10,
    elevation: 5
  },
  image: {
    width: 120,
    height: undefined,
    aspectRatio: 1/1.5,
    borderRadius: 10,
    marginRight: 20
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
    color: "#399EE6",
    borderBottomColor: "#5C61660F",
    borderBottomWidth: 1
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
    color: "#5C6166",
    flexShrink: 1
  }
});