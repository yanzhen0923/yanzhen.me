---
title: 008-String-to-Integer-atoi
tags: leetcode
date: 2016-04-10 20:37:44
---
## Basic ideas
Find the first none-space character, check validation and the sign, then convert one by one. Once an invalid char or a number that is larger than Integer.MAX comes, return.
## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public int myAtoi(String str) {
        int sz = str.length();

        if(sz == 0)
            return 0;

        //find the first none-space char
        int start_index;
        for(start_index = 0; start_index < sz; ++ start_index){
            if(str.charAt(start_index) != ' ')
                break;
        }

        long ret = 0;

        //if the first char is not valid then return
        char tmp = str.charAt(start_index);
        if(!(Character.isDigit(tmp) || tmp == '-' || tmp == '+')){
            return 0;
        }

        //if the first valid char means a negative number
        boolean sign_flag = (str.charAt(start_index) == '-') ? true : false;
        boolean pos_flag = Character.isDigit(str.charAt(start_index)) ? false : true;

        for(int i = pos_flag ? start_index + 1 : start_index; i < sz; ++ i){
            //if a invalid char comes, return the previous result
            if(!(Character.isDigit(str.charAt(i)))){
                return sign_flag ? -(int)ret : (int)ret;
            }

            //if the result is larger than Integer.MAX
            if((ret * 10 + (Character.getNumericValue(str.charAt(i)))) > Integer.MAX_VALUE)
                return sign_flag ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            ret = ret * 10 + Character.getNumericValue(str.charAt(i));
        }

        return sign_flag ? -(int)ret : (int)ret;
    }
}
{% endcodeblock  %}
