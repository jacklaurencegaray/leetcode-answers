/**
 * Title: Middle of Linked List
 *
 * Difficulty: easy
 *
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 *
 * 1 -> 2 -> 3 -> 4 -> 5
 *           ^ middle
 *
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6
 *                ^ middle
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 *
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
 let numOfValues = 0

 for (
  let cursor = head;
  cursor !== null;
  numOfValues++, cursor = cursor.next
 ) {}

 const middle = Math.floor(numOfValues / 2) + 1

 for (let cursor = head, i = 1; cursor !== null; cursor = cursor.next, i++) {
  if (i === middle) return cursor
 }
}
