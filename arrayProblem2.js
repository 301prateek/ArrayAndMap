//Generating random numbers
let num1=Math.floor(Math.random()* 999) + 100;
let num2=Math.floor(Math.random()* 999) + 100;
let num3=Math.floor(Math.random()* 999) + 100;
let num4=Math.floor(Math.random()* 999) + 100;
let num5=Math.floor(Math.random()* 999) + 100;
let num6=Math.floor(Math.random()* 999) + 100;
let num7=Math.floor(Math.random()* 999) + 100;
let num8=Math.floor(Math.random()* 999) + 100;
let num9=Math.floor(Math.random()* 999) + 100;
let num10=Math.floor(Math.random()* 999) + 100;

//Adding numbers to array
let array = new Array(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
console.log("The Array is : "+array.toString());

//Sorting the array with the help of function
array.sort((a, b) => a - b);
console.log("Sort with Function: "+array);

//Finding 2nd largest value
let max = array[1];
console.log("Second Maximum : "+max);

//Finding 2nd smallest value
let min = array[array.length - 2];
console.log("Second Minimum :"+min);
