// print some 1 to 100

// for(let i = 1 ; i <= 100 ; i++) {
//     console.log(i + '')
// }

// const obj = { a: 1, b: 2, c: 3 };

// for(let i in obj) {
//     console.log(i + ' '+ obj[i]);
// }

// const arr = [1, 2, 3, 4, 5];

// for(let i of arr) {
//     console.log(i);
// }


// function taking argument as function

function sum (idx1, idx2) {
    return idx1 + idx2;
}


function multiply (idx1, idx2) {
    return idx1 * idx2;
}


function devide (idx1, idx2) {
    return idx1 / idx2;
}


function doArthimatic(idx1, idx2, arithmaticFn) {
    return arithmaticFn(idx1, idx2);
}

var answer = doArthimatic(3, 5, devide);
console.log(answer);