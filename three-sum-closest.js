/**
 * Title: 3Sum Closest
 *
 * Difficulty: medium
 *
 * Given an integer array nums of length n and an integer target,
 * find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example 1:
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 *
 *
 * Constraints:
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -104 <= target <= 104
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
 const sortedNums = nums.sort((a, b) => a - b)
 let closestSum = Number.MIN_SAFE_INTEGER

 for (let i = 0; i < sortedNums.length - 2; i++) {
  for (let left = i + 1, right = sortedNums.length - 1; left < right; ) {
   const currentSum = sortedNums[i] + sortedNums[left] + sortedNums[right]

   if (currentSum === target) {
    return target
   }

   if (Math.abs(target - closestSum) > Math.abs(target - currentSum)) {
    closestSum = currentSum
   }

   if (currentSum > target) {
    right--
   } else {
    left++
   }
  }
 }

 return closestSum
}
