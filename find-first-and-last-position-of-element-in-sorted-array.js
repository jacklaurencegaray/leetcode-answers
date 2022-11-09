/**
 * Title: Find First and Last Position of Element in Sorted Array
 *
 * Difficulty: medium
 *
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
 function binarySearch(isLeft) {
  let left = 0,
   right = nums.length - 1,
   lastFound = -1

  while (left <= right) {
   let middle = Math.floor((left + right) / 2)

   if (target === nums[middle]) {
    lastFound = middle

    if (isLeft) {
     right = middle - 1
    } else {
     left = middle + 1
    }
   } else if (target < nums[middle]) {
    right = middle - 1
   } else if (target > nums[middle]) {
    left = middle + 1
   }
  }

  return lastFound
 }

 return [binarySearch(true), binarySearch()]
}
