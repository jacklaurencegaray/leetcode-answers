/**
 * Title: Longest Common Prefix
 *
 * Difficulty: easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 if (!strs.length) return ""

 if (strs.length === 1) return strs[0]

 const referenceStr = strs[0]
 let result = ""

 for (let i = 0; i < referenceStr.length; i++) {
  let currentCharacter = referenceStr.charAt(i)
  for (let j = 1; j < strs.length; j++) {
   if (currentCharacter !== strs[j].charAt(i)) return result
  }
  result = `${result}${currentCharacter}`
 }

 return result
}
