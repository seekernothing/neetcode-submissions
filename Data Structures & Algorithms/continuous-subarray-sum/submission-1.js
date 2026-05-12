class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(arr, k) {
        /*
        for(let i = 0 ; i<arr.length ; i++){
            let sum = 0 
            for(let j = i ; j<arr.length ; j++){

                sum+= arr[j]
                let len = j-i+1

                if(len>=2 && sum % k ===0)return true
            }
        }
        return false 

        */

        let sum = 0;
        let map = new Map();
        map.set(0,-1)

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            let rem = sum % k;

            if (map.has(rem)) {
                let firstidx = map.get(rem);

                if (i - firstidx >= 2) {
                    return true;
                } 
            }else {
                    map.set(rem, i);
                }
        }
        return false;
    }
}
