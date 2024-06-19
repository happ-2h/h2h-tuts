import { memo, useMemo }             from "react";
import { StyleSheet, View } from "react-native";

import ViewText   from "./view/ViewText";
import ViewTitle  from "./view/ViewTitle";
import ViewError  from "./view/ViewError";
import ViewGood   from "./view/ViewGood";
import SubHeading from "./view/ViewSubheading";
import ViewCode   from './view/ViewCode';

import { ChapterContentContent } from "@/types";

type PageViewParamTypes = {
  title:   string;
  content: ChapterContentContent[];
};

const PageView = ({ title, content }: PageViewParamTypes) => {
  const memo_content = useMemo(() => content, [content]);

  return (
    <View style={ styles.container }>
      <ViewTitle title={ title } />
      {
        memo_content.map(item => {
          switch(item.type) {
            case "text":
              return <ViewText   key={ item.content } content={ item.content } />;
            case "error":
              return <ViewError  key={ item.content } content={ item.content }
                kind={ item.kind as string } />;
            case "good":
              return <ViewGood   key={ item.content } content={ item.content }
                kind={ item.kind as string } />;
            case "subheading":
              return <SubHeading key={ item.content } content={ item.content } />;
            case "code":
              return <ViewCode   key={ item.content } content={ item.content } />;
          }
        })
      }
    </View>
  );
};

export default memo(PageView);

const styles = StyleSheet.create({
  container: {
    width: "90%",

    margin: "auto",
    marginBottom: 20,
    padding:      10,
    elevation:     5,

    borderRadius: 10,

    backgroundColor: "#FAFAFA",
  }
});