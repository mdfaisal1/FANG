const isSubsequence = (s, t) => {
    let p1 = 0 // pointer for s

    for (let p2 = 0; p2 < t.length; p2++) {
        if (s[p1] === t[p2]) {
            p1++
        }
        if (p1 === s.length) return true
    }

    return false
}



console.log(isSubsequence("abcde", "ace"))
console.log(isSubsequence("abcdef", "aec"))