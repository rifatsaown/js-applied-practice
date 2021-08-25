var number = 35;
var age = 20;
console.log(number , age);


//////////////////1st method
/* var temp = number;
number=age;
age=temp;
console.log(number , age); */


////////////////////// 2nd method
[number, age]=[age,number];
console.log(number , age);