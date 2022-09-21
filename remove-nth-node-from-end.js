/**
 * Title: Remove Nth Node from End of List
 *
 * Difficulty: medium
 *
 * Given the head of a linked list,
 * remove the nth node from the end of the list and return its head.
 *
 * Example 1:
 * 		1 -> 2 -> 3 -> 4 -> 5
 *                     ^ remove
 *      1 -> 2 -> 3-> 5
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
 if (!head.next) return null

 let lengthOfList = 0

 for (let cursor = head; cursor; lengthOfList++, cursor = cursor.next) {}

 if (lengthOfList - n === 0) {
  head = head.next
 } else {
  for (let cursor = head, nth = 0; cursor; nth++, cursor = cursor.next) {
   if (nth + 1 === lengthOfList - n) {
    cursor.next = cursor.next?.next ?? null
   }
  }
 }

 return head
}
