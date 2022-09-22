/**
 * Title: Longest Valid Parentheses
 *
 * Difficulty: hard
 *
 * Given a string containing just the characters '(' and ')',
 * find the length of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 * Example 2:
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 * Example 3:
 * Input: s = ""
 * Output: 0
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
 if (!s.length || s.length === 1) return 0

 const stack = [-1]
 let maxLength = 0,
  i = 0

 for (; i < s.length; i++) {
  if (
   s.charAt(i) === ")" &&
   stack.length &&
   s.charAt(stack[stack.length - 1]) === "("
  ) {
   stack.pop()
  } else {
   stack.push(i)
   if (stack.length > 1) {
    maxLength = Math.max(
     maxLength,
     stack[stack.length - 1] - stack[stack.length - 2] - 1
    )
   }
  }
 }
 stack.push(i)

 maxLength = Math.max(
  maxLength,
  stack[stack.length - 1] - stack[stack.length - 2] - 1
 )

 return maxLength
}
