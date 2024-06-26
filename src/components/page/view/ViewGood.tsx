import { memo }                   from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome }            from '@expo/vector-icons';

import { Colors }                 from "@constants/Colors";

const ViewGood = ({ content, kind }: { content: string, kind: string }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.heading }>
        <FontAwesome
          name="check-circle"
          size={ 32 }
          color={ Colors.dark.title }
          style={{ marginRight: 10 }}
        />
        <Text style={ styles.headingText }>{ kind }</Text>
        <FontAwesome
          name="check-circle"
          size={ 32 }
          color={ Colors.dark.title }
          style={{ marginRight: 10 }}
        />
      </View>
      <Text style={ styles.content }>{ content }</Text>
    </View>
  );
};

export default memo(ViewGood);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding:      10,

    borderRadius: 10,
    borderWidth:   2,
    elevation:     1,

    borderColor:     Colors.light.good_border,
    shadowColor:     Colors.light.good_bg,
    backgroundColor: Colors.light.good_bg
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
    color:         "#F8F9FA"
  },
  content: {
    fontFamily:    "Montserrat_400Regular",
    letterSpacing: 0.5,
    lineHeight:     20,
    color:         "#F8F9FA"
  }
});