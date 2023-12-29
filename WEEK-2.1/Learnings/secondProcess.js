function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody);
}

const sendObj = {
    method: "GET"
}

fetch("http://localhost:3000/handle?counter=10", sendObj).then(callbackFn)

