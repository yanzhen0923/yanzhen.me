---
title: 009-Palindrome-Number
tags: leetcode
date: 2016-04-10 23:02:01
---
## Basic ideas
Negetive integers are not palindrome. Compare the left-most with the right-most digits step by step.
## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0)
            return false;

        int divider = 1;
        while (x / divider >= 10) {
            divider *= 10;
        }

        int left; int right;
        while (x != 0){
            left = x / divider;
            right = x % 10;

            if(left != right)
                return  false;

            x = (x - left * divider) / 10;
            divider /= 100;

        }
        return true;

    }
}
{% endcodeblock  %}
