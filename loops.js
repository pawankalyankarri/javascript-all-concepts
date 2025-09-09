//for loop

// for (var i = 1;i<=10;i++){
//     console.log(i)
// }
// console.log(i)

//while loop

// let i = 1
// while (i<=10){
//     console.log(i)
//     i++
// }

// short way of creating array

// let arr = [...Array(100)].map((i,idx)=>idx+1)
// console.log(arr)

// for (let i of arr){
//     console.log(i)
// }

// let arr = [...Array(100)].map((i,idx)=>idx+1)
// console.log(arr)

// let arr = Array.from({length:100},(i,idx)=>idx+1)
// console.log(arr)

//do while

// let i = 1;
// do{
//     console.log('do block',i)
//     i+=1
// }while(i<10)

//infinite loop using do while

// let x = 1
// do{
//     var i = 1
//     console.log(x)
//     x+=1
//     i++
// }while(i>1)

// let i = 1;
// do{
//     console.log(i)
//     i+=1
// }while(i<=10)

// for in loop

let obj = { name: "siva", age: 43, gender: "male" };

// for (let idx in obj){
//     console.log(idx)
// }

//for of loop

// for (let val of Object.values(obj)){
//     console.log(val)
// }

// for (let [k,v] of Object.entries(obj)){
//     console.log(k,v)
// }

// let arr = [...Array(10)].map((i,idx)=>idx+1)
// for (let i of arr){
//     console.log(i)
// }

// console.log(Object.values(obj))

// for (let i of obj){      // for of not works on plain objects  they works on iterables
//     console.log(i)
// }

//while

// let i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

//do..while

// let i = 1;
// do{
//     console.log(i)
//     i++
// }while(i<=10)

// let arr = [...Array(100)].map((i,idx)=>idx+1)
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }

// break and continue

// for (let i = 1;i<=10;i++){

//     if(i === 5) break  // continue
//     console.log(i)
// }

// for (let v in Object.values(obj)){
//     console.log(v)
// }

//iterator

// let it = Object.keys(obj)[Symbol.iterator]()
// console.log(it.next())

// let it = Object.entries(obj)[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let arr = [...Array(100)].map((i, idx) => idx + 1);

// let a = arr[Symbol.iterator]()
// console.log(a.next())

// function* display(arr){
//         for (let v of arr){
//                 if (v%2 === 0){
//                         yield v
//                 }
//         }
// }

// let it = display(arr)
// console.log(it.next())

// for (let i of display(arr)){
//         console.log(i)
// }

//while

// Count down from 5 to 1 before starting a game.

// let i = 5;
// while (i>0){
//         console.log(i)
//         i--
// }

// Keep asking user for input until they enter "exit".

// let inp;

// do {
//   inp = prompt("enter anything");
//   console.log(inp)
// } while (inp !== "exit");
