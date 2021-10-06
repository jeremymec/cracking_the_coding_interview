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

if __name__ == "__main__":
    result = urlify('Mr John Smith    ')
    result2 = urlify2('Mr John Smith    ')
    print(result, result2)
