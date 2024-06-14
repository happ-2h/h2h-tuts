import { ChapterObject } from "@/types";

const cpp_ch1: ChapterObject = {
  id: "cpp_ch1",
  content: [
    {type: "header", content: "Tools"},
    {
      type: "view",
      title: "Compiler",
      content: [
        {
          type: "text",
          content: "The compiler is responsible for translating high-level, human-readable code into a machine-readable language. A short, technical description: they are drivers that control execution of other tools responsible for creating the executable (compiler, assembler, and linker). The next chapter will examine the compiler in more detail."
        },
        {
          type: "text",
          content: "I will be testing the code with the g++ and clang++ compilers, as they are the most popular. They are readily available on Linux, Mac OS, and Android (using Termux) on most package managers. For Windows, you can find them on WSL. MSVC++ is also very popular (comes with Visual Studio), but it will not be used for this tutorial."
        },
        {
          type: "text",
          content: "g++ is known to have new language features before any other compiler, but is consequently buggy. clang++ takes longer to implement new features, but is known to be stable."
        },
        {
          type: "good",
          kind: "good",
          content: "Compilers don't automatically add new language features, so be sure to check if your compiler of choice supports a new feature you're interested in."
        }
      ]
    },
    {
      type: "view",
      title: "Text Editors",
      content: [
        {
          type: "text",
          content: "You can technically use any text editor that saves files in plain text format, however, some text editors make the experience a lot more efficient!"
        },
        {
          type: "subheading",
          content: "Screen-Based"
        },
        {
          type: "text",
          content: "Screen-based editors are also known as \"console text editors.\" The most popular ones are Vim, NeoVim, Emacs, and Helix. Pros of these editors are: they're highly configurable, known to be efficient in resources and workflow, and small in size. Cons are: they have a high learning curve and configurations usually require learning a new programming language or syntax."
        },
        {
          type: "subheading",
          content: "GUI-Based"
        },
        {
          type: "text",
          content: "GUI-based editors are the most popular choice since they have a lower learning curve and are ready to use after a fresh installation. The most popular one is VSCode, mainly because it's made for Linux, Mac OS, and Windows, and has numerous, useful community plugins. Cons of GUI-based editors are they take up more resources (CPU, RAM, drive space), have bloat, and are configured to the developer's likings (upon fresh installation)."
        },
        {
          type: "text",
          content: "Other popular GUI-based editors are: Notepad++ (Windows), Sublime (paid), and Geany (Linux)."
        }
      ]
    },
    {
      type: "view",
      title: "IDEs",
      content: [
        {
          type: "text",
          content: "An IDE (integrated development environment) combines many development tools to make the workflow easier. An IDE, at least, has a text editor, file manager, compiler, and debugger. A pro of an IDE is it has all the tools you'll need, already configured and readily available. Cons are they're larger in size, a bit lengthy to configure and customize, take up more resources, and have defaults that may break your code (a hard-to-find set compiler flag was the problem, not your code, for example)."
        },
        {
          type: "text",
          content: "Popular IDEs are CLion (paid), Visual Studio (Windows), Xcode (Mac OS), Code Blocks, and Qt Creator."
        },
        {
          type: "error",
          kind: "Bad",
          content: "Many people confuse \"compiler\" with \"IDE.\" The compiler translates code to machine-readable language and IDE is an environment for development."
        }
      ]
    },
    {
      type: "view",
      title: "Other C++ Tools",
      content: [
        {
          type: "text",
          content: "These are other common tools for C++ development, however, they will not be covered in this book."
        },
        {
          type: "subheading",
          content: "Debuggers"
        },
        {
          type: "text",
          content: "In short, debuggers step through code to help developers accurately find the source of problems in their code."
        },
        {
          type: "text",
          content: "The most popular ones are GDB and LLDB since they are regularly updated and shipped as default with many IDEs. More advanced debuggers are Radare2 and IDA Pro."
        },
        {
          type: "subheading",
          content: "Profilers"
        },
        {
          type: "text",
          content: "Profilers (or memory management tools) make profiles on resource usage. The most common usage is to find memory leaks. Valgrind is the most popular, strace and ltrace are a close second, but are for more advanced use cases. Those three are not available for Windows."
        },
        {
          type: "subheading",
          content: "Documentation Generators"
        },
        {
          type: "text",
          content: "Documentation generators take formatted comments (specified by the generator) and code, and generate documentation, commonly in the form of PDF, website, or TeX. DoxyGen is the most popular."
        },
        {
          type: "subheading",
          content: "Unit Testing"
        },
        {
          type: "text",
          content: "Unit testing tests your code against given scenarios. Google Test, Boost.Test, and CTest are the most popular frameworks."
        },
        {
          type: "subheading",
          content: "Build Tools"
        },
        {
          type: "text",
          content: "Build tools build your code based on given instructions. The instructions can be automatically determined to help the programmer. Make and CMake are the most popular build tools."
        }
      ]
    },
    {
      type: "view",
      title: "Closing Words",
      content: [
        {
          type: "text",
          content: "The tools you use will depend on your needs and tastes. Many other compilers, editors, and IDEs exist with their specialized purposes, pros, and cons. Do your research, play with some tools, and make a final decision on what's best for you and your project!"
        },
        {
          type: "text",
          content: "If you don't know what to use to follow along with the book, I use NeoVim or Vim if I'm working in the terminal, VS Code with larger projects, and clang++ for compilation. For Windows, use Visual Studio to get started quickly, or VS Code and WSL with clang++."
        }
      ]
    }
  ]
};

export default cpp_ch1;