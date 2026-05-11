class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let i = 0,
            count = 0,
            maxlen = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === 0) count++;

            while (count > k) {
                if (nums[i] === 0) count--;
                i++;
            }
            maxlen = Math.max(maxlen, j - i + 1);
        }
        return maxlen;
    }
}
