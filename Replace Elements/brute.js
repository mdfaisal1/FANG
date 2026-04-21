const replaceElements = (arr) => {
    let resArr = [];
    let hN = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            hN = hN > arr[j] ? hN : arr[j];
        }
        resArr[i] = hN;
        hN = 0;
        if (i + 1 == arr.length) resArr[i] = -1;
    }
    return resArr;
};
console.log(replaceElements([17, 18, 4, 5, 6, 1]));