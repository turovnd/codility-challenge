// A = [2, 3, 1, 5]
// A = [1]
// A = [2]
// A = [2, 3]
// A = [1, 2]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 1) {
        return A[0] === 1 ? 2 : 1;
    }
    A = A.sort((a, b) => a - b);
    let i = 0;
    while (i < A.length) {
        if (A[i] !== i + 1) {
            return i + 1;
        }
        i++;
    }
    return A.length + 1;
}