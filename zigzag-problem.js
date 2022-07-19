/**
 * Title: Zigzag Conversion
 * 
 * Difficulty: Medium
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * string convert(string s, int numRows);
 *  
 * 
 * Example 1:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Example 2:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * Example 3:
 * 
 * Input: s = "A", numRows = 1
 * Output: "A"
 *  
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
 if (numRows < 2) return s

 const S = new Array(numRows).fill("")

 // iterate through each character in s
 for (let textCursor = 0; textCursor < s.length; textCursor) {
  // go down numRows times
  for (
   let down = 0;
   down < numRows && textCursor < s.length;
   down++, textCursor++
  )
   S[down] = S[down].concat(s.charAt(textCursor))

  // go diagonally (numRows - 2) times
  for (
   let dia = numRows - 2;
   dia > 0 && textCursor < s.length;
   dia--, textCursor++
  )
   S[dia] = S[dia].concat(s.charAt(textCursor))
 }

 return S.reduce(
  (concatenatedStrings, substring) => concatenatedStrings.concat(substring),
  ""
 )
}
