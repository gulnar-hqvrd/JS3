// const fruits = ["apple" , "banana" , "orange"];
// for(const fruit of fruits){
//     console.log(fruit);
// }


// const text = "Hello word"; // string = char[]
// for (const letter  of text){
//     console.log(letter);
// }

// const uniqNumber = new Set ([1,2,3,4,5,6,6,6,7,8,9]);
// console.log(uniqNumber);

// for(const number of uniqNumber){
//     console.log(number);
// }


const userprofile = new Map([
    ["ALice" , 28],
    ["Bob" , 20],
    ["Carol" , 25],
    ["Ali" , 45],

]);

for(const[name , age] of userprofile){
    console.log(`Adi : ${name} \nYasi : ${age}`);
}
