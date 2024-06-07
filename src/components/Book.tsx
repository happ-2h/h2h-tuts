import { BookCover } from "@/types";
import { Image, Pressable, Text, View } from "react-native";

const Book = ({ book }: { book: BookCover }) => {
  return (
    <Pressable>
      <Image />
      <View>
        <Text>{book.title}</Text>
        <Text>{book.desc}</Text>
      </View>
    </Pressable>
  );
};

export default Book;