class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()

        for(let no of nums){
            map.set(no,(map.get(no)||0)+1)
        }

        for(let no of map.keys()){
            if(map.get(no)>1){
                return true
            }
        }
        return false
    }
}
