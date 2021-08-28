function sum(i){
    if (i==1){
        return 1;
    }
    return sum(i-1) +i;
}

console.log(sum(1016));


// factorial
function factorial(n){
    if (n==1){
        return 1;
    }
    return  n * factorial (n-1) ;
}
console.log(factorial(6));


//fibo
function fibo(n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2) ;
}

console.log(fibo(7));