import { default as cppchapters } from "./cpp/chapters";
import { BookChapterMap } from "@/types";

type ChaptersMap = {
  [key: string]: BookChapterMap;
}

const chapters: ChaptersMap = {
  "cpp": cppchapters
};

export default chapters;