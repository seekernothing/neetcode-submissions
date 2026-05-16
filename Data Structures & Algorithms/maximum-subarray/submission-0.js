class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(arr) {
        let curr = arr[0],
            max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            curr = Math.max(arr[i], curr + arr[i]);
            max = Math.max(max, curr);
        }
        return max;
    }
}
