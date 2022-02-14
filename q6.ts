const string_compression = (input: string): string => {

    const input_chars = [...input];

    const length = input_chars.reduce((acc, e) => acc.add(e), new Set<string>()).size;

    let compresed_string = Array<string>(length * 2);
    let cursor = 0;

    let current_char_count = 0;
    for (let i = 0; i < input_chars.length; i++) {
        current_char_count++;
        if (i === input_chars.length - 1 || input_chars[i] !== input_chars[i + 1]) {
            compresed_string[cursor] = input_chars[i];
            cursor++;
            compresed_string[cursor] = current_char_count.toString();
            cursor++;
            current_char_count = 0;
        }
    }

    return compresed_string.length < input.length ? compresed_string.toString() : input;

}

console.log(string_compression("helllllllo"));