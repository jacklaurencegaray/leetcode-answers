/**
 * Title: Valid Sudoku
 *
 * Difficulty: medium
 *
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated according to the following rules:
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * Example 1:
 * Input: board = [
 * 	["5","3",".",".","7",".",".",".","."],
 * 	["6",".",".","1","9","5",".",".","."],
 * 	[".","9","8",".",".",".",".","6","."],
 * 	["8",".",".",".","6",".",".",".","3"],
 * 	["4",".",".","8",".","3",".",".","1"],
 * 	["7",".",".",".","2",".",".",".","6"],
 * 	[".","6",".",".",".",".","2","8","."],
 * 	[".",".",".","4","1","9",".",".","5"],
 * 	[".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 *
 * Example 2:
 * [
 * 	["8","3",".",".","7",".",".",".","."],
 * 	["6",".",".","1","9","5",".",".","."],
 * 	[".","9","8",".",".",".",".","6","."],
 * 	["8",".",".",".","6",".",".",".","3"],
 * 	["4",".",".","8",".","3",".",".","1"],
 * 	["7",".",".",".","2",".",".",".","6"],
 * 	[".","6",".",".",".",".","2","8","."],
 * 	[".",".",".","4","1","9",".",".","5"],
 * 	[".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 *
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
 const size = 9

 for (let row = 0; row < size; row++) {
  const set = new Set()
  for (let column = 0; column < size; column++) {
   if (board[row][column] === ".") continue
   if (set.has(board[row][column])) return false
   set.add(board[row][column])
  }
 }

 for (let row = 0; row < size; row++) {
  const set = new Set()
  for (let column = 0; column < size; column++) {
   if (board[column][row] === ".") continue
   if (set.has(board[column][row])) return false
   set.add(board[column][row])
  }
 }

 const subboxLength = size / 3
 const check3x3Matrix = (rowStart, columnStart) => {
  const set = new Set()
  for (let row = rowStart; row < rowStart + 3; row++) {
   for (let column = columnStart; column < columnStart + 3; column++) {
    if (board[row][column] === ".") continue
    if (set.has(board[row][column])) return false
    set.add(board[row][column])
   }
  }
  return true
 }

 for (let row = 0; row < subboxLength; row++) {
  for (let column = 0; column < subboxLength; column++) {
   if (!check3x3Matrix(row * 3, column * 3)) {
    return false
   }
  }
 }

 return true
}
