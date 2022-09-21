/**
 * Title: Longest Palindromic Substring Dynamic Programming Solution
 *
 * Difficulty: Medium
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
 if (s.length < 2) return s

 const dp = Array.from(Array(s.length), () => new Array(s.length).fill(1))

 let longestPalindrome = s.charAt(s.length - 1)

 for (let i = 1; i < s.length; i++) {
  for (let j = 0; j < s.length - i; j++) {
   const isPalindrome = s.charAt(j) === s.charAt(j + i) && dp[j + 1][j + i - 1]
   dp[j][j + i] = isPalindrome ? 1 : 0
   if (isPalindrome) longestPalindrome = s.substring(j, j + i + 1)
  }
 }

 return longestPalindrome
}
