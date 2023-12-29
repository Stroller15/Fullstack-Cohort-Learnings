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



// function getCalculationMul(val) {
//     return val * val;
// }


// function getPage(req, res) {
//     res.sendFile(__dirname + "/index.html")
// }

// app.get('/', getPage);
// app.get('/sum', response)



function getCalculationSum(val) {
    return val + val;
}

function handleReq(req, res) {
    const val = req.query.counter;

    const calculatedSum = getCalculationSum(val)

    const varObject = {
        sum: calculatedSum,
    }
    res.status(200).send(varObject);
}

app.get('/handle', handleReq)

app.listen(3000, () => {
    console.log('port is started')
})