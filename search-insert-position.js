/**
 * Title: Search Insert Position
 *
 * Difficulty: medium
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
 const binarySearch = function (low, high) {
  const mid = Math.ceil((low + high) / 2)

  if (low > high) return high + 1

  if (nums[mid] === target) {
   return mid
  } else if (nums[mid] < target) {
   return binarySearch(mid + 1, high)
  } else {
   return binarySearch(low, mid - 1)
  }
 }

 return binarySearch(0, nums.length - 1)
}
