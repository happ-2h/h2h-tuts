import Prism from 'prismjs';
import { StyleSheet, Text, View } from 'react-native';
import * as Crypto from 'expo-crypto';

const codePiece = obj => {
  if (typeof obj === "string")
    return <Text key={Crypto.randomUUID()} style={styles.punctuation}>{ obj }</Text>;

  return <Text key={Crypto.randomUUID()}  style={styles[obj.type]}>{ obj.content }</Text>
};

const ViewCode = ({ content }: { content: string }) => {
  const tokenized = Prism.tokenize(content, Prism.languages.cpp);

  return (
    <View style={styles.container}>
      <Text>
        {
          tokenized.map(obj => codePiece(obj))
        }
      </Text>
    </View>
  );
};

export default ViewCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    borderColor: "#8A91991A",
    borderRadius: 10,
    borderWidth: 2,
    elevation: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
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