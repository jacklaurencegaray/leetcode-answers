/**
 * Title: Letter Combinations of a Phone Number
 *
 * Difficulty: medium
 *
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 *
 * 2: 'abc',
 * 3: 'def',
 * 4: 'ghi',
 * 5: 'jkl',
 * 6: 'mno',
 * 7: 'pqrs',
 * 8: 'tuv',
 * 9: 'wxyz',
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 *
 * @param {string} digits
 * @return {string[]}
 */

const numberToLetterMap = {
 2: "abc",
 3: "def",
 4: "ghi",
 5: "jkl",
 6: "mno",
 7: "pqrs",
 8: "tuv",
 9: "wxyz",
}

var letterCombinations = function (digits) {
 if (!digits.length) return []

 const results = []

 function appendToStr(currentStr, i) {
  if (currentStr.length === digits.length) {
   results.push(currentStr)
   return
  }

  for (const c of numberToLetterMap[Number(digits.charAt(i))]) {
   appendToStr(currentStr + c, i + 1)
  }
 }

 appendToStr("", 0)
 return results
}
