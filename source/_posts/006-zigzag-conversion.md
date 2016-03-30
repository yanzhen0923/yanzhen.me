---
title: 006-ZigZag-Conversion
tags: leetcode
date: 2016-03-31 00:02:19
---
## Basic ideas
A boring problem finding some regulations. The step length is $2numRows - 2$. The characters in the first row and the last row jumps regularly by the step length. For the rest rows, the index jumps by 2 different steps, $step1 = 2(numRows - i - 1)$ and $step2 = step - step1$ respectively. Set a flag to switch to the other length of step in the next jump.
## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public String convert(String s, int numRows) {

        if(s.length() == 1 || numRows == 1)
            return s;

        StringBuilder str = new StringBuilder();
        int step = (numRows << 1) - 2;

        //first row
        for(int i = 0; i < s.length(); i += step){
            str.append(s.charAt(i));
        }

        //middle rows
        for(int i = 1; i < numRows - 1; ++ i){

            int j = i; boolean flag = true;
            int step1 = (numRows - i - 1) << 1;
            int step2 = step - step1;

            while (j < s.length()){
                str.append(s.charAt(j));
                if(flag)
                    j += step1;
                else
                    j += step2;
                flag ^= true;
            }

        }

        //last row
        for(int i = numRows - 1; i < s.length(); i += step){
            str.append(s.charAt(i));
        }

        return str.toString();
    }
}
{% endcodeblock  %}
