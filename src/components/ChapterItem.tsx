import {
  ColorSchemeName,
  Pressable,
  StyleSheet,
  Text
}               from "react-native";
import { Link } from "expo-router";

import { Colors }              from "@constants/Colors";
import { BookTableOfContents } from "@/types";

type ChapterItemParamTypes = {
  details: BookTableOfContents;
  book:    string | string[];
  theme:   ColorSchemeName;
};

const ChapterItem = ({ details, book, theme }: ChapterItemParamTypes) => {
  return (
    <Link href={{
      pathname: `/books/${ details.id }`,
      params: {
        book
      }
    }} asChild>
      <Pressable style={
        StyleSheet.flatten([
          styles.container,
          { backgroundColor: theme === "dark" ? "#0D1017" : "#FCFCFC" }
        ])}>
        <Text style={
          StyleSheet.flatten([
            styles.title,
            {
              color:             Colors[theme].ch_title,
              borderBottomColor: Colors[theme].separator
            }
          ])}>{ details.title }</Text>
        <Text style={
          StyleSheet.flatten([
            styles.desc,
            { color: Colors[theme].fg }
          ])}>{ details.desc }</Text>
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
    elevation:     5
  },
  title: {
    flex: 1,

    textAlign:  "center",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: '600',
    fontSize:      24,

    borderStyle: "dotted",
    borderBottomWidth: 2
  },
  desc: {
    flex:        2,
    marginTop:  20,
    textAlign:  "center",
    fontFamily: "Montserrat_400Regular",
    fontSize:   20
  }
});