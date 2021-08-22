// factorial number

    let factorial = 1;
    let number = 6;

    // for loop
    for (var i =1; i <=number; i++) {
        factorial = factorial*i
    }
    console.log(factorial);

    // while loop
    let i=1;
    while (i <= number){
        factorial = factorial*i;
        i++;
    }
    console.log(factorial);



// factorial number with function
    // for loop
    function getFactorialWithFor(number) {
        let factorial =1;
        for (var i =1; i <=number; i++) {
            factorial = factorial*i;
        }
        return factorial;
    }
    let factorialOf = getFactorialWithFor(20);
    console.log(factorialOf);

    //while loop
    function getFactorialWithWhile(number) {
        let factorial = 1;
        let i = 1;
        while (i <= number){
            factorial= factorial*i;
            i++;
        }
        return factorial;
    }
    var getFactorial = getFactorialWithWhile(5);
    console.log(getFactorial);