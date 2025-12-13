/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
/*
Optimized approach__
one Map - store the values and keep checking with target
*/



const towSumOptimized = (arr, target) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let need = target - arr[i]
        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(arr[i], i)
    }
    return null
}

console.log(towSumOptimized([2, 7, 11, 15], 9))
console.log(towSumOptimized([3, 2, 4], 6))
console.log(towSumOptimized([3, 2, 4], 64))