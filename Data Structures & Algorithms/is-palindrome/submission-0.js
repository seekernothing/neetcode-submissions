class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s= s.toLocaleLowerCase()
       
       let left = 0,right = s.length-1

       while(left<right){
        if(!s[left].match(/[a-z0-9]/i)){
            left++
        }else if(!s[right].match(/[a-z0-9]/i)){
            right--
        }else if (s[left]===s[right]){
            left++
            right--
        }else{
            return false
        }
       }

       return true
       
        
    }
}
