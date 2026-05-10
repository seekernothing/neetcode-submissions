class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let l = 0, 
        r = arr.length-1
        let area = 0
        
        while(l<r){

            let min = Math.min(arr[l],arr[r]) * (r-l)
            area = Math.max(area,min)

            if(arr[l]<arr[r]){
                l++
            }else{
                r--
            }
        }
        return area
    }
}
