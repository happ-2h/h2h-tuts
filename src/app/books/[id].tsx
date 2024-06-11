import { FlatList, Pressable }               from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Ionicons }                          from '@expo/vector-icons';

import chapters   from "@assets/data/chapters/chapters";
import PageHeader from "@components/page/Header";
import PageView   from "@components/page/View";

import { ChapterContentContent, ChapterObject } from "@/types";

const BookContent = () => {
  const params = useLocalSearchParams();

  const chapterData: ChapterObject = chapters[params.book][params.id];

  return (
    <>
      <FlatList
        data={ chapterData.content }
        renderItem={({ item }) => {
          switch(item.type) {
            case "header":
              return <PageHeader content={ item.content as string } />
            case "view":
              return <PageView
                title={ item.title as string }
                content={ item.content as ChapterContentContent[] }
              />
          }
        }}
      />

      <Stack.Screen options={{
        title: chapterData.content[0].content as string,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Montserrat_500Medium"
        },
        headerRight: () => {
          return (
            <Link href='/' asChild>
              <Pressable>
                <Ionicons name="home" size={32} />
              </Pressable>
            </Link>
          );
        }
      }} />
    </>
  );
};

export default BookContent;