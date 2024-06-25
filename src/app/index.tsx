import { FlatList, useColorScheme } from "react-native";
import { SafeAreaView }             from "react-native-safe-area-context";
import { StatusBar }                from "expo-status-bar";

import bookCovers                   from "@assets/data/bookCovers";
import Book                         from "@components/Book";
import { Colors }                   from "@constants/Colors";

const Home = () => {
  const theme = useColorScheme() ?? "dark";

  return (
    <SafeAreaView>
      <FlatList
        data={ bookCovers }
        renderItem={ ({ item }) => <Book book={ item } theme={ theme } /> }
        contentContainerStyle={{ gap: 10, padding: 5 }}
        style={
          {
            backgroundColor: Colors[theme].bg,
            height: "100%"
          }
        }
      />

      <StatusBar hidden={ true } style="auto" />
    </SafeAreaView>
  );
};

export default Home;