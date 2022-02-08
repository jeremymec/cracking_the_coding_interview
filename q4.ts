const is_palindrome_permutation = (input: string): boolean => {
  const letter_map = new Map();

  for (const char of input) {
    const current: number = letter_map.get(char) ?? 0;
    letter_map.set(char, current + 1);
  }

  let odd_count = 0;
  for (const value of letter_map.values()) {
    if (value % 2 !== 0) {
      odd_count++;
    }
    if (odd_count > 1) {
      return false;
    }
  }

  return true;
};

const is_palindrome_permutation_es6 = (input: string): boolean => {
  const char_array = [...input];
  return (
    [...new Set(char_array)]
      .map((val) => char_array.filter((char) => char === val).length)
      .reduce((sum, val) => {
        return val % 2 === 0 ? sum : sum + 1;
      }, 0) <= 1
  );
};

console.log(is_palindrome_permutation("tacooocat"));
console.log(is_palindrome_permutation_es6("tacooocat"));
