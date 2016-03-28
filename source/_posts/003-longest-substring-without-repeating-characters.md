---
title: 003-Longest-Substring-Without-Repeating-Characters
date: 2016-03-29 06:02:55
tags: leetcode
---
## Solution

{% codeblock lang:java %}
public class Solution {
    public int lengthOfLongestSubstring(String s) {

        //boundary test
        if(s.length () == 0)
            return 0;
        if(s.length () == 1)
            return 1;

        //initialize params
        int header = 0; int footer = header + 1; final int DUMMYINT = -1;
        int len = s.length(); int maxlen = DUMMYINT; //maxlen for maximal length

        //a set for storing intermediate none-duplicate char sets
        Set<Character> set = new HashSet<>();

        //add head element to the set
        //here s has a length of at least 2
        set.add(s.charAt(header));

        /*header and footer forms a window of maximal length
            two operations:
            1. enlarge window size by footer + 1
            2. reduce window size by header + 1
            either left or right boundary moves right by 1 in each loop, if the index is valid
        */

        //loop until header and footer both reach len - 1
        while (!(header >= footer && footer == (len - 1))) {

            //otherwise index out of range, since 's.charAt(footer)' below
            if(footer >= len)
                break;

            //footer moves right, enlarging window size
            if(!set.contains(s.charAt(footer))) {
                set.add ( s.charAt ( footer ) );
                ++footer;
            }

            //header moves right, reducing window size
            else{
                //whenever a duplicate key comes, count the max length
                maxlen = Math.max ( set.size (), maxlen );

                //move header to the right by 1
                set.remove ( s.charAt ( header ) );
                ++ header;

                //in case this right header was not added before
                set.add ( s.charAt ( header ) );

                //adjust footer
                if(header >= footer)
                    footer = header + 1;
            }
        }

        //last check
        maxlen = Math.max ( set.size (), maxlen );

        return maxlen;
    }
{% endcodeblock %}
