import {
  ColorSchemeName,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
}               from "react-native";
import { Link } from "expo-router";

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  useFonts
} from "@expo-google-fonts/montserrat";

import {
  Inconsolata_400Regular
} from "@expo-google-fonts/inconsolata";

import { defaultImage } from "@assets/data/bookCovers";
import { Colors }       from "@constants/Colors";

import { BookCover }    from "@/types";

const Book = ({ book, theme }: { book: BookCover, theme: ColorSchemeName }) => {
  theme = theme ? theme : "dark";

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_300Light,
    Inconsolata_400Regular
  });

  if (!fontsLoaded && !fontError)
    // TODO: font load fail handler
    return <>Font failed to load</>;

  return (
    <Link href={{
      pathname: `/chapters/${ book.id }`,
      params: {
        icon:           book.icon[0],
        iconColorLight: book.icon[1],
        iconColorDark:  book.icon[2]
      }
    }} asChild>
      <Pressable style={
        StyleSheet.flatten([
          styles.container,
          { backgroundColor: Colors[theme].book_background }
        ]) }>
        <Image
          style={ styles.image }
          source={ book.img || defaultImage }
        />
        <View style={{ flexShrink: 1 }}>
          <Text style={
            StyleSheet.flatten([
              styles.title,
              {
                color:             Colors[theme].ch_title,
                borderBottomColor: Colors[theme].separator
              }
          ])}>{ book.title }</Text>
          <Text style={
            StyleSheet.flatten([
              styles.desc,
              { color: Colors[theme].fg }
            ])
          } numberOfLines={ 5 }>{ book.desc }</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:       10,
    borderRadius:  10,
    elevation:      5
  },
  image: {
    width:  120,
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

    borderBottomWidth: 1
  },
  desc: {
    flexShrink: 1,
    fontFamily: 'Montserrat_400Regular',
    fontSize:   12,
  }
});