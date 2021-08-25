// Function of Leargest Number
function largestNumber(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if (number > largest){
            largest = number;
        }
    }
    return largest;
}

const a = [56,25,49,31,58,14,23,65]
var number1 = largestNumber(a);
console.log(number1);

// function of smallest Number
function smallestNumber(numbers){
    let smallest= numbers[0];
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if (number < smallest){
             smallest= number;
        }
    }
    return smallest;
}

var number = smallestNumber(a);
console.log(number);