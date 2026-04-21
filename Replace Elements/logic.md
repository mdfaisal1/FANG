# 🔁 Replace Elements with Greatest Right Element

> **LeetCode #1299** · Difficulty: 🟢 Easy · Pattern: **Array Traversal / Greedy**  
> **Companies:** Amazon  
> **Brute force: independent ✅ · Optimised: structure hint only ✅ · Zero solution lookups ✅**

---

## 📋 Problem Statement

Given an array `arr`, replace every element with the **greatest element among all elements to its right**, and replace the last element with `-1`.

```
Input:  [17, 18, 4, 5, 6, 1]  →  Output: [18, 6, 6, 6, 1, -1]
Input:  [400]                  →  Output: [-1]
```

---

## 🧠 The Core Insight

> **"If I already know the max of everything to the right of i+1, then the max to the right of i is just max(arr[i+1], knownMax)."**

Don't re-scan right for every element.  
**Carry the answer backwards** as you walk right to left.

---

## 🐢 Approach 1 — Brute Force

### Logic
For each element, scan everything to its right and find the maximum.
Replace that element with the max found. Last element always becomes `-1`.

```javascript
const replaceElements = (arr) => {
    let resArr = [];
    let hN = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            hN = hN > arr[j] ? hN : arr[j];
        }
        resArr[i] = hN;
        hN = -Infinity;
        if (i + 1 === arr.length) resArr[i] = -1;
    }

    return resArr;
};
```

### How it works
```
arr = [17, 18, 4, 5, 6, 1]

i=0: scan [18,4,5,6,1]  → max = 18 → resArr[0] = 18
i=1: scan [4,5,6,1]     → max =  6 → resArr[1] =  6
i=2: scan [5,6,1]       → max =  6 → resArr[2] =  6
i=3: scan [6,1]         → max =  6 → resArr[3] =  6
i=4: scan [1]           → max =  1 → resArr[4] =  1
i=5: last element           → resArr[5] = -1

Output: [18, 6, 6, 6, 1, -1] ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n²)** — nested loops |
| 💾 Space | **O(n)** — new result array |

---

## ⚡ Approach 2 — Optimised (Right to Left)

### Logic
Walk **right to left**. Carry a running maximum.

```javascript
const replaceElements = (arr) => {
    let maxSoFar = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let currElem = arr[i];       // 1. save before overwriting
        arr[i] = maxSoFar;           // 2. replace with running max
        maxSoFar = maxSoFar > currElem ? maxSoFar : currElem; // 3. update max
    }

    return arr;
};
```

### How it works — step by step
```
arr = [17, 18, 4, 5, 6, 1],  maxSoFar = -1

i=5: currElem=1,  arr[5]=-1,  maxSoFar = max(-1, 1)  = 1
i=4: currElem=6,  arr[4]=1,   maxSoFar = max(1,  6)  = 6
i=3: currElem=5,  arr[3]=6,   maxSoFar = max(6,  5)  = 6
i=2: currElem=4,  arr[2]=6,   maxSoFar = max(6,  4)  = 6
i=1: currElem=18, arr[1]=6,   maxSoFar = max(6,  18) = 18
i=0: currElem=17, arr[0]=18,  maxSoFar = max(18, 17) = 18

Output: [18, 6, 6, 6, 1, -1] ✅
```

### Complexity
| | |
|---|---|
| ⏱ Time | **O(n)** — single pass right to left |
| 💾 Space | **O(1)** — modifies array in place |

---

## 🔑 The Three Lines — Memorise the Order

```javascript
let currElem = arr[i];                              // 1. SAVE
arr[i] = maxSoFar;                                  // 2. SET
maxSoFar = Math.max(maxSoFar, currElem);            // 3. UPDATE
```

> Order matters. SET before SAVE = you lose the original value forever.

---

## 💬 What to Say in an Interview

> *"I traverse right to left with a running maximum. Each element gets replaced with the current max, then I update the max if needed. O(n) time, O(1) space — modified in place. The key insight is you don't re-scan right every time — you carry that information from the previous iteration."*

---

## ⚠️ Edge Cases

```javascript
[400]        → [-1]          // single element
[1, 2, 3]    → [2, 3, -1]   // increasing array
[3, 2, 1]    → [2, 1, -1]   // decreasing array
[-5, -3, -1] → [-3, -1, -1] // negatives — use -Infinity not 0 in brute
```

---

## 🔗 Same Pattern Appears In

| Problem | How |
|---|---|
| ✅ Replace Elements | Running max right to left |
| 🔜 Trapping Rain Water | Running max from both sides |
| 🔜 Product of Array Except Self | Running product left AND right |
| 🔜 Stock Buy & Sell | Running min left to right |

---

## 📊 My Attempt Log

| Attempt | Approach | Help | Notes |
|---|---|---|---|
| 1 | Buggy brute | — | counter/loop logic broken, = vs === bug |
| 2 | Working brute O(n²) | Zero hints ✅ | Fixed all bugs independently |
| 3 | Optimal O(n) O(1) | Structure hint only ✅ | Right to left, running max |

---

## 🏷️ Tags
`Array` `Greedy` `Right to Left` `Running Max` `In-Place` `Easy` `Amazon`