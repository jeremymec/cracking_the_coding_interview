## URLify

**Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string. Note - please perform this operation in place.**

### Solution

**First Pass**

- Naïve solution iterates through the array and finds spaces.
- Iterates from the back so it doesn't have to worry about what it's overwriting.
- When it finds one it moves everything forward by two and replaces the space with '%20'
- Key inefficiency is that it moves things multiple times if there is more than one space because it's only moving by a set amount.
- Solution is O(n^2) where n is the length of url string. O(n) memory use where n is length of string. Operates in place.

````python
def urlify(url):
    url_arr = list(url)
    is_buffer = True
    for i in range(len(url_arr) - 1, 0, -1):
        if (url_arr[i] != ' ' and is_buffer):
            is_buffer = False
        if (url_arr[i] == ' ' and not is_buffer):
            for j in range(len(url_arr) - 1, i, -1):
                if (url_arr[j] != ' '):
                    url_arr[j + 2] = url_arr[j]
            url_arr[i] = '%'
            url_arr[i + 1] = '2'
            url_arr[i + 2] = '0'
    return url_arr

````



**Better Solution**

- Better solution works out the amount of spaces to shift ahead of time by counting the spaces.
- It then only needs one iteration to shift everything.
- Solution is O(n) where n is the length of the list.

````python
def urlify2(url):
    url_arr = list(url)
    spaces = 0

    temp_spaces = 0
    for i in range(len(url_arr) - 1):
        if url_arr[i] == ' ':
            temp_spaces += 1
        else:
            spaces += temp_spaces
            temp_spaces = 0

    shift = (spaces * 2)
 
    for i in range(len(url_arr) - (shift + 1), 0, -1):
        if url_arr[i] == ' ':
            shift -= 2
            url_arr[i + shift] = '%'
            url_arr[i + shift + 1] = '2'
            url_arr[i + shift + 2] = '0'
        else:
            url_arr[i + shift] = url_arr[i]

    return url_arr
````

