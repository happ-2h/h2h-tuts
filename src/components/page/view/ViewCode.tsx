import { memo }    from 'react';
import {
  ColorSchemeName,
  StyleSheet,
  Text,
  View
}                  from 'react-native';
import * as Crypto from 'expo-crypto';
import Prism       from 'prismjs';

import { CodeTheme } from '@constants/Colors';

const codePiece = (obj, sysTheme: ColorSchemeName, codeTheme: string) => {
  if (typeof obj === "string")
    return <Text key={ Crypto.randomUUID() }
      style={
        StyleSheet.flatten([
          { color: CodeTheme[codeTheme][sysTheme].punctuation }
      ])}>{ obj }</Text>;

  return <Text key={ Crypto.randomUUID() }
    style={
      StyleSheet.flatten([
      { color: CodeTheme[codeTheme][sysTheme][obj.type] },
      styles.font
    ])}>{ obj.content }</Text>
};

const ViewCode = ({ content, theme }: { content: string, theme: ColorSchemeName }) => {
  const tokenized = Prism.tokenize(content, Prism.languages.cpp);

  /* TODO: let user choose theme */
  const codeTheme = "ayu";

  return (
    <View style={
      StyleSheet.flatten([
        styles.container,
        { backgroundColor: CodeTheme[codeTheme][theme].bg }
    ])}>
      <Text>
        {
          tokenized.map((obj: Prism) => codePiece(obj, theme, codeTheme))
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
    borderColor: "#8A91991A"
  },
  font: {
    fontFamily: 'Inconsolata_400Regular',
    fontSize:       15,
    letterSpacing: 0.5,
    lineHeight:     20
  }
});