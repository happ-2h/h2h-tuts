import { BookCover } from "@/types";

const bookCovers: BookCover[] = [
  {
    id: "cpp",
    title: "C++ Tutorial",
    desc: "C++20 tutorial for beginners",
    img: require("assets/imgs/book_covers/cover_cpp.png"),
    icon: ["language-cpp", "#399EE6", "#59C2FF"],
    status: []
  }
];

export const defaultImage = require("@assets/imgs/book_covers/cover_noImage.png");

export default bookCovers;