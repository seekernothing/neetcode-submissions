class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let minval = Infinity,
            maxprofit = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < minval) {
                minval = arr[i];
            }

            let profit = arr[i] - minval;

            if (profit > maxprofit) {
                maxprofit = profit;
            }
        }
        return maxprofit;
    }
}
