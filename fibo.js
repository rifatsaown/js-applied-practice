function fiboNum(num){
    let fibo = [0,1]
    if ( typeof num != "number"){
        return "PLease enter number"
    }
    if (num < 2){
        return "PLease enter positive number greater than 1"
    }
    for (let i = 2; i <num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo
}

console.log(fiboNum(55));