import { print_matrix } from "./helpers";

const zero_matrix = (input: number[][]) => {
    
    const marked_rows: number[] = []
    const marked_cols: number[] = []

    // First Pass
    for (let m = 0; m < input.length; m++) {

        for (let n = 0; n < input[m].length; n++) {
            if (input[m][n] === 0) {
                if (!marked_cols.includes(m)) {marked_cols.push(m); }
                if (!marked_rows.includes(n)) {marked_rows.push(n); }
            }
        }

    }

    for (let row of marked_rows) {
        for (let m = 0; m < input.length; m++) {
            input[m][row] = 0
        }
    }

    for (let col of marked_cols) {
        for (let n = 0; n < input[col].length; n++) {
            input[col][n] = 0
        }
    }

    return input;

}

const input_three = [
    [0,2,3],
    [4,0,6],
    [7,8,9]
  ]

const input_five = [
[1, 2, 3, 4, 5],
[6, 7, 0, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 0, 23, 24, 25],
];

zero_matrix(input_three);
zero_matrix(input_five);

print_matrix(input_three);
print_matrix(input_five);