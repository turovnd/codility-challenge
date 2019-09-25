// [6, 11, 2]

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    return parseInt(B/K) - parseInt(A/K) + (A % K ? 0 : 1);
}
