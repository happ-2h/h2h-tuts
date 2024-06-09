import { StyleSheet, Text, View } from "react-native";
import ViewText from "./view/ViewText";
import ViewTitle from "./view/ViewTitle";
import ViewError from "./view/ViewError";
import ViewGood from "./view/ViewGood";
import SubHeading from "./view/ViewSubheading";
import ViewCode from './view/ViewCode';

const PageView = ({ title, content }) => {
  return ( 
    <View style={ styles.container }>
      <ViewTitle title={title} />
      {
        content.map(item => {
          switch(item.type) {
            case "text":
              return <ViewText key={item.content} content={item.content} />;
            case "error":
              return <ViewError key={item.content} content={item.content} kind={item.kind} />;
            case "good":
              return <ViewGood key={item.content} content={item.content} kind={item.kind} />;
            case "subheading":
              return <SubHeading key={item.content} content={item.content} />;
            case "code":
              return <ViewCode key={item.content} content={item.content} />
          }
        })
      }
    </View>
  );
};

export default PageView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width: "90%",
    margin: "auto",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 5
  }
});