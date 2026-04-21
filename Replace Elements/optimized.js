const replaceElements = (arr) => {
    let maxSoFar = -1; // last element always becomes -1

    for (let i = arr.length - 1; i >= 0; i--) {
        // 1. save current element before overwriting
        let currElem = arr[i];
        // 2. set arr[i] = maxSoFar
        arr[i] = maxSoFar;
        // 3. update maxSoFar = max(maxSoFar, saved value)
        maxSoFar = maxSoFar > currElem ? maxSoFar : currElem;
    }

    return arr;
};

console.log(replaceElements([17, 18, 4, 5, 6, 1]));
