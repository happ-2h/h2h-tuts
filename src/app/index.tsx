import { FlatList }     from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar }    from "expo-status-bar";

import bookCovers       from "@assets/data/bookCovers";
import Book             from "@components/Book";
import { BookCover }    from "@/types";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={bookCovers}
        renderItem={({ item }: { item: BookCover}) => <Book book={item} />}
        contentContainerStyle={{ gap: 10, padding: 5 }}
        style={{ backgroundColor: "#FAFAFA", height: "100%" }}
      />

      <StatusBar hidden={true} style="auto" />
    </SafeAreaView>
  );
};

export default Home;