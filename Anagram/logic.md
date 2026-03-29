# 🔤 Valid Anagram

> **LeetCode #242** · Difficulty: 🟢 Easy · Pattern: **Arrays & Hashing**  
> **Companies:** Amazon · Microsoft · Google  
> **Solved in:** 1 hr 15 min · Logic figured out independently ✅ · Looked at syntax for implementation

---

## 📋 Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An anagram is a word formed by **rearranging the letters** of another word, using all original letters exactly once.

```
Input:  s = "anagram", t = "nagaram"  →  Output: true
Input:  s = "rat",     t = "car"      →  Output: false
Input:  s = "a",       t = "ab"       →  Output: false
```

---

## 🧠 The Core Insight

> **"Two strings are anagrams if and only if every character appears with the exact same frequency in both."**

So the question becomes:  
Count frequency of each character in `s`, then verify `t` has the exact same counts.

---

## 🐢 Approach 1 — Brute Force (Sort & Compare)

### Logic
If two strings are anagrams, sorting both will produce the **identical string**.

```javascript
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}
```

### How it works
```
s = "anagram" → sorted → "aaagmnr"
t = "nagaram" → sorted → "aaagmnr"
"aaagmnr" === "aaagmnr" → true ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n log n)** — sorting dominates |
| 💾 Space | **O(n)** — creating new sorted arrays |

### Why it's not ideal
Works fine for small strings, but sorting is wasteful when we can do it in one pass with O(n).

---

## ⚡ Approach 2 — Optimized (Frequency HashMap)

### Logic
- **Increment** frequency for every character in `s`
- **Decrement** frequency for every character in `t`
- If all counts are `0` at the end → perfect balance → anagram ✅
- If any count is non-zero → mismatch → not an anagram ❌

```javascript
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const map = new Map();

    for (let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);  // increment for str1
    }

    for (let char of str2) {
        if (!map.has(char)) return false;           // char not in str1 at all
        map.set(char, map.get(char) - 1);           // decrement for str2
    }

    return [...map.values()].every(count => count === 0);  // all must be zero
};
```

### How it works — step by step
```
str1 = "anagram"
str2 = "nagaram"

After loop 1 (counting str1):
map = { a:3, n:1, g:1, r:1, m:1 }

After loop 2 (decounting str2 — n,a,g,a,r,a,m):
map = { a:0, n:0, g:0, r:0, m:0 }

All values === 0 → return true ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n)** — two single passes, O(n) + O(n) = O(n) |
| 💾 Space | **O(k)** — k = number of unique characters (max 26 for lowercase) |

---

## 🔑 The Most Important Line — Memorise This

```javascript
map.set(char, (map.get(char) || 0) + 1);
```

**Break it down:**
- `map.get(char)` → get current count, or `undefined` if first time
- `|| 0` → if undefined, default to 0
- `+ 1` → increment the count
- `map.set(char, ...)` → store it back

> This single line is the **foundation of every frequency counting problem**.  
> You will write this exact line in Group Anagrams, Top K Frequent, and many more.

---

## ✨ Slightly Cleaner Alternative

Remove the `map.has(char)` check in the second loop — handles new characters naturally:

```javascript
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const map = new Map();

    for (let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);   // increment
    }

    for (let char of str2) {
        map.set(char, (map.get(char) || 0) - 1);   // decrement
    }

    for (let count of map.values()) {
        if (count !== 0) return false;              // any mismatch → false
    }

    return true;
}
```

Both solutions are correct — the second is slightly cleaner for interviews.

---

## 💬 What to Say in an Interview

> *"I'll use a frequency HashMap. I increment the count for each character in s, then decrement for each character in t. If both strings are true anagrams, every character's count will cancel out to exactly zero. This runs in O(n) time and O(k) space where k is the size of the character set — at most 26 for lowercase English letters."*

---

## ⚠️ Edge Cases to Handle

```
s = "",    t = ""          → true  (both empty, length check passes)
s = "a",   t = "ab"        → false (length check catches this immediately)
s = "aab", t = "bba"       → false (frequency mismatch caught at end)
s = "rat", t = "car"       → false (r:0, a:0, t:1 → not all zero)
```

**Always check length first** — it's O(1) and eliminates a huge number of cases instantly.

---

## 🔗 Pattern Recognition — This Unlocks These Problems

> **Pattern: Frequency counting with HashMap**  
> Increment for one source, decrement for another, verify balance.

| Problem | How this pattern applies |
|---|---|
| ✅ Contains Duplicate | Set for existence check |
| ✅ Valid Anagram | Frequency map — you are here |
| 🔜 Two Sum | Complement map — same `(map.get(x) || 0) + 1` line |
| 🔜 Group Anagrams | Sorted key as HashMap key |
| 🔜 Top K Frequent Elements | Frequency map + heap |
| 🔜 Longest Consecutive Sequence | Set for O(1) lookup |

---

## 💡 Key Takeaway for Revision

If you forget everything else, remember this:

```
1. Check lengths first → O(1) early exit
2. Count frequency of s  → increment map
3. Count frequency of t  → decrement map
4. All zeros = anagram   → return true
```

---

## 📊 My Attempt Log

| Attempt | Date | Time Taken | Approach | Notes |
|---|---|---|---|---|
| 1 | Day 2 | 1 hr 15 min | Optimized (HashMap) | Logic figured out independently. Needed to look at syntax for implementation. Key learning: frequency increment/decrement pattern. |

---

## 🏷️ Tags
`Arrays` `Hashing` `HashMap` `Frequency Count` `String` `Easy` `Amazon` `Microsoft` `NeetCode-150` `Blind-75`