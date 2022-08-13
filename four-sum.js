/**
 * Title: Four Sum
 *
 * Difficulty: medium
 *
 * Given an array nums of n integers,
 * return an array of all the unique quadruplets
 * [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 * Example 2:
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *
 * Constraints:
 * 1 <= nums.length <= 200
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
 const sortedNums = nums.sort((a, b) => a - b)
 const quad = [],
  res = []

 function kSum(k, start, target) {
  if (k != 2) {
   for (let i = start; i < sortedNums.length - k + 1; i++) {
    if (i > start && sortedNums[i] === sortedNums[i - 1]) continue

    quad.push(sortedNums[i])
    kSum(k - 1, i + 1, target - sortedNums[i])
    quad.pop()
   }
  } else {
   let left = start,
    right = sortedNums.length - 1

   while (left < right) {
    if (sortedNums[left] + sortedNums[right] < target) {
     left++
    } else if (sortedNums[left] + sortedNums[right] > target) {
     right--
    } else {
     res.push([...quad, sortedNums[left], sortedNums[right]])
     left++
     while (sortedNums[left] === sortedNums[left - 1]) {
      left++
     }
    }
   }
  }
 }

 kSum(4, 0, target)

 return res
}

console.log(fourSum([5, 9, 12, 5, 13, 22, 1, 8, 0], 18))
