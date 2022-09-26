const dp = {}

/**
 * Title: N-th Tribonacci Number
 *
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 *
 * Example 1:
 * Input: n = 4
 * Output: 4
 *
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4 *
 *
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
 if (n === 0) return 0
 else if (n < 3) return 1

 const first = dp[n - 3] ? dp[n - 3] : tribonacci(n - 3)
 const second = dp[n - 2] ? dp[n - 2] : tribonacci(n - 2)
 const third = dp[n - 1] ? dp[n - 1] : tribonacci(n - 1)

 dp[n] = first + second + third
 return first + second + third
}
