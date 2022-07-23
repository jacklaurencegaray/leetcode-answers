/**
 * Title: Container with the most water
 *
 * Difficulty: medium
 *
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *  9
 * 	8  		  |^|					   |^|
 * 	7  		  | |					   | |		 |^|
 * 	6  		  | |  |^|     			   | |		 | |
 * 	5  		  | |  | |       |^|       | |		 | |
 * 	4   	  | |  | |       | |  |^|  | |  |^|  | |
 * 	3  		  | |  | |       | |  | |  | |  | |  | |
 * 	2  		  | |  | |  |^|  | |  | |  | |  | |  | |
 * 	1 ___|^|__|_|__|_|__|_|__|_|__|_|__|_|__|_|__|_|_
 *        1    8    6    2    5    4    8    4    7
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
 let result = 0,
  l = 0,
  r = height.length - 1

 while (l !== r) {
  const area = (r - l) * Math.min(height[l], height[r])
  result = Math.max(result, area)

  if (height[l] <= height[r]) {
   l++
  } else {
   r--
  }
 }

 return result
}
