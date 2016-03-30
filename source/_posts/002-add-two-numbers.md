---
title: 002-Add-Two-Numbers
date: 2016-03-29 05:25:18
tags: leetcode
---
## Basic ideas
The problem is quite clear but with several tricks. Basicly just add the digits one by one and count in the carries, then move to the next digit by moving the pointer until the end.
### Trick 1
Need to initialize a pointer at the very beginning, then assign a random value to it. Upon returning, return pointer.next instead of itself.
### Trick 2
The two lists might in different lengths. Do not move any step further if a list has reached the end
### Trick 3
Remember the last carry, a new node must be created if the last carry is non-zero.
<!-- more -->
## Solution
{% codeblock lang:java line_number:false %}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode ans = new ListNode(0); ListNode pointer;
        pointer = ans; int carry = 0; int tmp = 0; int cur = 0;
        
        if(l1 == null && l2 == null)
            return null;
        
        while(l1 != null || l2 != null){
                tmp = 0;
                //tmp result
                if(l1 != null){
                    tmp += l1.val;
                    l1 = l1.next;
                }
                if(l2 != null){
                    tmp += l2.val;
                    l2 = l2.next;
                }
                tmp += carry;
                
                //carry for next digit
                carry = tmp / 10;
    
                //current digit
                cur = tmp % 10;
                
                //set node value and link
                //then move to the next
                pointer.next = new ListNode(cur);

                pointer = pointer.next;
        }
        
        if(carry != 0){
            pointer.next = new ListNode(carry);
        }
        
        return ans.next;
    }
}
{% endcodeblock%}
