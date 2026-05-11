class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map1 = new Map();
        let map2 = new Map();

        for (let ch of s1) {
            map1.set(ch, (map1.get(ch) || 0) + 1);
        }

        let k = s1.length;

        for (let i = 0; i < k; i++) {
            let ch = s2[i];

            map2.set(ch, (map2.get(ch) || 0) + 1);
        }

        const isMatch = () => {
            for (let [key, val] of map1) {
                if (map2.get(key) !== val) return false;
            }
            return true;
        };

        if (isMatch()) return true;

        for (let i = k; i < s2.length; i++) {
            let newchar = s2[i];
            let oldchar = s2[i - k];

            map2.set(newchar, (map2.get(newchar) || 0) + 1);
            map2.set(oldchar, map2.get(oldchar) - 1);

            if (map2.get(oldchar) === 0) {
                map2.delete(oldchar);
            }

            if(isMatch()) return true
        }
        return false
    }
}
