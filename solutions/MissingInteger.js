// A = [1, 3, 6, 4, 1, 2]
// A = [1, 2, 3]
// A = [-1, -3]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set(A);
    let min = 0;
    while(min < A.length) {
        min++;
        if (!set.has(min)) {
            return min;
        }
    }
    return min + 1;
}