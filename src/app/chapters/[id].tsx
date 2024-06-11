import { FlatList }                    from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons }      from '@expo/vector-icons';

import tableOfContents from "@assets/data/tableOfContents/tableOfContents";
import ChapterItem     from "@components/ChapterItem";

const TOC = () => {
  const params = useLocalSearchParams();

  const toc = tableOfContents[params.id];

  return (
    <>
      <FlatList
        data={toc}
        renderItem={({ item }) => <ChapterItem details={item} book={params.id} />}
        contentContainerStyle={{ gap: 10, padding: 5 }}
        style={{ backgroundColor: "#FAFAFA", height: "100%" }}
      />

      <Stack.Screen options={{
        // TODO: icon color
        headerRight: () => <MaterialCommunityIcons name={params.icon} size={32} />,
        headerTitleAlign: "center",
      }} />
    </>
  );
};

export default TOC;