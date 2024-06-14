import { StyleSheet, Text, View } from 'react-native';
import * as Crypto                from 'expo-crypto';
import Prism                      from 'prismjs';
import { memo } from 'react';

const codePiece = obj => {
  if (typeof obj === "string")
    return <Text key={ Crypto.randomUUID() }
      style={ [styles.punctuation, styles.font] }>{ obj }</Text>;

  return <Text key={ Crypto.randomUUID() }
    style={ [styles[obj.type], styles.font] }>{ obj.content }</Text>
};

const ViewCode = ({ content }: { content: string }) => {
  const tokenized = Prism.tokenize(content, Prism.languages.cpp);

  return (
    <View style={ styles.container }>
      <Text>
        {
          tokenized.map((obj: Prism) => codePiece(obj))
        }
      </Text>
    </View>
  );
};

export default memo(ViewCode);

const styles = StyleSheet.create({
  container: {
    paddingLeft:  10,
    paddingRight: 10,
    marginBottom: 10,
    elevation:     1,

    borderRadius: 10,
    borderWidth:   2,
    borderColor: "#8A91991A",

    backgroundColor: "#FCFCFC"
  },
  font: {
    fontFamily: "Montserrat_500Medium",
    fontSize:       13,
    letterSpacing: 0.5,
    lineHeight:     20
  },
  /* TEMP: light-mode syntax highlighting */
  string: {
    color: "#86B300"
  },
  char: {
    color: "#86B300"
  },
  keyword: {
    color: "#FA8D3E"
  },
  operator: {
    color: "#ED9366"
  },
  punctuation: {
    color: "#5C6166"
  },
  function: {
    color: "#F2AE49"
  },
  number: {
    color: "#A37ACC"
  },
  comment: {
    color: "#787B8099"
  },
  "double-colon": {
    color: "#ED9366"
  },
  boolean: {
    color: "#478ACC"
  }
});