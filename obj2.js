// let name1={
//     firstnName:'Akshay',
//     lastName:'kumar',
//     getFullname:function(prefix,suffix){
//         return prefix +" "+this.firstnName +" "+ this.lastName +" "+suffix

//     },
// }
// console.log(name1.getFullname.apply(name1,["Mr.","Jr."]));

// let num1 = 3;
// let num2 = 2;
// function sum(){
//     return num1+ num2;
// }
// console.log(sum());

// console.log(this==module.exports)

// module.exports.num1= 2;
// module.exports.num2=3;
// console.log(this.num1 + this.num2);

// "use strict"
// function sum(){
//     console.log(this);
// }
// sum()

// module.exports.sum=function(){
//     module.exports.num3=3;
//     module.exports.num4=2;
//     console.log(this.num3+this.num4)
// }
// module.exports.sum()

// var add=function(num1, num2){       //arrow function
//     return num1 + num2;
// }
// var add=(num1, num2)=> num1 + num2 
// console.log(add(1,2))

// function task(message){                      //syncronas pe chal raha hai
//     for(let i=10000000000; i>0; i--);
//     console.log(message);
// };
// console.log("start task");
// task('Task completed')
// console.log("end task")


// function task(message){
//     setTimeout(()=> {
//         console.log("message");
//     });
// };
// task()


// let a=[1,4,3,2,6,9]
// b=a.math(max);
// console.log(b)
// Paneer

// console.log(Math.max(1,4,3,2,6,9));


// var readlineSync = require('readline-sync'); 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//     hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');


var readlineSync = require('readline-sync'); 
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var Love = readlineSync.question('who is your Love? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + Love + '!');