
// for loop syntax
// Loops from 1 to 5.
// common mistake => use semicolon after loop
// Decrementing Loop
// Loops from 0 to any limit , incrementing by specific gap.

// print table of 5
// print factorial of number
// Access each element in an array.

// Print the reverse of a number (e.g., 123 becomes 321).
// Break and continue statement in for loop

// Write a for loop to convert all characters in a string to uppercase.
// Loop Without Initialization => Counter variable defined outside the loop
// Infinite Loop
// Reversing an Array => print elements in reverse order
// Using for to Calculate a Sum
// Loop with Multiple Variables
// for (let i = 1, j = 5; i <= 5 && j >= 1; i++, j--) {

//  Nested for Loop.



// NESTED FOR LOOP

// * * * *
// * * * *
// * * * *
// * * * *

// let rows = 4, cols = 4;

// for (let i = 0; i < rows; i++) {       // i represnt to rows i= 0 1 2 3 4

//     for (let j = 0; j < cols; j++) {   
//         process.stdout.write(`* `);
//     }

//     console.log();
// }



let rows = 4, cols = 6;

for (let i = 0; i < rows; i++) {       // i represnt to rows i= 0 1 2 3 4

    for (let j = 0; j < cols; j++) {   
        process.stdout.write(`* `);
    }

    console.log();
}