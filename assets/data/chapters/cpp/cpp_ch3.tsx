import { ChapterObject } from "@/types";

const cpp_ch3: ChapterObject = {
  id: "cpp_ch3",
  content: [
    {type: "header", content: "Data Types"},
    {
      type: "view",
      title: "Data Types",
      content: [
        {
          type: "text",
          content: "Data types tell the compiler what a value represents so it can be correctly and efficiently dealt with. For example, what does 0x37E410CA represent? An integer? A real number? Is it signed? Maybe a memory address or a string?"
        },
        {
          type: "subheading",
          content: "Fundamental Data Types"
        },
        {
          type: "text",
          content: "Fundamental data types are types defined in the programming language."
        },
        {
          type: "code",
          content: `
// Character types
/*
  Character types are integral,
  but are used for storing characters
  e.g. 'a' 'b' 'c' '1' '@' etc.
 */
char        // 1 byte
wchar_t     // 1 byte
char8_t     // 1 byte
char16_t    // 2 bytes
char32_t    // 4 bytes


// Integral types
/*
  Integral types are
  whole numbers.
  e.g. -340 -235 0 23 48975

  Add the 'unsigned' keyword
  to make them positive only
  (0 inclusive).

  8-bit types may be
  treated as characters.
  It is recommended to avoid
  them in general. They are
  not fundamental because
  of the dangers.
 */
short     // 2 bytes
int       // 2-4 bytes
long      // 4 bytes
long long // 8 bytes


// Boolean
/*
  Booleans hold either 'true'
  or 'false' (C++ keywords).

  Truthy values can be any
  value that is not 0, null,
  or a conditional.

  Falsy values can be 0, null,
  or a conditional.
 */
bool // 1 byte


// Floating point types
/*
  Float types hold
  whole numbers with a
  fractional component.
  e.g. -34.632 -2.3222 0 76.34

  Add the 'unsigned' keyword
  to make them positive only
  (0 inclusive).
 */
float       // 4 bytes
double      // 8 bytes
long double // 8 bytes


// No type
/*
  Void types are used
  for placeholders.
  We'll see examples throughout
  the book, but void was more
  prominent in C.
 */
void // No size
`
        },
        {
          type: "error",
          kind: "warning",
          content: "Compilers handle the size of data types, so it's not guaranteed you'll get N bytes. This can cause under/overflow in other systems and can waste bytes."
        },
        {
          type: "good",
          kind: "good",
          content: "Prefer double over floats. Floats lose precision and cause logical errors. Unless you need to save 4 bytes, use double!"
        },
        {
          type: "subheading",
          content: "Fast and Least"
        },
        {
          type: "text",
          content: "To guarantee at least or at most N bytes, fast and least integers were introduced."
        },
        {
          type: "code",
          content: `
// Not \\#, use #
\\#include <cstdint> // for fixed-width integers
\\#include <iostream>

int main()
{
  // Results will vary!
  std::cout << "least 8:  " << sizeof(std::int_least8_t)  * 8 << " bits\\n";
  std::cout << "least 16: " << sizeof(std::int_least16_t) * 8 << " bits\\n";
  std::cout << "least 32: " << sizeof(std::int_least32_t) * 8 << " bits\\n";
  std::cout << '\n';
  std::cout << "fast 8:  " << sizeof(std::int_fast8_t)  * 8 << " bits\\n";
  std::cout << "fast 16: " << sizeof(std::int_fast16_t) * 8 << " bits\\n";
  std::cout << "fast 32: " << sizeof(std::int_fast32_t) * 8 << " bits\\n";

  return 0;
}
`
        },
        {
          type: "good",
          kind: "good",
          content: "If the value in your program will be under 2 bytes, prefer int over fast and least.\nIf you don't know what to use, use int."
        }
      ]
    },
    {
      type: "view",
      title: "Variables",
      content: [
        {
          type: "text",
          content: "Variables are named objects used to identify the object's place in memory."
        },
        {
          type: "code",
          content: `
/*
  Variable syntax:
  [modifier] [data type] [user-defined name]

  Modifier is optional.
 */
int myInt;
unsigned int myUInt;
bool isBool;
char userChoice;
`
        },
        {
          type: "good",
          kind: "Recommended",
          content: "Define your variables in seperate lines for legibility."
        },
        {
          type: "subheading",
          content: "Variable Initialization"
        },
        {
          type: "text",
          content: "After you have defined a variable, you can give it a value. There are 3 different ways of doing so."
        },
        {
          type: "subheading",
          content: "Copy Initialization"
        },
        {
          type: "text",
          content: "Copy assignment copies the right-hand value into the variable on the left."
        },
        {
          type: "code",
          content: `
// Copy value into variable
int a = 1;
int b = 2;
int c = 3.14; // Legal, but causes data loss
`
        },
        {
          type: "subheading",
          content: "Direct Initialization"
        },
        {
          type: "text",
          content: "Direct initialization behaves the same way as copy initialization, but only with fundamental types. This initialization is mostly for object types and class variable initializations."
        },
        {
          type: "code",
          content: `
int a(1);     // Fundamental type
MyClass b(2); // Object type
`
        },
        {
          type: "subheading",
          content: "List Initialization"
        },
        {
          type: "text",
          content: "This is normally used to initialize lists (hence the name), but has been improved to be used with other types."
        },
        {
          type: "code",
          content: `
int a{ 1 };
int b{ 2 };
int c{ 3.14 }; // Gives an error
`
        },
        {
          type: "good",
          kind: "recommended",
          content: "Always initialize your variables. Not doing so will assign a random junk value that can cause logical errors.\n\nPrefer list-initialization whenever possible.\n\nUse {} if you don't need a value (0 will be automatically assigned).\n\nUse {0} if you're going to actually use the 0."
        }
      ]
    },
    {
      type: "view",
      title: "Variable Naming",
      content: [
        {
          type: "text",
          content: "While, under limitaions, you can name your variables whatever you please, a set of rules were created to improve the experience for yourself and your team."
        },
        {
          type: "subheading",
          content: "C++ Specific Rules"
        },
        {
          type: "text",
          content: "You can not use C++ reserved keywords (gives an error).\n\nYou can only use letters, numbers, or underscores.\n\nNames can't start with a number.\n\nNames are case-sensitive (Abc is different from abc)."
        },
        {
          type: "subheading",
          content: "C++ Conventions"
        },
        {
          type: "text",
          content: `
Start with a lowercased letter.

Single words should be all lowercase.

Two or more words, use snake_case or camelCase; your choice.

Avoid starting with underscores as that convention is used for OS, library, and compiler specific variables.

Give them a meaningful, descriptive name, but nothing too long (xPosition can be shortened to xPos. totalSales can be shortened to ttlSales).

Name lists as a plural (cats, students, employees, sales).
Name \"number of\" variables as a plural starting with \'n\' (nCats, nStudents, nEmployees, nSales).

Name booleans as questions that have a \"yes\" or \"no\" answer (isReady, hasAuth, didComplete).

Class members start with m_ (m_x, m_isStudent, m_type).

Types end with _t (customInt_t, vec2d_t, animal_t).

\'i\', \'j\', and \'k\' are used for iterations.

\'x\' and \'y\' are used for row and column positions/traversals, respectively.

\'n\' is used for a total of something (array lengths or number of items).

Older conventions no longer taught, but are still seen:

Name constants with all caps.

_i at the end if it's an integer.
_c at the end if it's a char.
_b at the end if it's a bool.
_f at the end if it's a float.
_ld at the end if it's a long double.
etc.
`
        },
        {
          type: "code",
          content: `
int y; // Assumed to be a column traversal
int i; // Assumed to be used as an iterator
int n; // Assumed to hold a number of items

int open;     // BAD open what
int openFile; // Better

int scount;       // BAD meant scout or count? s count? s what?
int studentCount; // Okay!
int stuCnt;       // Better! If context available
int nStudents;    // Perfect!

// Apples
int a1, a2, a3; // BAD
/*
  Collaborators, or even yourself,
  will have to go back and see
  what these variables represent.

  Comments do help, but not
  all environments are set up
  to make use of comments
  throughtout the project.
 */

bool prefersDark; // GOOD
bool open;        // BAD can open? Is open? Should open? Is it a command?
bool isOpen;      // GOOD
bool canView;     // GOOD
`
        }
      ]
    },
    {
      type: "view",
      title: "Constants",
      content: [
        {
          type: "text",
          content: "Constants prevent variables from changing during the program's lifetime. The const keyword modifies a variable to make it unmutable."
        },
        {
          type: "code",
          content: `
/*
  The const keyword can
  go before or after
  the data type.
  Placing it before
  reduces confusion when
  reading variables.

  Constants MUST be initialized.
  They can not be reassigned.
 */
const double pi { 3.14159 };
std::size_t const MAX_STUDENTS { 32 };

// Legal since they're initialized
someVar = calculate(9, 45);
const int result { someVar };
const int expectedResult { calculate(9, 45) };

result = calculate(10, 22); // ERROR
`
        },
        {
          type: "good",
          kind: "good",
          content: "Consider frequently used literals to be a constant variable. It helps with optimization (compile-time constants only) and code updates."
        },
        {
          type: "text",
          content: "To be more specific that a constant must be evaluated at compile-time, we use constexpr."
        },
        {
          type: "code",
          content: `
constexpr double pi { 3.14159 }; // Resolved at compile-time

int n{};

std::cin >> n; // Get input. Resolved at run-time

constexpr int nStudents { n }; // ERROR can only be resolved at compile-time
`
        },
        {
          type: "error",
          kind: "bad",
          content: `
Avoid using #define since the compiler won't optimize it as efficiently as const or constexpr.

Since #define is a preprocessor, it will have unusual scope for a beginner.

#define uses string tokens, not numbers. 30 is \'3\' \'0\' not 30.
Compilers are smart enough to determine the type; however, it's still a risk of introducing bugs.
`
        }
      ]
    }
  ]
};

export default cpp_ch3;