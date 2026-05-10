class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
       
         let score =  0
        for(let i = 0 ;i <s.length-1;i++){
            let val1 = s.charCodeAt(i)
            let val2 = s.charCodeAt(i+1)
         score+= Math.abs(val1-val2)
        }
        return score
    }
}
