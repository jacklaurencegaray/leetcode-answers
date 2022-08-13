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
