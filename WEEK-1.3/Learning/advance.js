
//callback

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data); // Contents of the file
// });


// console.log('my name is jack mama-1')
// console.log('this is mack ma-2')
// console.log('alibaba chor h-3')


// set timeout

// function printHello() {
//     console.log('hello world');
// }

// setTimeout(() => {
//     console.log('hello world')
// }, 3000);

// setTimeout(printHello, 5000);


// function printSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);
// }


// setTimeout(() => {
//     console.log('hello ')
// }, 1000)

// printSum(82085697);


//setinterval


// callback hell

// setTimeout(() => {
//     console.log('print 1')
//     setTimeout(() => {
//         console.log('print 2')
//         setTimeout(() => {
//             console.log('print 3')
//         }, 1000)
//     },1000)
// }, 1000)


// Promise

function promiseBody() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = true;
            if(message) {
                resolve('yes it resolved');
            } else {
                reject('yes it is rejected')
            }
        }, 2000);
    })
    
}

// promiseBody().then(() => {console.log('first')}).catch(() => {console.log('error')})

console.log(promiseBody());