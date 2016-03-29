---
title: 001-Two-Sum
date: 2016-03-29 04:06:04
tags: leetcode
---
## Basic ideas
Traverse the array and store the visited elements in a map. Once a new traversing element comes, find its missing part in the map according to the target, i.e., target - nums[i]. The total complexity is O (N * log(N)).

## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        Map<Integer, Integer> m = new HashMap<Integer, Integer>();
        for(int i = 0; i < nums.length; ++ i){
            int tmp = target - nums[i];
            if(m.containsKey(tmp)){
                int res = m.get(tmp);
                return new int[]{i, res};
            }
            else
                m.put(nums[i], i);
        }
        return null;
    }
}
{% endcodeblock %}
