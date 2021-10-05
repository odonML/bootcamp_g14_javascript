//------------------HOISTING-------------------


var num = 5;
(function a(){
    console.log(num)
    var num = 10;
    console.log(num)
}())
console.log(num)

x=5;
var x;

console.log(x)

