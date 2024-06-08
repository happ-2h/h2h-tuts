import chapters from "@assets/data/chapters/chapters";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const BookContent = () => {
  const params = useLocalSearchParams();

  const chapterData = chapters[params.book][params.id];

  console.log(chapterData);
  
  
  return (
    <View>
      <Text>{chapterData.id}</Text>

      <Stack.Screen options={{
        title: chapterData.id,
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
    </View>
  );
};

export default BookContent;