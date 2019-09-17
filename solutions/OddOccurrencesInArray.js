// A =  [9, 3, 9, 3, 9, 7, 9]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if (!obj[A[i]]) {
            obj[A[i]] = true;
        } else {
            delete obj[A[i]]
        }
    }
    return parseInt(Object.keys(obj)[0]);
}
