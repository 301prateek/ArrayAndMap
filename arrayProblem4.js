let num1 = 0;
let num2 = 0;
let duplicateArray = Array();

for(let i = 1; i < 100; i++){

    num1 = i % 10;
    
    let num = i / 10;
    num2 = parseInt(num,10);
        
    if(num1 == num2){

        console.log("Duplicate: "+i);
        duplicateArray.push(i);

    }
} 
console.log("The Array is : "+duplicateArray.toString());
