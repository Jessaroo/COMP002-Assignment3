// 3. Write code that creates an 8x8 grid, similar to a chessboard, 
// using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let column = 8;
let board = " ";

for(let y = 0; y < column; y++) {
    let row = " ";
    for(let x=0; x<column; x++) {
        if((x+y) % 2==0) {
            row += "#";
        } else {
            row += " ";
        }
    }
    board += row +"\n";
}
console.log(board);