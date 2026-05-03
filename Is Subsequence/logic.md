# 🔤 Is Subsequence

> **LeetCode #392** · Difficulty: 🟢 Easy · Pattern: **Two Pointers**  
> **Companies:** Google  
> **Attempted independently ✅ · Two pointer structure needed as hint · Traced correctly ✅**

---

## 📋 Problem Statement

Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`.

A subsequence means all characters of `s` appear in `t` **in the same order** — but not necessarily adjacent.

```
Input:  s = "ace",  t = "abcde"  →  Output: true
Input:  s = "aec",  t = "abcde"  →  Output: false
Input:  s = "",     t = "abcde"  →  Output: true  (empty is always subsequence)
Input:  s = "abc",  t = ""       →  Output: false
```

---

## 🧠 The Core Insight

> **"Walk through t with one pointer, walk through s with another. Every time characters match, move the s pointer forward. If s pointer reaches the end — it's a subsequence."**

You don't need nested loops. You don't need an extra array.  
Just two pointers — one per string.

---

## 🐢 Approach 1 — What NOT to Do (Over-complicated)

```javascript
// ❌ Nested loops — wrong approach
const isSubsequence = (str1, str2) => {
    const arr = []
    for (let i = 0; i < str2.length; i++) {
        for (char2 of str1) {
            if (str2[i] == char2) arr.push(i)
        }
    }
    if (arr.length !== str2.length) return false
    // ...gets complicated and breaks on ordering
}
```

**Why this fails:**
- Doesn't track ORDER of characters
- `"aec"` would incorrectly return `true` because a, e, c all exist in `"abcde"`
- The whole point is characters must appear **left to right in sequence**

---

## ⚡ Approach 2 — Optimised (Two Pointers)

### Logic
- `p1` walks through `str1` (the longer string)
- `p2` walks through `str2` (the pattern to match)
- When characters match → move `p2` forward
- If `p2` reaches `str2.length` → all characters found in order → `true`
- If loop ends without `p2` finishing → `false`

```javascript
const isSubsequence = (str1, str2) => {
    let p2 = 0  // pointer for str2 (pattern)

    for (let p1 = 0; p1 < str1.length; p1++) {
        if (str1[p1] === str2[p2]) {
            p2++  // match found — advance pattern pointer
        }
        if (p2 === str2.length) return true  // all chars matched in order
    }

    return false  // pattern not fully matched
}
```

### How it works — step by step

**Test 1: `str1="abcde"`, `str2="ace"` → true**
```
p2=0 (looking for 'a')

p1=0: 'a' === 'a' → match! p2=1 (now looking for 'c')
p1=1: 'b' === 'c' → no match
p1=2: 'c' === 'c' → match! p2=2 (now looking for 'e')
p1=3: 'd' === 'e' → no match
p1=4: 'e' === 'e' → match! p2=3

p2(3) === str2.length(3) → return true ✅
```

**Test 2: `str1="abcde"`, `str2="aec"` → false**
```
p2=0 (looking for 'a')

p1=0: 'a' === 'a' → match! p2=1 (now looking for 'e')
p1=1: 'b' === 'e' → no match
p1=2: 'c' === 'e' → no match
p1=3: 'd' === 'e' → no match
p1=4: 'e' === 'e' → match! p2=2 (now looking for 'c')

Loop ends. p2(2) !== str2.length(3) → return false ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n)** — single pass through str1 |
| 💾 Space | **O(1)** — just two pointer variables, no extra memory |

---

## 🔑 The Key Pattern — Two Pointers on Two Strings

```javascript
let p2 = 0                          // pointer for the pattern string

for (let p1 = 0; p1 < str1.length; p1++) {
    if (str1[p1] === str2[p2]) p2++ // only advance p2 on match
    if (p2 === str2.length) return true
}

return false
```

> **Rule:** p1 always moves. p2 only moves on a match.  
> This guarantees order is preserved — p2 can never go back.

---

## 💬 What to Say in an Interview

> *"I'll use two pointers — one for each string. p1 scans the full string, p2 tracks how much of the pattern I've matched. p2 only advances when there's a character match, which naturally enforces the ordering constraint. If p2 reaches the end of the pattern, all characters were found in order. This runs in O(n) time and O(1) space."*

---

## ⚠️ Edge Cases

```javascript
s = "",    t = "abc"   → true   // empty string is always a subsequence
s = "abc", t = ""      → false  // can't match anything in empty string
s = "abc", t = "abc"   → true   // exact match is valid subsequence
s = "axc", t = "ahbgdc"→ true   // a✅ x❌ h❌ b❌ g❌ → wait, no x found → false
```

**Always ask in interview:** *"Can either string be empty?"*

---

## 🔗 Pattern Recognition

> **Signal words for Two Pointers on strings:**  
> *"in order"*, *"sequence"*, *"subsequence"*, *"left to right"*, *"relative order"*

| Problem | Two Pointer Idea |
|---|---|
| ✅ Is Subsequence | p1 on full string, p2 on pattern — p2 moves on match |
| 🔜 Valid Palindrome | p1 from left, p2 from right — move inward |
| 🔜 3Sum | left/right pointers on sorted array |
| 🔜 Container With Most Water | left/right, move the smaller side |
| 🔜 Trapping Rain Water | left/right running max from both sides |

---

## 💡 Key Takeaway for Revision

```
1. p1 walks str1 always
2. p2 walks str2 ONLY on match
3. p2 reaching end = true
4. Loop ending without p2 finishing = false
```

---

## 🪞 Honest Reflection

| What went well | What to improve |
|---|---|
| Recognised order needed to be tracked ✅ | Two pointer instinct didn't fire automatically |
| Attempted a real solution independently ✅ | Nested loop approach over-complicated it |
| Understood two pointer solution immediately ✅ | Re-solve from scratch on revision day |
| Traced both test cases correctly ✅ | Need this pattern to feel automatic |

---

## 📊 My Attempt Log

| Attempt | Approach | Help | Notes |
|---|---|---|---|
| 1 | Nested loop + array | None | Correct intent, broke on ordering |
| 2 | Two pointers | Structure hint | Understood immediately, traced correctly |

---

## 🏷️ Tags
`Two Pointers` `String` `Easy` `Google` `Subsequence` `In Order`