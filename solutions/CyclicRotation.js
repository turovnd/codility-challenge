// ([3, 8, 9, 7, 6], 3)
// ([0, 0, 0], 1)
// ([1, 2, 3, 4], 4)

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0 || A.length === K) {
        return A;
    }
    while(K > 0) {
        let el = A.pop();
        A.unshift(el);
        K--;
    }
    return A;
}
