---
title: 007-Reverse-Integer
tags: leetcode
date: 2016-04-10 19:48:30
---
## Basic ideas
Another boring problem. Need to think over the max value of integer. The maximal value of 32-bit signed integer is $2147483647$, however reversing it becomes $7463847412$, which is larger than the max valuve of integer. A little tricky solution would be using a long variable to check if the result is larger than Integer.MAT_VALUE. 
## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public int reverse(int x) {
        boolean flag = false;
        long res = 0;
        if(x < 0){
            x = -x;
            flag = true;
        }

        for(;x > 0;){
            res *= 10;
            res += (x - x/10*10);
            x /= 10;
        }
        if(res > Integer.MAX_VALUE)
            return 0;
        if(flag)
            res = -res;

        return (int)res;
    }
}
{% endcodeblock  %}
