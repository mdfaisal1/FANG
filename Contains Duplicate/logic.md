# 🔍 Contains Duplicate

> **LeetCode #217** · Difficulty: 🟢 Easy · Pattern: **Arrays & Hashing**  
> **Companies:** Amazon · Google · Microsoft  
> **Solved in:** 8 min 45 sec ⚡ · First attempt, no hints ✅

---

## 📋 Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice**, and `false` if every element is **distinct**.

```
Input:  [1, 2, 3, 1]   →  Output: true
Input:  [1, 2, 3, 4]   →  Output: false
Input:  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  →  Output: true
```

---

## 🧠 The Core Insight

> **"Have I seen this number before?"**

That's the entire problem. Every approach is just a different way to answer that one question.

---

## 🐢 Approach 1 — Brute Force

### Logic
Compare every element against every other element. If any two match → duplicate found.

```javascript
const findDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) return true   // found a match
        }
    }
    return false
}
```

### How it works — step by step
```
arr = [1, 2, 3, 1]

i=0 (val=1): compare with 2 ❌, 3 ❌, 1 ✅ → return true
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n²)** — nested loops, every pair is checked |
| 💾 Space | **O(1)** — no extra memory used |

### Why it's bad at scale
If `n = 100,000`:  
→ Brute force does **10,000,000,000** comparisons.  
→ Optimized does **100,000** operations.  
That's the difference between 10 seconds and 0.001 seconds.

---

## ⚡ Approach 2 — Optimized (HashMap / Set)

### Logic
Keep a record of every number you've seen. Before adding a new number — check if it's already in the record. If yes → duplicate.

```javascript
const findDuplicate = (arr) => {
    const seen = new Set()
    for (const num of arr) {
        if (seen.has(num)) return true    // seen before → duplicate!
        seen.add(num)                     // first time → remember it
    }
    return false
}
```

### How it works — step by step
```
arr = [1, 2, 3, 1]

num=1 → seen={},       not in set → add   → seen={1}
num=2 → seen={1},      not in set → add   → seen={1,2}
num=3 → seen={1,2},    not in set → add   → seen={1,2,3}
num=1 → seen={1,2,3},  FOUND! → return true ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n)** — single pass through array |
| 💾 Space | **O(n)** — storing up to n elements in the Set |

---

## 🗺️ Map vs Set — Which to Use?

This is a subtle but important distinction interviewers notice.

| Use `Set` when... | Use `Map` when... |
|---|---|
| You only need to know **if** something exists | You need to store a **value** alongside the key |
| `seen.has(x)` / `seen.add(x)` | `map.get(x)` / `map.set(x, value)` |
| ✅ **Contains Duplicate** — existence only | Two Sum — need to store index alongside value |

> For this problem, `Set` is cleaner and more semantically correct than `Map`.  
> Using `Map` works but signals you didn't think about the right tool.

---

## 🔄 Bonus Approach — Sort + Adjacent Check

```javascript
const findDuplicate = (arr) => {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return true
    }
    return false
}
```

| | |
|---|---|
| ⏱ Time | **O(n log n)** — sorting dominates |
| 💾 Space | **O(1)** — no extra memory (if in-place sort) |

**When to mention this:** When the interviewer asks *"Can you do it with O(1) space?"*  
**Trade-off:** You save space but lose time efficiency. Also mutates the original array.

---

## 💬 What to Say in an Interview

**After writing the solution, say this unprompted:**

> *"My solution runs in O(n) time with O(n) space. I'm doing a single pass using a Set for O(1) lookup. If memory is a constraint, I could sort the array first and check adjacent elements — that brings space down to O(1) but increases time to O(n log n). I'd go with the Set approach unless told otherwise."*

That single paragraph shows:
- You know the complexity ✅
- You know the trade-offs ✅
- You have opinions and can justify them ✅

---

## ⚠️ Edge Cases to Handle

```javascript
[]           // empty array     → false (nothing to duplicate)
[1]          // single element  → false (can't duplicate alone)
[null, null] // null values     → Set handles this correctly ✅
[NaN, NaN]   // NaN values      → Set treats NaN === NaN ✅ (unlike ===)
```

---

## 🔑 Pattern Recognition — Remember This

> **Whenever a problem asks: "have I seen X before?" or "does X exist?"**  
> → Your first instinct should be **Set** or **HashMap**.

This exact pattern appears in:
- ✅ Contains Duplicate ← you are here
- 🔜 Valid Anagram (frequency count map)
- 🔜 Two Sum (complement map)
- 🔜 Longest Consecutive Sequence (Set lookup)
- 🔜 Group Anagrams (sorted key map)

Master the HashMap/Set pattern here → the next 20 problems become easier.

---

## 📊 My Attempt Log

| Attempt | Date | Time Taken | Approach | Notes |
|---|---|---|---|---|
| 1 | Day 1 | 8 min 45 sec | Optimized (Set) | First attempt, no hints. Clean solution. |

---

## 🏷️ Tags
`Arrays` `Hashing` `Set` `HashMap` `Easy` `Amazon` `Google` `NeetCode-150` `Blind-75`