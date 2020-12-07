var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
var value5 = 0;
var value6 = 0;

let numbers = new Map();

while(true){
    
        let dieRoll = Math.floor(Math.random() * 6) + 1;

        switch(dieRoll){
            case 1:
                value1 += 1;
                numbers.set('1', value1);
                break;
            case 2:
                value2 += 1;
                numbers.set('2', value2);
                break;
            case 3:
                value3 += 1;
                numbers.set('3', value3);
                break;
            case 4:
                 value4 += 1;
                numbers.set('4', value4);
                break;
            case 5:
                value5 += 1;
                numbers.set('5', value5);
                break;
             default:
                 value6 += 1;
                numbers.set('6', value6);
        } 
        if(value1 == 10 || value2 == 10 || value3 == 10 || value4 == 10 || value5 == 10 || value6 == 10){
            break;       
        }
}
var map2 = new Map([...numbers.entries()].sort());
console.log(map2);

console.log("Maximum: "+[...numbers.entries()].reduce((a, e ) => e[1] > a[1] ? e : a));
console.log("Minimum: "+[...numbers.entries()].reduce((a, e ) => e[1] < a[1] ? e : a));
