const str1 = "anagram"
const str2 = "nagaram"

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const map = new Map();

    for (let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of str2) {
        map.set(char, (map.get(char) || 0) - 1);
    }

    for (let count of map.values()) {
        if (count !== 0) return false;
    }

    return true;
}

console.log(isAnagram(str1, str2))