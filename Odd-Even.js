// Odd Even Number Check With Condition
let number = 446;
let vagses = number % 2;
if (vagses == 0){
    console.log("This is even number");
}
else{
    console.log("This is odd number");
}

// Odd Even Number Check With Function
function isOdd(value){
    if (value % 2 != 0){
        return true;
    }
    return false;
}
function isEven(value){
    if (value % 2 == 0){
        return true;
    }
    return false;
}

var hisNumber = isOdd(153);
console.log(hisNumber);

var hisNumber = isEven(134);
console.log(hisNumber);

