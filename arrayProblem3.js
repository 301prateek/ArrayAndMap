//Function to find the sum of three integers is zero
let sum;
let array2 = new Array();

console.log(sumEqualsZero());

function sumEqualsZero() {
    let array = [6, -4, 3, -8, -7, -5, -9, -2, 8, -2, -6, 9, -4, -3, 1 ];
    console.log(array);
    
    for (let i = 0; i < array.length; i++) {
        
        for (let j = i+1; j < array.length; j++) {

            for (let k = j+1; k < array.length; k++) {
               sum = array[i]+array[j]+array[k]; 
               
               if (sum === 0) {
                let array1 = Array();  
                array1.push(array[i],array[j],array[k]);  
                
                array2.push(array1.concat()); 
                } 
            }
        }
    } 
}

console.log(array2);
