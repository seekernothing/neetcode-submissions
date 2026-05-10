class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length, res = new Array(n)

        // prefix product
        let left = 1
        for(let i = 0 ; i<n;i++){
            res[i] = left
            left *= nums[i]
        }

        // suffix product

        let right = 1
        for(let i=n-1;i>=0;i-- ){
            res[i] *= right
            right*= nums[i]
        }

        return res
    }
}
