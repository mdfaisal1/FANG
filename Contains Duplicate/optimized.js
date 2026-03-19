const arr1 = [1, 2, 3, 1]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 4, 3]

const findDuplicate = (arr) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) return true
        map.set(arr[i], i)
    }
    return false
}

console.log(findDuplicate(arr1))
console.log(findDuplicate(arr2))
console.log(findDuplicate(arr3))