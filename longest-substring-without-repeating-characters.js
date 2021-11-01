/**
 * Title: Longest Substring Without Repeating Characters
 *
 * Difficulty: Medium
 * 
 * Problem:
 * Given a string s, find the length of the longest substring without repeating characters
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * Example 4:
 * Input: s = ""
 * Output: 0
 * 
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 * 

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
 if (!s.length) return 0

 const str = [...s]

 let start = 0
 let end = 0
 const set = new Set()
 let maxLength = 0

 set.add(str[end])
 end++

 while (end < str.length) {
  const endChar = str[end]

  while (set.has(endChar)) {
   set.delete(str[start])
   start++
  }

  set.add(endChar)

  maxLength = Math.max(end - start, maxLength)
  end++
 }

 return maxLength + 1
}
