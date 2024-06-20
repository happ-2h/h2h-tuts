import { ChapterObject } from "@/types";

const cpp_ch6: ChapterObject = {
  id: "cpp_ch6",
  content: [
    {type: "header", content: "Conditional Statements"},
    {
      type: "view",
      title: "Operators",
      content: [
        {
          type: "text",
          content: "Conditional operators return a boolean. Useful for condition checking."
        },
        {
          type: "code",
          content: `
/*
  Comparison

  x < y
    returns true if x is less than y
  x <= y
    returns true if x is less than or equal to y

  x > y
    return true if x greater than y
  x >= y
    returns true if x is greater than or equal to y
 */
9 < 18 // true
9 > 18 // false

9 > 9 // false
9 < 9 // false

9 >= 9 // true
9 <= 9 // true


/*
  Equality

  x == y
    true if x is the same as y

  x != y
    true if x does not equal y
 */
9 == 9 // true
9 == 8 // false

9 != 9 // false
9 != 8 // true


/*
  Logical

  x && y
    true if x and y are true

  x || y
    true if either x or y is false
 */
9 == 9 && 8 == 8 // true
9 != 9 && 8 == 8 // false

10 > 7 || 5 < 1 // true
10 < 7 || 5 > 1 // false


/*
  Three-way comparison

  Returns:
  (x <=> y)  < 0 if x  < y // Less
  (x <=> y)  > 0 if x  < y // Greater
  (x <=> y) == 0 if x == y // Equal

  Integral comparisons return std::strong_ordering

  Float comparisons return std::partial_ordering
 */
// Use \# not \\#
\\#include <compare>

int x{  9 };
int y{ 10 };

if (x <=> y == std::strong_ordering::less) {}
else if (x <=> y == std::strong_ordering::greater) {}
else if (x <=> y == std::strong_ordering::equal) {}
`
        },
        {
          type: "error",
          kind: "error",
          content: "Avoid using mathematical operations inside conditional statements as they can cause logical errors due to short circuiting."
        }
      ]
    },
    {
      type: "view",
      title: "Conditional Statements",
      content: [
        {
          type: "code",
          content: `
/*
  if-statements
 */

if (true) {
  // This gets executed
}

if (false) {
  // this doesn't get executed
}


if (true) {
  // This gets executed
}
else {
  // This never executes
}

if (false) {
  // This never executes
}
else {
  // This gets executed
}


if (false) {
  // wont run
}
else if (false) {
  // wont run
}
else if (true) {
  // will run
}
// wont even be evaluated
else if (true) {
  // wont run
}
else {
  // wont run
}
`
        },
        {
          type: "subheading",
          content: "Ternary Operator"
        },
        {
          type: "text",
          content: "The ternary operator is a short, one-line if-statement. You can use multiple ternary operators to replicate an if branch, but it's looked down upon."
        },
        {
          type: "code",
          content: `
/*
  Ternary Operator

  condition ? return this if true : return this if false
 */
bool isTrue{ true };

isTrue ? yes() : no(); // Returns what the function returned

int a{ isTrue ? 40 : 0 }; // Returns 40 (assigned to 'a')


bool isAuth{ false };
std::cout << (isAuth ? \"Welcome\" : \"Unauthorized Access!\");


/*
  Nested Ternary Operator

  You can nest them, however, it is not
  recommended to do so.
  Reason being is it creates spaghetti code.
 */

true ?
  false ?
    // true
  : true ? // false
   // true
    : // false
: // false
`
        },
        {
          type: "subheading",
          content: "Switch Statement"
        },
        {
          type: "text",
          content: "Switch statements evaluate a single variable. They are more efficient than if-statements, but can't have conditions."
        },
        {
          type: "code",
          content: `
/*
  Switch Statements

  Replaces
  if (variable == 0) {}
  else if (variable == 1) {}
  else if (variable == 2) {}
  ...
  else {}
 */

int x{ 4 };
switch(x) {
  case 0:
    // execute this block if x == 0
    break; // Prevent fallthrough to other cases
  case 1:
    // execute this block if x == 1
    break; // Prevent fallthrough to other cases
  case 2:
    // execute this block if x == 2
    break; // Prevent fallthrough to other cases
  case 3:
    // execute this block if x == 3
    break; // Prevent fallthrough to other cases
  default:
    // execute this block if x didn't match a case
    break;
}

// Fallthrough
switch(x) {
  case 0:
  case 1:
  case 2:
    [[fallthrough]] // Tell the compiler fallthrough is intentional, otherwise it throws a warning
    // execute if x is either 0, 1, or 2
    break;
}
`
        }
      ]
    }
  ]
};

export default cpp_ch6;