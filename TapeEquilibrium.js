// A = [3, 1, 2, 4, 3]
// A = [-1000, 1000]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = Number.MAX_VALUE;
    let left = 0;
    let right = A.reduce((a,b) => a + b);
    for (let i = 0; i < A.length - 1; i++) {
        left += A[i];
        right -= A[i];
        let dif = Math.abs(left - right);
        if (dif < min) {
            min = dif
        }
    }
    return min;
}