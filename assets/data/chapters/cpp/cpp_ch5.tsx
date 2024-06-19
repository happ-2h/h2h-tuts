import { ChapterObject } from "@/types";

const cpp_ch5: ChapterObject = {
  id: "cpp_ch5",
  content: [
    {type: "header", content: "Bitwise Operators"},
    {
      type: "view",
      title: "Operators",
      content: [
        {
          type: "text",
          content: "Bitwise operations work best with unsigned integers. Bits are not sacrificed and are not optimized (optimization may lead to loss of data or precision).\nNegative flag is preserved, however, it is undefined behavior.\nNon integral types throw errors when using most bitwise operations."
        },
        {
          type: "subheading",
          content: "Shifting"
        },
        {
          type: "code",
          content: `
/*
  Left Shift

  x << y
  Binary representation of x gets
  shifted left y times

  Common usage: x * 2^y
 */
unsigned int a{2};
a<<1; // Returns  4
a<<2; // Returns  8
a<<3; // Returns 16
a<<4; // Returns 32
a<<5; // Returns 64


/*
  Right Shift

  x >> y
  Binary representation of x gets
  shifted right y times

  Common usage: ⌊x / 2^y⌋
 */
unsigned int a{16};
a<<1; // Returns 8
a<<2; // Returns 4
a<<3; // Returns 2
a<<4; // Returns 1
a<<5; // Returns 0
`
        },
        {
          type: "subheading",
          content: "Logical Operations"
        },
        {
          type: "code",
          content: `
/*
  NOT

  ~x
  Flips all the bits.

  Same as: x * -1 - 1
 */
unsigned int a{5};
~a; // Returns -6


/*
  AND

  x & y
  Performs an AND operation

  0 & 0 = 0
  0 & 1 = 0
  1 & 0 = 0
  1 & 1 = 1

  Commonly used to isolate bits
 */
unsigned int a{5};
a & 1; // Returns 1
a & 6; // Returns 4


/*
  OR

  x | y
  Performs an OR operation

  0 | 0 = 0
  0 | 1 = 1
  1 | 0 = 1
  1 | 1 = 1

  Commonly used to combine bits
 */
unsigned int a{5};
a | 1; // Returns 5
a | 6; // Returns 7


/*
  XOR

  x ^ y
  Performs an XOR operation

  0 ^ 0 = 0
  0 ^ 1 = 1
  1 ^ 0 = 1
  1 ^ 1 = 0

  Commonly used to compare bits
 */
unsigned int a{5};
a ^ 1; // Returns 4
a ^ 6; // Returns 3
a ^ 5; // Returns 0
`
        }
      ]
    },
    {
      type: "view",
      title: "std::bitset",
      content: [
        {
          type: "text",
          content: "Useful when you're actually working with bits."
        },
        {
          type: "good",
          kind: "good",
          content: "While std::bitset is great for working with bits, if you're using whole numbers for your application, consider using int instead (bitset types do not work with other types)."
        },
        {
          type: "code",
          content: `
// Use \# not \\#
\\#include <bitset>

...
/*
  std::bitset<n> [identifier]{};
  n = number of bits
 */
std::bitset<8> bits{ 0b0010'1101 };

/*
  test(n) returns the
  value of the bit in
  position n (1 or 0, true or false).

  Rightmost bit is position 0
 */
bits.test(0); // 1
bits.test(3); // 1
bits.test(6); // 0

/*
  set() sets all bits to 1.
  set(n) sets bit at n to 1

  if a bit is already 1,
  nothing happens.
 */
bits.set(0); // nothing happened
bits.set(1); // 0b0010'1111

/*
  reset() sets all bits to
  0.
  reset(n) sets bit at n
  to 0.

  if a bit is already 0,
  nothing happens.
 */
bits.reset(0); // 0b0010'1110
bits.reset(1); // 0b0010'1100

/*
  flip() flips all bits meaning
  1 is now 0 and 0 is now 1.
  flip(n) flips the bit
  at position n.
 */
bits.flip(6); // 0b0000'1100
bits.flip(0); // 0b0000'1101
`
        }
      ]
    },
    {
      type: "view",
      title: "Bitmasking",
      content: [
        {
          type: "text",
          content: "Bitmasking is used to keep, change, or modify bits in certain positions. There are many masks and methods, this is just an introduction to basic masks."
        },
        {
          type: "code",
          content: `
/*
  Check if certain bits are set
 */
0b1010 & 0b1000; // Is bit 3 set?
0b1010 & 0b0001; // Is bit 0 set?
0b1010 & 0b1001; // Are bits 0 and 3 set?


/*
  Set bits
 */
0b0000 |= 0b0100; // Set bit 2
0b0000 |= 0b1100; // Set bits 3 and 2
0b0000 |= ( 0b1000 | 0b0100); // Set bits 3 and 2


/*
  reset bits
 */
0b0101 &= ~0b0100; // reset bit 2
0b0101 &= ~0b0101; // reset bits 2 and 0
0b0101 &= ~(0b0100 | 0b0001); // reset bits 2 and 0


/*
  flip bits
 */
0b0110 ^= 0b1010; // flips bits 1 and 3
`
        }
      ]
    }
  ]
};

export default cpp_ch5;