import { ChapterObject } from "@/types";

const cpp_ch0: ChapterObject = {
  id: "cpp_ch0",
  content: [
    {type: "header", content: "Book Conventions"},
    {
      type: "view",
      title: "Few Words Test",
      content: [
        {
          type: "text",
          content: "Lorem ipsum dolor sit amet."
        },
        {
          type: "subheading",
          content: "Lorem ipsum dolor sit."
        },
        {
          type: "text",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          type: "good",
          kind: "good",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, sapiente."
        },
        {
          type: "error",
          kind: "error",
          content: "Lorem ipsum dolor sit amett."
        },
        {
          type: "code",
          // FIXME: can't escape pound character '#' [Render ERROR]
          content: `
\\#include <iostream>

int main(int argc, const char* argv[]) {
  return 0;
}
          `
        }
      ]
    },
    {
      type: "view",
      title: "Many Many Many Many Many Many Many Many Many Words Test",
      content: [
        {
          type: "text",
          content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae a, ipsam magnam aspernatur dolor laudantium. Asperiores qui, cupiditate, eveniet doloremque, quae nostrum iste eius architecto maiores animi quis amet eaque!"
        },
        {
          type: "subheading",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
          type: "text",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          type: "good",
          kind: "good",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque similique quam cupiditate? Eaque soluta est illum? Quisquam, nesciunt at tempora itaque alias omnis voluptas! Incidunt consectetur ab nisi quo! Corrupti, laboriosam?"
        },
        {
          type: "error",
          kind: "error",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis, excepturi cupiditate nulla repudiandae mollitia veritatis praesentium. Est maxime distinctio praesentium iusto aliquid? Distinctio pariatur culpa repudiandae fuga, quam obcaecati officiis numquam. Eveniet quasi quo ea nulla veniam ratione, delectus eum aliquid!"
        },
        {
          type: "code",
          content: `
/*
  Multiline comment
 */
template<class... Args>
void f(Args... args) {
  auto x = [args...] { return g(args...); };
  x();
}

int main(int argc, const char* argv[]) {
  int a = 10;
  double b{ 12.3f };
  bool c{ true && false || !true };

  std::cout << "string" << '\\n';

  // EXIT_SUCCESS
  return 0;
}
          `
        }
      ]
    }
  ]
};

export default cpp_ch0;