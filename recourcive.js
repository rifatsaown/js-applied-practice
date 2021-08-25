function fibo(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) { 
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
}
let fibElement = fibo(4);
console.log(fibElement);




function fiboS(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) { 
        return [0,1];
    }
    let fibo = fiboS(n - 1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo
}
let fibElement2 = fiboS(55);
console.log(fibElement2);
