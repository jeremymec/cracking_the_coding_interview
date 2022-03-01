import { print_matrix } from "./helpers";

const rotate_matrix = (input: number[][]): number[][] => {
  const size = input[0].length;

  let layer = 0;

  while (layer < (input[0].length / 2 )) {
    for (let x = 0 + layer; x < input[0].length - 1 - layer; x++) {
      const max = input[0].length - 1 - layer;
      const offset = x - layer;

      let current_storage = input[layer][x];

      let target_storage = input[max - offset][layer];
      input[max - offset][layer] = current_storage;
      current_storage = target_storage;

      target_storage = input[max][max - offset]
      input[max][max - offset] = current_storage;
      current_storage = target_storage;

      target_storage = input[x][max];
      input[x][max] = current_storage;
      current_storage = target_storage;

      input[layer][x] = current_storage;

    }

    layer++;
  }

  return input;
};

const input_one = [
  [1]
]
const input_two = [
  [1,2],
  [3,4]
]
const input_three = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
const input_four = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]
const input_five = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const output_one = rotate_matrix(input_one);
const output_two = rotate_matrix(input_two);
const output_three = rotate_matrix(input_three);
const output_four = rotate_matrix(input_four);
const output_five = rotate_matrix(input_five);

print_matrix(output_one);
print_matrix(output_two);
print_matrix(output_three);
print_matrix(output_four);
print_matrix(output_five);