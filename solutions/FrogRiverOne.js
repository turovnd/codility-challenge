// (5, [1, 3, 1, 4, 2, 3, 5, 4])
// (2, [2, 2, 2, 2, 2, 2])

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let i = 0;
    let obj = {};
    let steps = X;
    while(i < A.length) {
        if (!obj[A[i]] && A[i] <= X) {
            obj[A[i]] = true;
            steps--;
        }
        if (steps === 0) {
            return i
        }
        i++;
    }
    return -1;
}
