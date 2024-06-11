export type BookCover = {
  id:     string;
  title:  string;
  desc:   string;
  img:    number | null;
  icon:   Array<string>;
  status: Array<string>;
};

export type BookTableOfContents = {
  id:    string;
  title: string;
  desc:  string;
};

export type ChapterObject = {
  id:      string;
  content: Array<ChapterContent>;
};

export type ChapterContent = {
  type: "header" | "view" | "text" | "subheading" | "good" | "error" | "code";
  title?:  string;
  content: string | Array<ChapterContentContent>;
};

export type ChapterContentContent = {
  type:    string;
  kind?:   string;
  content: string;
};

export type BookChapterMap = {
  [key: string]: ChapterObject;
};

export type TableOfContentsMap = {
  [key: string]: BookTableOfContents[];
};