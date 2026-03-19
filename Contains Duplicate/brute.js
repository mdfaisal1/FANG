const arr1 = [1, 2, 3, 1]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 4, 3]

const findDuplicate = (arr) => {
    for (let i=0; i<arr.length; i++){
        for (let j = i+1; j<arr.length; j++){
            if(arr[i] == arr [j]) return true
        }
    }
    return false
}

console.log(findDuplicate(arr1))
console.log(findDuplicate(arr2))
console.log(findDuplicate(arr3))