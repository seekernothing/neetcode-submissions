class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(arr, k) {
        let map = new Map();
        let count = 0;
        let sum = 0;
        map.set(0, 1);

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            let needed = sum - k;

            if (map.has(needed)) {
                count += map.get(needed) ;
            }

            map.set(sum, (map.get(sum) || 0) + 1);
        }

        return count
    }
    
}
