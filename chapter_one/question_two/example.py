def is_permutation(first_string, second_string):
    first_string_dict = {}
    second_string_dict = {}
    for char in first_string:
        if char in first_string_dict:
            first_string_dict[char] += 1
        else:
            first_string_dict[char] = 0
    for char in second_string:
        if char in second_string_dict:
            second_string_dict[char] += 1
        else:
            second_string_dict[char] = 0
    return first_string_dict == second_string_dict

def is_permutation2(first_string, second_string):
    if len(first_string) != len(second_string): return False

    char_values = [0] * 128
    for char in first_string:
        char_values[ord(char)] += 1
    for char in second_string:
        char_values[ord(char)] -= 1
        if char_values[ord(char)] != 0: return False
    return True

if __name__ == "__main__":
    result = is_permutation("true", "ert")
    result2 = is_permutation2("true", "ert")
    print(result, result2)