import { memo }        from "react";
import {
  ColorSchemeName,
  StyleSheet,
  Text,
  View
}                      from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { Colors }      from "@constants/Colors";

type ViewErrorParamTypes = {
  content: string;
  kind:    string;
  theme:   ColorSchemeName;
};

const ViewError = ({ content, kind, theme }: ViewErrorParamTypes) => {
  return (
    <View style={
      StyleSheet.flatten([
        styles.container,
        { backgroundColor: Colors[(theme ? theme : "dark")].err_bg }
    ])}>
      <View style={ styles.heading }>
        <FontAwesome
          name={ `exclamation-${ kind == "error" ? "circle" : "triangle" }` }
          size={ 32 }
          color={ Colors.dark.err_icon }
          style={{ marginRight: 10 }}
        />
        <Text style={ styles.headingText }>{ kind }</Text>
        <FontAwesome
          name={ `exclamation-${ kind == "error" ? "circle" : "triangle" }` }
          size={ 32 }
          color={ Colors.dark.err_icon }
          style={{ marginRight: 10 }}
        />
      </View>
      <Text style={ styles.content }>{ content }</Text>
    </View>
  );
};

export default memo(ViewError);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding:      10,

    borderRadius: 10,
    borderWidth:   2,
    elevation:     1,

    borderColor:  Colors.dark.err_icon,
    shadowColor:  Colors.light.err_bg

  },
  heading: {
    flexDirection:  "row",
    alignItems:     "center",
    justifyContent: "space-between",
    marginBottom:   20
  },
  headingText: {
    fontFamily:   "Montserrat_500Medium",
    fontSize:     24,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: Colors.dark.title
  },
  content: {
    fontFamily:    "Montserrat_400Regular",
    letterSpacing: 0.5,
    lineHeight:     20,
    color: Colors.dark.title
  }
});