// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let row = '';

for (let i= 1; i<8; i++) {
    if (i<=4) {
        row += '#';

    } else {
       row = row.slice(0, -1);
    }
    console.log(row);
}