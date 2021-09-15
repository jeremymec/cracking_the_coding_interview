def isUnique1(string):
    map = [False] * 128
    for char in string:
        recorded = map[ord(char)]
        if not recorded:
            map[ord(char)] = True
        else:
            return False
    return True

def isUnique2(string):
    for i in range(len(string)):
        for j in range(len(string)):
            if string[i] == string[j] and i != j: return False
	return True