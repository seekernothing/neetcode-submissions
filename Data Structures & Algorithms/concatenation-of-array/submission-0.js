class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let copyArr = [...nums]

        for(let i=0;i<nums.length;i++){
            copyArr.push(nums[i])
        }

        return copyArr
    }
}
