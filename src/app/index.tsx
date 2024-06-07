import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import bookCovers from "@assets/data/bookCovers";
import Book from "@components/Book";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={bookCovers}
        renderItem={({ item }) => <Book book={item} />}
        contentContainerStyle={{ gap: 10, padding: 5 }}
      />

      <StatusBar hidden={true} style="auto" />
    </SafeAreaView>
  );
};

export default Home;