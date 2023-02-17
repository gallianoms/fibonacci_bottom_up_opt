var fib = function (num) {
    if (num <= 1)
        return num;
    var prev2 = 0;
    var prev1 = 1;
    var result = 0;
    for (var i = 2; i <= num; i++) {
        result = prev1 + prev2;
        prev2 = prev1;
        prev1 = result;
    }
    return result;
};
console.log(fib(6));
