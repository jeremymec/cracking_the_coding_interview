## Check Permutation

**Given two strings, write a method to decide if one is a permutation of the other.**

### Solution 

A permutation is defined as an arrangement of values in a set in an particular order. 

Strings can be thought of as sets where the values are characters. Two strings are permutations of each other if they contain the same characters the same amount of times.

A naïve first solution could be to use the dictionary data structure (similar to HashMap) with the `Key` as the **character**, and the `Value` as the **number of times the character occurs in the string.**

Build these two dictionaries from each of the strings and then check the two dictionaries are equivalent.

````python
def is_permutation(first_string, second_string):
    first_string_dict = {}
    second_string_dict = {}
    for char in first_string:
        if char in first_string_dict:
            first_string_dict[char] += 1
        else:
            first_string_dict[char] = 1
    for char in second_string:
        if char in second_string_dict:
            second_string_dict[char] += 1
        else:
            second_string_dict[char] = 1
    return first_string_dict == second_string_dict
````

This runs in O(2n) time where n is the number of characters in the string and takes O(2n) space.



A shorter solution that only uses arrays this can be accomplished by utilizing how the characters are encoded. In ASCII there are 128 possible character values. 

````python
def is_permutation(first_string, second_string):
    if len(first_string) != len(second_string): return False
    char_values = [0] * 128
    for char in first_string:
        char_values[ord(char)] += 1
    for char in second_string:
        char_values[ord(char)] -= 1
        if char_values[ord(char)] != 0: return False
    return True
````

Using the `ord()` function which converts a character to its integer code the array can be indexed on the possible character values. If the two strings are permutations the array operations should be symmetrical (same chars added as subtracted) and the values should always equal zero. 

It's important to note that it needs to be explicitly checked that both strings are the same length. If not, a 'partial' permutation would incorrectly return a True result.