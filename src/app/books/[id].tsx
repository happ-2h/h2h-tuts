import { useMemo }                             from "react";
import { FlatList, Pressable, useColorScheme } from "react-native";
import { Link, Stack, useLocalSearchParams }   from "expo-router";
import { Ionicons }                            from '@expo/vector-icons';

import chapters   from "@assets/data/chapters/chapters";
import PageHeader from "@components/page/Header";
import PageView   from "@components/page/View";
import { Colors } from "@constants/Colors";

import { ChapterContentContent, ChapterObject } from "@/types";

const BookContent = () => {
  const params = useLocalSearchParams();
  const theme  = useColorScheme();

  const chapterData: ChapterObject = useMemo(() => chapters[params.book][params.id], [chapters]);

  return (
    <>
      <FlatList
        data={ chapterData.content }
        renderItem={({ item }) => {
          switch(item.type) {
            case "header":
              return <PageHeader content={ item.content as string } theme={ theme } />
            case "view":
              return <PageView
                title={ item.title as string }
                content={ item.content as ChapterContentContent[] }
                theme={ theme }
              />
          }
        }}
        style={{
          backgroundColor: Colors[theme].bg,
          height: "100%"
      }}/>

      <Stack.Screen options={{
        title: chapterData.content[0].content as string,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Montserrat_500Medium"
        },
        headerStyle: {
          backgroundColor: Colors[theme].bg
        },
        headerTintColor: Colors[theme].fg,
        headerRight: () => {
          return (
            <Link href='/' asChild>
              <Pressable>
                <Ionicons
                  name="home"
                  size={ 32 }
                  color={ Colors[theme].cta_icon }
                />
              </Pressable>
            </Link>
          );
        }
      }} />
    </>
  );
};

export default BookContent;