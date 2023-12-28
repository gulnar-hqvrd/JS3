//1)EXAMPLE 

// for(
//     let i = 0;
//     i < 10;
//     i++
//     ){
//         console.log(i);
//     }


//2)EXAMPLE 

// for(
//     let i = 1000;
//     i > 0;
//     i--
//     ){
//         console.log(i);
//     }



//3)EXAMPLE 

// for(let i = 0 ; i<=1000 ; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }


// 4)EXAMPLE

// for(let a = 97 ; a <=122; a++){
//     console.log(String.fromCharCode(a));
// }

// 5)EXAMPLE

// for( let c = "A".charCodeAt(0);"Z".charCodeAt(0);c++){
//     console.log(`${String.fromCharCode(c)}${String.fromCharCode(c+32)}`);
// }


// 
// 6)EXAMPLE

// let cut = 0;
// let tek = 0;
// for (let i = 0 ; i<=100 ; i++){
//     if(i % 2 == 0){
//         cut = cut + i
//     }
//     else{
//         tek = tek + i
//     }
// }
// console.log((cut- tek) ** 2);


// 7)EXAMPLE

// const currentYear = new Date().getUTCFullYear();
// for (let i = 1945 ; i <=2023 ; i ++)
//     if (i !== 1990 && i !== 1992) {
//         console.log(i);
// }

// 8)EXAMPLE
// *
// * *
// * * *
// * * * *
// * * * * * 
// * * * * * * 
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *

// for ( i = 1 ; i <=10 ; i++){
//     let row = "";
//     for(j = 1 ; j <=i ; j++){
//         row = row + "* "
//     }
//     console.log(row);
// }

// 9) EXAMPLE

// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * * 


// let eded= +prompt("Ededi daxile edin");
// let yolka = '';
// for (let i = 0; i <= eded; i++) {
//  yolka+= "* " .repeat(eded) + "\n";
// }

// console.log(yolka);


// HOME 

// EXAMPLE 1 

// let a = +prompt("Ededi daxil edin");
// let b = +prompt("Ededi daxil edin");
// let result = "";
// for (let i = 0; i < b; i++) {
//   for (let j = 0; j < a; j++) {
//     if (i === 0 || i === b - 1 || j === 0 || j === a - 1) {
//       result += "* ";
//     } else {
//       result += "  ";
//     }
//   }
//   result += "\n";
// }
// console.log(result);


// EXAMPLE 2

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("--------------");
// }
