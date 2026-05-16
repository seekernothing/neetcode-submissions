class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(arr) {
        let res = [];
        let left = 1;

        for (let i = 0; i < arr.length; i++) {
            res[i] = left;
            left *= arr[i];
        }

        let right = 1;

        for (let i = arr.length - 1; i >= 0; i--) {
            res[i] *= right;
            right *= arr[i];
        }

        return res;
    }
}
