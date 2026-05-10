class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0

        for(let num of nums){
         if(!set.has(num-1)){
            let curr = num
            let count = 1

            while(set.has(curr +1)){
                curr++
                count++
            }

            longest = Math.max(longest,count)
         }
        }
        return longest
    }
    
}
