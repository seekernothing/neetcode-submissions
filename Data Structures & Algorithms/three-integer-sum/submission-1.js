class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        arr = arr.sort((a, b) => a - b)
        let res = []

        for (let i = 0; i < arr.length; i++) {
            if (i === 0 || arr[i] !== arr[i - 1]) {
                twoSum(arr, i, res)
            }
        }
        return res
    }


    

   
}

function twoSum(arr, i, res) {

    let l = i + 1, r = arr.length - 1

    while (l < r) {
        let sum = arr[i] + arr[l] + arr[r]

        if (sum < 0) {
            l++
        } else if (sum > 0) {
            r--
        } else {
            res.push([arr[i], arr[l], arr[r]])
            l++
            r--

            while (l < r && arr[l] === arr[l - 1]) l++
             while (l < r && arr[r] === arr[r + 1]) r--
        }
    }
}


