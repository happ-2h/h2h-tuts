import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  useFonts
} from "@expo-google-fonts/montserrat";

import { defaultImage } from "@assets/data/bookCovers";

import { BookCover }    from "@/types";

const Book = ({ book }: { book: BookCover }) => {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_300Light
  });

  if (!fontsLoaded && !fontError) {
    // TODO: font load fail handler
    return null;
  }

  return (
    <Link href={{
      pathname: `/chapters/${ book.id }`,
      params: {
        icon:      book.icon[0],
        iconColor: book.icon[1]
      }
    }} asChild>
      <Pressable style={ styles.container }>
        <Image
          style={ styles.image }
          source={ book.img || defaultImage }
        />
        <View style={{ flexShrink: 1 }}>
          <Text style={ styles.title }>{ book.title }</Text>
          <Text style={ styles.desc } numberOfLines={ 5 }>{ book.desc }</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:      10,
    borderRadius: 10,
    elevation:     5,
    backgroundColor: "#FCFCFC"
  },
  image: {
    width: 120,
    height: undefined,
    aspectRatio: 1/1.5,

    borderRadius: 10,
    marginRight:  20
  },
  title: {
    marginBottom: 5,

    textAlign:  "center",
    fontFamily: 'Montserrat_600SemiBold',
    fontSize:   24,
    color: "#399EE6",

    borderBottomColor: "#5C61660F",
    borderBottomWidth: 1
  },
  desc: {
    flexShrink: 1,
    fontFamily: 'Montserrat_400Regular',
    fontSize:   12,
    color: "#5C6166"
  }
});