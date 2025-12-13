/*
Brute force approach__
two loops - CHECK ALL PAIRS
*/

const towSumBrute = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
    return null
}

console.log(towSumBrute([2, 7, 11, 15], 9))
console.log(towSumBrute([3, 2, 4], 6))
console.log(towSumBrute([3, 2, 4], 64))