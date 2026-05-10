class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l = 0,
        r = arr.length - 1

        while (l <= r) {
            let mid = Math.floor((l + r) / 2)

            if (target === arr[mid]) return mid

            if (arr[l] <= arr[mid]) {
                // means left portion of the array can be sorted 

                if (target >= arr[l] && target < arr[mid]) {
                    r = mid - 1
                } else {
                    l = mid +1
       }


            } else {
                //means right portion of the array is sorted 
                if (target <= arr[r] && target > arr[mid]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }
        return -1
    }
    }
    

