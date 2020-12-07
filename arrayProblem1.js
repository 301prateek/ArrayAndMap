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

//adding all numbers to array
let array = new Array(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
console.log("The Array is : "+array.toString());

let max = array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
        max = array[index];
    }   
}
console.log("Maximum :"+max);

let min = array[0];
for (let index = 0; index < array.length; index++) {
    if(array[index] < min){
        min = array[index];
    }
}    
console.log("Minimum :"+min);
