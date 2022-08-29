/**
 * Title: Generate Parentheses
 *
 * Difficulty: medium
 *
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Input: n = 1
 * Output: ["()"]
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
 const res = []

 function backtrack(currentStr, nOfOpen, nOfClosed) {
  if (nOfOpen === nOfClosed && nOfOpen === n) {
   res.push(currentStr)
   return
  }

  if (nOfOpen < n) backtrack(currentStr + "(", nOfOpen + 1, nOfClosed)

  if (nOfClosed < nOfOpen) backtrack(currentStr + ")", nOfOpen, nOfClosed + 1)
 }

 backtrack("", 0, 0)

 return res
}
