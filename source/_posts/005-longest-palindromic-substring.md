---
title: 005-Longest-Palindromic-Substring
tags: leetcode
date: 2016-03-30 21:11:22
---
## Basic ideas
Using a classical dynamic-programming style, with a time complexity of $O(N^2)$ and space complexity of $O(N^2)$. A table is introduced to store the palidromic information. If $table[i][j]$ is true, it means the string from $s[i]$ to $s[j]$ is palindromic. Initially, $table[i][i]$ is set to true, as well as $table[i - 1][i]$ if $s[i - 1] == s[i]$. The transition model is, $table[i][j]$ is true if $table[i + 1][j - 1] == true$ and $s[i] == s[j]$. The model is the key point of DP. Upon the loop, the first level is the temporary length that grows from $2$ to $s.length()$. The second level is to keep a window and moves from the begnning to $s.length() - tempLen$, judging if the string inside the window is a valid string. The window's size subjects to the temporary length. 

## NB
If loop from $0$ to $s.length()$ and assume each character(s) as the center of the palindromic string, then expand the string according to the center, the space complexity could be $O(1)$.
Manacher's algorithm could solve it in a linear time, but is not super easy to implement. 


## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public String longestPalindrome(String s) {

        //edge test
        if(s.length() <= 1)
            return s;

        final int DUMMY = -1;
        int len = s.length(); int maxLen = Integer.MIN_VALUE;
        int iMark = DUMMY; int jMark = DUMMY;

        //transition table
        boolean[][] table = new boolean[len][len];

        //initialization
        for(int i = 0; i < len; ++ i){
            table[i][i] = true;
        }
        for (int i = 1; i < len; ++ i){
             if(s.charAt(i) == s.charAt(i - 1)){
                 table[i - 1][i] = true;
                 maxLen = 2
                 iMark = i - 1; jMark = i;
             }
        }

        //state transition
        for(int tempLen = 2; tempLen <= len; ++ tempLen){
            for(int i = 0; i < len - tempLen; ++ i){
                int j = i + tempLen;
                if((table[i + 1][j - 1]) && (s.charAt(i) == s.charAt(j))){
                    table[i][j] = true;
                    if(( j - i + 1) > maxLen) {
                        maxLen = j - i + 1;
                        iMark = i; jMark = j;
                    }
                }
            }
        }
        return s.substring(iMark, jMark + 1);
    }
}
{% endcodeblock  %}
