---

# Two Sum — Logic Notes (Brute + Optimized)

## Problem

Given an array `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to `target`.

Constraints usually imply:

* Exactly one valid answer (in classic LeetCode)
* **Cannot use the same element twice**
* Return indices, not values

---

## Brute Force Approach (Nested Loops)

### Key Idea

Check **every pair** `(i, j)` and see if `nums[i] + nums[j] == target`.

### Steps

1. Loop `i` from `0` to `n-1`
2. Loop `j` from `i+1` to `n-1` (avoid repeats and self-pair)
3. If `nums[i] + nums[j] == target` → return `[i, j]`
4. If no pair found → return `null`

### Why it works

You literally try all possible pairs, so if a pair exists, you will find it.

### Complexity

* **Time:** `O(n^2)` (all pairs)
* **Space:** `O(1)`

---

## Optimized Approach (HashMap / Map) — One Pass

### Key Observation

If current value is `x`, then we need:

`need = target - x`

So instead of searching the whole array for `need`, store previously seen numbers in a map for **O(1)** lookup.

### What we store in Map

`value → index`

Example after scanning:
`{ 2 → 0, 7 → 1, 11 → 2, 15 → 3 }`

### Steps (Important Order)

For each index `i`:

1. `x = nums[i]`
2. `need = target - x`
3. **Check first:** if `need` exists in map
   → return `[map.get(need), i]`
4. **Then store:** `map.set(x, i)`

### Why “check first, then store”?

Prevents using the same element twice.

Example: `nums=[3,3], target=6`

* i=0: need=3 not in map → store 3→0
* i=1: need=3 in map → return [0,1]

### Complexity

* **Time:** `O(n)` (single pass)
* **Space:** `O(n)` (map can store up to n items)

---

## Quick Revision (Interview Lines)

### Brute

“Try all pairs using two loops. If sum matches target, return indices.”

### Optimized

“Traverse once, compute complement `target - nums[i]`. If complement already seen in map, return indices. Otherwise store current value and index.”

---

## Edge Notes

* If no pair found (non-LeetCode variants), return `null` / `[-1,-1]`
* Duplicates are handled naturally in one-pass approach because we return as soon as we find a valid complement.

---
