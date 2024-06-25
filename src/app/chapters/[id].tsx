import { FlatList, useColorScheme }    from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons }      from '@expo/vector-icons';

import tableOfContents from "@assets/data/tableOfContents/tableOfContents";
import ChapterItem     from "@components/ChapterItem";
import { Colors }      from "@constants/Colors";

const TOC = () => {
  const theme  = useColorScheme() ?? "dark";

  const { id, icon, iconColorDark, iconColorLight } =
    useLocalSearchParams<{
      id:             string;
      icon:           keyof typeof MaterialCommunityIcons.glyphMap;
      iconColorDark:  string;
      iconColorLight: string;
    }>();

  if (!id || !icon || !iconColorDark || !iconColorLight )
    // TODO: Visual error
    return <>ERROR: NULL parameters</>;

  const toc = tableOfContents[id];

  return (
    <>
      <FlatList
        data={ toc }
        renderItem={({ item }) => <ChapterItem details={ item } book={ id } theme={ theme } />}
        contentContainerStyle={{ gap: 10, padding: 5 }}
        style={{
          backgroundColor: Colors[theme].bg,
          height: "100%"
      }}/>

      <Stack.Screen options={{
        headerStyle:{
          backgroundColor: Colors[theme].bg
        } ,
        headerTintColor: Colors[theme].fg,
        headerRight: () => <MaterialCommunityIcons
          name={ icon }
          color={ theme === "dark" ? iconColorDark : iconColorLight } size={32} />,
        headerTitleAlign: "center",
      }} />
    </>
  );
};

export default TOC;