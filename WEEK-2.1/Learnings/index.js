import express from 'express'
import bodyParser from 'body-parser';

const app = express();

// app.use(middleware1);
app.use(bodyParser.json());


// function middleware1(req, res, next) {
//     console.log('from inside middleware' + req.headers.value);
//     next();
// }


// function sum (n) {
//     var sum = 0;
//     for(let i = 0 ; i < n ; i++) {
//         sum += i;
//     }
//     return sum;
// }

// get
// function response(req, res) {
//     const value = req.query.value;
//     const calculatedSum = sum(value);
//     var ans = 'calculated sum' + '  ' + calculatedSum;
//     res.send(ans);
// }

// post
function response(req, res) {
    const value = req.body;
    console.log(req.body)
    
    res.send(value.number);
}

// app.get('/', response)
app.post('/', response)

app.listen(3000, () => {
    console.log('port is started')
})