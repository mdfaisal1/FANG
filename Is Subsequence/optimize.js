const isSubsequence = (str1, str2) => {
    let p2 = 0  // pointer for str2

    for (let p1 = 0; p1 < str1.length; p1++) {
        // if characters match, move str2 pointer forward
        console.log(str1[p1], str2[p2])
        if (str1[p1] === str2[p2]) {
            p2++
        }
        // if str2 pointer reached the end — all chars matched in order
        if (p2 === str2.length) return true
    }

    return false
}



console.log(isSubsequence("abcde", "ace"))
console.log(isSubsequence("abcdef", "aec"))