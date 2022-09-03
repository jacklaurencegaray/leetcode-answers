/**
 * Title: Merge Two Sorted Lists
 *
 * Difficulty: easy
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * 	Input 1:	1 -> 2 -> 4
 * 	Input 2:	1 -> 3 -> 4
 *  Result:		1 -> 1 -> 2-> 3 -> 4-> 4
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
 if (!l1) return l2

 if (!l2) return l1

 if (l1.val < l2.val) {
  l1.next = mergeTwoLists(l1.next, l2)
  return l1
 } else {
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
 }
}
