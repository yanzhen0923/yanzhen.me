---
title: 004-Median-of-Two-Sorted-Arrays
date: 2016-03-29 06:10:21
tags: leetcode
---
## Basic ideas
### Find the median
This problem could be treated as a special case of find k-th smallest element in two sorted arrays. Say $m$ and $n$ are the lengths of the two arrays respectively. Then, if $m + n$ is odd, find the $ (\frac{m + n}{2} + 1)$th smallest element as the median. If $m + n$ is even, then find the $(\frac{m + n}{2})$th and the $(\frac{m + n}{2} + 1)$th smallest element, then count the average as the median.

### Find the k-th smallest element
Using a divide-and-conquer style could reach a complexity of only $O(logK)$.
If there are two arrays, $arr1$ and $arr2$, then compare the values of $arr1[\frac{k}{2}]$ and $arr2[\frac{k}{2}]$. 
If $arr1[\frac{k}{2}]$ > $arr2[\frac{k}{2}]$, this means all the elements in $arr2$ before $arr2[\frac{k}{2}]$ must be smaller than the k-th smallest element, so just simply discard those elements. Then, since $\frac{k}{2}$ elements are dicarded, the problem becomes find the $ k - \frac{k}{2}$ smallest number. Vice versa. Keep recursion unitl $k == 1$ or the beginning index is larger than the size of the assigned array.
<!-- more -->
## Solution
{% codeblock lang:java line_number:false %}
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int len = nums1.length + nums2.length;
        if((len & 1 ) == 1) {
            return findkth ( nums1, 0, nums2, 0, (len >> 1) + 1 ) / 1.0;
        }else{
            return (findkth ( nums1, 0, nums2, 0, (len >> 1) + 1) +
                    findkth ( nums1, 0, nums2, 0, len >> 1 )) / 2.0;
        }
    }

    public int findkth(int[] arr1, int arr1Start, int[] arr2, int arr2Start, int k){

        if(arr1Start >= arr1.length)
            return arr2[arr2Start + k - 1];
        if(arr2Start >= arr2.length)
            return arr1[arr1Start + k - 1];
        if(k == 1)
            return Math.min ( arr1[arr1Start], arr2[arr2Start] );

        int arr1Index = arr1Start + (k >> 1) - 1;
        int arr2Index = arr2Start + (k >> 1) - 1;

        int arr1Value = arr1Index >= arr1.length ? Integer.MAX_VALUE : arr1[arr1Index];
        int arr2Value = arr2Index >= arr2.length ? Integer.MAX_VALUE : arr2[arr2Index];

        if(arr1Value > arr2Value){
            return findkth ( arr1, arr1Start, arr2, arr2Start + (k >> 1), k - (k >> 1));
        }else{
            return findkth ( arr1, arr1Start + (k >> 1), arr2, arr2Start,  k - (k >> 1));
        }
    }
}
{% endcodeblock %}
