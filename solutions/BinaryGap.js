function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = N.toString(2);
    let arr = str.split('');
    let max = 0;
    let startPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) === 0 && parseInt(arr[i-1]) === 1) {
            startPos = i;
        } else if (parseInt(arr[i]) === 1 && parseInt(arr[i-1]) === 0) {
            let dif = i - startPos;
            max = dif > max ? dif : max;
        }
    }
    return max;
}
