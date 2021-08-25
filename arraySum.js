var numbers = [30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var sum = sum + number;
}
console.log(sum);


function arrayTotal(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        var sum = sum + number;
    }
    return sum;
}

var arraySum = arrayTotal(numbers);
console.log(arraySum);