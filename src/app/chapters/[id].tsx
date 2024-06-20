import { FlatList, useColorScheme }    from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons }      from '@expo/vector-icons';

import tableOfContents from "@assets/data/tableOfContents/tableOfContents";
import ChapterItem     from "@components/ChapterItem";
import { Colors }      from "@constants/Colors";

const TOC = () => {
  const params = useLocalSearchParams();
  const theme  = useColorScheme();

  const toc = tableOfContents[params.id];

  return (
    <>
      <FlatList
        data={ toc }
        renderItem={({ item }) => <ChapterItem details={ item } book={ params.id } theme={ theme } />}
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
          name={ params.icon }
          color={ theme === "dark" ? params.iconColorDark : params.iconColorLight } size={32} />,
        headerTitleAlign: "center",
      }} />
    </>
  );
};

export default TOC;