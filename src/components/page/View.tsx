import { memo, useMemo }                     from "react";
import { ColorSchemeName, StyleSheet, View } from "react-native";

import SubHeading from "./view/ViewSubheading";
import ViewCode   from "./view/ViewCode";
import ViewError  from "./view/ViewError";
import ViewGood   from "./view/ViewGood";
import ViewText   from "./view/ViewText";
import ViewTitle  from "./view/ViewTitle";

import { Colors }                from "@constants/Colors";
import { ChapterContentContent } from "@/types";

type PageViewParamTypes = {
  title:   string;
  content: ChapterContentContent[];
  theme:   ColorSchemeName;
};

const PageView = ({ title, content, theme }: PageViewParamTypes) => {
  theme = theme ? theme : "dark";
  const memo_content = useMemo(() => content, [content]);

  return (
    <View style={
      StyleSheet.flatten([
        styles.container,
        { backgroundColor: Colors[theme].view_bg }
    ])}>
      <ViewTitle title={ title } theme={ theme } />
      {
        memo_content.map(item => {
          switch(item.type) {
            case "text":
              return <ViewText   key={ item.content } content={ item.content } theme={ theme } />;
            case "error":
              return <ViewError  key={ item.content } content={ item.content } theme={ theme }
                kind={ item.kind as string } />;
            case "good":
              return <ViewGood   key={ item.content } content={ item.content }
                kind={ item.kind as string } />;
            case "subheading":
              return <SubHeading key={ item.content } content={ item.content } theme={ theme } />;
            case "code":
              return <ViewCode   key={ item.content } content={ item.content } theme={ theme } />;
          }
        })
      }
    </View>
  );
};

export default memo(PageView);

const styles = StyleSheet.create({
  container: {
    width:     "90%",

    margin:   "auto",
    marginBottom: 20,
    padding:      10,
    elevation:     5,

    borderRadius: 10
  }
});