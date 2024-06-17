import { ChapterObject } from "@/types";

const cpp_ch4: ChapterObject = {
  id: "cpp_ch4",
  content: [
    {type: "header", content: "Operators"},
    {
      type: "view",
      title: "Introduction",
      content: [
        {
          type: "text",
          content: "Operators perform mathematical or logical operations, then return the result.\nOther than the assignment operator, they do not mutate their operands."
        },
        {
          type: "subheading",
          content: "Unary"
        },
        {
          type: "text",
          content: "Unary operators only take one operand (arity level 1)."
        },
        {
          type: "subheading",
          content: "Binary"
        },
        {
          type: "text",
          content: "Unary operators only take two operands (arity level 2). Basic mathematical operators fall into this category."
        },
        {
          type: "subheading",
          content: "Ternary"
        },
        {
          type: "text",
          content: "Unary operators only take three operands (arity level 3). In C++, only one exists (conditional operator, which we'll learn with conditional branching)."
        },
        {
          type: "text",
          content: "Other operators will be introduced in their appropriate chapters or after a required topic has been covered."
        }
      ]
    },
    {
      type: "view",
      title: "Unary Operators",
      content: [
        {
          type: "code",
          content: `
int a{1};
-a; // Returns -1
+a; // Returns 1

int b{-1};
-b; // Returns 1
+b; // Returns -1

&b; // Returns the address of b


/*
  postfix ++ --
  Placed after

  How it works:
  Copy the value of c
  Increment(++) or decrement(--) c
  Return the copy

  // Similar behavior
  int x{c};  // x is 0
  c = c + 1; // c is 1
 */
int c{0};
a = c++; // a = 0
         // c = 1 after statement

/*
  Prefix ++ --
  Placed before

  How it works:
  Increment(++) or decrement(--) d
  return d
 */

int d{0};
a = ++d; // a = 1 and d = 1 same statement
`
        },
        {
          type: "good",
          kind: "good",
          content: "Prefer prefix over postfix since it has better performance and is easier to understand.\nOnly use postfix if you need the effects it produces."
        }
      ]
    },
    {
      type: "view",
      title: "Binary Operators",
      content: [
        {
          type: "code",
          content: `
int add { 1 + 2 }; // Adds 1 and 2 and returns the result
add = 3 + 6;       // Returns 9

int sub { 1 - 2 }; // Subtracts 1 and 2 and returns the result
int mul { 1 * 2 }; // Multiplies 1 and 2 and returns the result
int div { 1 / 2 }; // Divides 1 and 2 and returns the result

/*
  Modulus

  Modulus operator yields the remainder
  of the division of the operands

  7 % 5
  ⌊7 / 5⌋ = 1 remainder 2
  2 is returned
 */
int mod { 6 % 5 }; // Returns 1
`
        },
        {
          type: "subheading",
          content: "Modulus Tips"
        },
        {
          type: "text",
          content: `
x % y returns a value in the range 0 to y-1, where y > 0.

If x is a multiple of y, 0 is returned.

0 % y returns 0.
y % y returns 0.

x % -y will always be positive.
-x % y will always be negative.
-x % -y will always be negative.
`
        },
        {
          type: "subheading",
          content: "Assignment"
        },
        {
          type: "code",
          content: `
int a{0};

/*
  a + 3 returns 3
  = assigns 3 to a
 */
a = a + 3;

a += 3; // Same as a = a + 3

a = 0; // Assigns 0 to a

a += 4 + 2; // 4 + 2 is calculated first
            // returns 6
            // turns into a += 6
`
        }
      ]
    },
    {
      type: "view",
      title: "Precedence",
      content: [
        {
          type: "text",
          content: "Precedence is the order in which an operator is performed. 1 highest, 17 lowest.\nAssociativity is the order in which operators of the same associativity are performed. Either left-to-right or right-to-left."
        },
        {
          type: "text",
          content: "Unseen operators will be introduced in other chapters."
        },
        {
          type: "code",
          content: `
/*
  Precedence 1
  Associativity Left-to-Right
 */
::               // Scope resolution

/*
  Precedence 2
  Associativity Right-to-Left
 */
x++ x--         // Postfix inc/decrement
type() type{}   // Functional cast
a()             // Function call
a[]             // Subscript
x.y x->y        // Member access

/*
  Precedence 3
  Associativity Right-to-Left
 */
++x --x         // Prefix inc/decrement
+x -x           // Unary plus and minus
! ~             // Logical and bitwise NOT
(type)          // C-style cast
*x              // Indirection
&a              // Address of
sizeof          // Size of
co_await        // await-expression
new new[]       // Dynamic memory allocation
delete delete[] // Dynamic memory deallocation

/*
  Precedence 4
  Associativity Left-to-Right
 */
.* ->*          // Pointer to member

/*
  Precedence 5
  Associativity Left-to-Right
 */
a*b a/b a%b     // Multiplication, division, modulus

/*
  Precedence 6
  Associativity Left-to-Right
 */
a+b a-b         // Addition, subtraction

/*
  Precedence 7
  Associativity Left-to-Right
 */
<< >>           // Bitwise left and right shift

/*
  Precedence 8
  Associativity Left-to-Right
 */
<=>             // Three-way comparison

/*
  Precedence 9
  Associativity Left-to-Right
 */
< <= > >=       // Relational

/*
  Precedence 10
  Associativity Left-to-Right
 */
== !=           // Equality

/*
  Precedence 11
  Associativity Left-to-Right
 */
a&b             // Bitwise AND

/*
  Precedence 12
  Associativity Left-to-Right
 */
^               // Bitwise XOR

/*
  Precedence 13
  Associativity Left-to-Right
 */
|               // Bitwise OR

/*
  Precedence 14
  Associativity Left-to-Right
 */
&&              // Logical AND

/*
  Precedence 15
  Associativity Left-to-Right
 */
||              // Logical OR

/*
  Precedence 16
  Associativity Right-to-Left
 */
a?b:c           // Ternary conditional
throw           // Throw exception
co_yield        // yield-expression
=               // Direct assignment
+= -=           // Compound sum, difference
*= /= %=        // Compound product, quotient, remainder
<<= >>=         // Compound left, right shift
&= ^= |=        // Compound AND, XOR, OR

/*
  Precedence 17
  Associativity Left-to-Right
 */
,               // Comma
`

        },
        {
          type: "error",
          kind: "warning",
          content: `
Order of evaluation is determined at run-time; therefore considered \"unspecified.\"

For example, a() + b() + c() is parsed as (a() + b()) + c() (because of the + operator), however, c() may be evaluated first, last, or between a() or b() at run-time.
`
        }
      ]
    }
  ]
};

export default cpp_ch4;