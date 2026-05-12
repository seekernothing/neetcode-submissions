class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(arr, k) {
        for(let i = 0 ; i<arr.length ; i++){
            let sum = 0 
            for(let j = i ; j<arr.length ; j++){

                sum+= arr[j]
                let len = j-i+1

                if(len>=2 && sum % k ===0)return true
            }
        }
        return false 
    }
}

