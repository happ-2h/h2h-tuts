import chapters from "@assets/data/chapters/chapters";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PageHeader from "@components/page/Header";
import PageView from "@components/page/View";
import ViewError from "@components/page/view/ViewError";

const BookContent = () => {
  const params = useLocalSearchParams();

  const chapterData = chapters[params.book][params.id];
  
  return (
    <>
      <FlatList 
        data={chapterData.content}
        renderItem={({ item }) => {
          switch(item.type) {
            case "header":
              return <PageHeader content={item.content} />
            case "view":
              return <PageView title={item.title} content={item.content} />
          }
        }}
      />

      <Stack.Screen options={{
        title: chapterData.content[0].content,
        headerTitleAlign: "center",
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