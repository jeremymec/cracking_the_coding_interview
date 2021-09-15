## Is Unique

**Implement an algorithm to determine if a string has all unique characters. What if you** 
**cannot use additional data structures?**

### Solution

The key understanding in this question is that under the hood characters are just integers. This means they can act as indexes to an array and allow us to make what's analogues to a HashMap.

```python
def isUnique(string):
    map = [False] * 128
    for char in string:
        recorded = map[ord(char)]
        if not recorded:
            map[ord(char)] = True
        else:
            return False
    return True
```

This creates an array of 128 false boolean values. This number is chosen because in the standard ASCII set there are 128 characters. It should be clarified whether or not this question discussing ASCII or another character set like Unicode because if so the 128 value would need to change.

It then iterates through every character in the string and checks the corresponding value in the map. The ord(character) function in Python gets the integer value for a character, e.g. `ord('a') == 97`. If the value hasn't already been recorded, record it. If it has been recorded that means it's a duplicate and the function will return false. If there are no duplicates the string is unique and the function will return true.

An additional check this function could do is also check the length of the string is not greater than 128 (or whatever relevant number). If it is there are clearly duplicates because there are only 128 possible characters.

*The complexity of this solution is O(n) where n is the length of the input string. If the above check is included the complexity is O(1) because the string is limited to a constant amount of characters.*

**What about no additional data structures?**

An array is an additional data structure, so our first solution doesn't work.

A naïve approach could be to iterate through every character in the string, and check every other character in the string to make sure it isn't the same.

````python
def isUnique(string):
    for i in range(len(string)):
        for j in range(len(string)):
            if string[i] == string[j] and i != j: return False
	return True
            
````

*The complexity of this solution is O(n^2) where n is the length of the string, because of the nested for loop.*

Another possible solution would be to sort the string in place, and then iterate through it and check no character was the same as the one that came before it. The complexity of that solution would depend on the sorting algorithm, likely *O(n^2)* with something like quicksort.

