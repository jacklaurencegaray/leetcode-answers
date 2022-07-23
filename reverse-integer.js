/**
 * Title: Reverse Integer
 *
 * Difficulty: medium
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit
 * integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 * Input: x = 120
 * Output: 21
 *
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
 const isNegative = x < 0
 let result = 0

 if (x < 0) x = x * -1

 while (x > 0) {
  let lastDigit = x % 10
  result = result * 10 + lastDigit
  x = Math.floor(x / 10)
 }

 if (isNegative) result = -result

 if (result <= Math.pow(-2, 31) || result >= Math.pow(2, 31)) return 0

 return result
}
