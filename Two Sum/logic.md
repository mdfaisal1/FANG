# Two Sum — Logic Notes (Brute + Optimized)

## Problem
Given an array `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to `target`.

Common assumptions (classic LeetCode):
- Exactly one valid answer
- **Cannot use the same element twice**
- Return indices, not values

---

## Approach 1: Brute Force (Nested Loops)

### Idea
Check **every pair** `(i, j)` and see if `nums[i] + nums[j] === target`.

### Steps
1. Loop `i` from `0` to `n-1`
2. Loop `j` from `i+1` to `n-1` (avoids repeats + self-pair)
3. If `nums[i] + nums[j] === target` → return `[i, j]`
4. If no pair found → return `null`

### Why it works
You try all possible pairs, so you can’t miss the correct one.

### Complexity
- **Time:** `O(n^2)`
- **Space:** `O(1)`

---

## Approach 2: Optimized (One-pass Map)

### Key observation
For current value `x = nums[i]`, the only value that can complete the pair is:

`need = target - x`

So instead of scanning for `need`, we store seen values in a map for **O(1)** lookup.

### What we store in the Map
`value → index` for values we’ve already visited (left side while scanning).

Example:
`{ 2 → 0, 7 → 1, 11 → 2, 15 → 3 }`

### Steps (IMPORTANT ORDER)
For each index `i`:
1. `x = nums[i]`
2. `need = target - x`
3. **Check first:** if `need` exists in map → return `[map.get(need), i]`
4. **Then store:** `map.set(x, i)` and continue

### Why “check first, then store”?
Prevents using the same element twice.

Example: `nums = [3,3], target = 6`
- i=0: need=3 not in map → store 3→0
- i=1: need=3 in map → return [0,1]

### Complexity
- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Pitfalls (JavaScript)
- `return (i, j)` returns only `j` (comma operator). Use `return [i, j]`.
- `Map.get(key)` takes **one argument** only.
- Create `const map = new Map()` **inside** the function (so it doesn’t persist across calls).

---

## 30-second interview talk track
- “Brute force checks all pairs in `O(n^2)`.”
- “Optimized uses a Map: for each number `x`, compute `need = target - x`. If `need` was seen before, return its index and current index. This is `O(n)` time with `O(n)` space.”
