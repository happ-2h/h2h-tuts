import { ChapterObject } from "@/types";

const cpp_ch0: ChapterObject = {
  id: "cpp_ch0",
  content: [
    {type: "header", content: "Book Conventions"},
    {
      type: "view",
      title: "Book Conventions",
      content: [
        {
          type: "text",
          content: "The book will try to be as informative and concise as possible. Code will be tested on a linux x86-64 architecture with the clang++ and g++ compilers; however, the code should work on other 64-bit environments (if using the same compiler), but no guarantee!"
        },
        {
          type: "subheading",
          content: "Good Practice | Recommendation"
        },
        {
          type: "text",
          content: "Good practices and Recommendations are things that are done by convention, and/or are the most efficient way of doing something."
        },
        {
          type: "good",
          kind: "good",
          content: "Implement what you read, customize it with curiosity, and use it in a made up scenario to really grasp what you read."
        },
        {
          type: "subheading",
          content: "Bad Practice | Error"
        },
        {
          type: "text",
          content: "Bad practices and Errors are things that are not done by convention (people will not understand what you're trying to acheive), won't compile, or may present bugs or unexpected behavior."
        },
        {
          type: "error",
          kind: "Bad",
          content: "If you don't understand something, just give up and move on."
        },
        {
          type: "subheading",
          content: "Code Blocks"
        },
        {
          type: "text",
          content: "Code blocks will contain blocks of code. Ellipses, if not part of the C++ code, symbolize cut code that is not important to the current subject."
        },
        {
          type: "text",
          content: "\'\\#\' in a code block represents \'#\' in real code. It is a bug not yet squashed!"
        },
        {
          type: "code",
          content: `
// \\# is a code block bug! use # only
\\#include <iostream>

int main(int argc, char const *argv[]) {
  std::cout << "Hello World\\n";

  return 0;
}
          `
        }
      ]
    },
    {
      type: "view",
      title: "Who This Book is For",
      content: [
        {
          type: "text",
          content: "This book is for developers that want to get into the C++ language. Beginners may gain more from this book than advanced developers."
        },
        {
          type: "text",
          content: "Advanced developers may find the first few technical chapters mundane, as they cover basic programming language topics; however, after those chapters, we'll cover only C++."
        },
        {
          type: "subheading",
          content: "What Not to Expect"
        },
        {
          type: "text",
          content: "This book is not intended for beginners to software development, operating systems, or computers. It is assumed the reader knows basics of software development and how to navigate through their operating system."
        }
      ]
    }
  ]
};

export default cpp_ch0;