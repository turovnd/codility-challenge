// A = [4, 1, 3, 2]
// A = [4, 1, 3]
// A = [2]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set(A);
    let i = 1;
    while (i <= A.length) {
        if (!set.has(i)) {
            return 0;
        }
        i++;
    }
    return 1;
}
