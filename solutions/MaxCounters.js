// (5, [3, 4, 4, 6, 1, 4, 4])
// (2, [2, 3])

function maxCounter(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = val;
    }
    return arr;
}

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = new Array(N);
    arr = maxCounter(arr, 0);
    let max = 0;
    let maxChanged = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === N + 1) {
            if (maxChanged) {
                arr = maxCounter(arr, max);
            }
            maxChanged = false;
        } else {
            arr[A[i] - 1]++;
        }
        if (arr[A[i] - 1] > max) {
            max = arr[A[i] - 1];
            maxChanged = true;
        }
    }
    return arr;
}