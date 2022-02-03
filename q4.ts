
const is_palindrome_permutation = (first: string, second: string): boolean => {
    const letter_map_first = new Map();
    const letter_map_second = new Map();

    for (const char of first) {
        const current: number = letter_map_first.get(char) ?? 0;
        letter_map_first.set(char, current + 1);
    }

    for (const char of second) {
        const current: number = letter_map_second.get(char) ?? 0;
        letter_map_second.set(char, current + 1);
    }

    if (letter_map_first.size !== letter_map_second.size) { return false; }

    for (const [key, value] of letter_map_first.entries()) {
        if (letter_map_second.get(key) !== value) { return false; }
    }

    let odd_count = 0;
    for (const value of letter_map_first.values()) {
        if (value % 2 !== 0) { odd_count++; }
        if (odd_count > 1) { return false; }
    }

    return true;
    
}

console.log(is_palindrome_permutation("cat"))