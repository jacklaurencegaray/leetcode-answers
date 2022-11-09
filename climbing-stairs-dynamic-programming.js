/**
 * Title: Climbing Stairs
 *
 * Difficulty: easy
 *
 * You are climbing a staircase.
 * It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
 const cache = {}

 function climb(steps) {
  if (steps === n) return 1
  else if (steps > n) return 0

  const firstNum = cache[steps + 1] ? cache[steps + 1] : climb(steps + 1)
  const secondNum = cache[steps + 2] ? cache[steps + 2] : climb(steps + 2)

  cache[steps] = firstNum + secondNum

  return cache[steps]
 }

 return climb(0)
}
