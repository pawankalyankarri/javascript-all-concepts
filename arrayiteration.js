
let arr = [...Array(10)].map((i,idx)=>idx+1)


    // forEach()

// let res = arr.forEach((i,idx,arr)=>{
//     arr[idx] = i*2
// })
// console.log(res)
// console.log(arr)



        //map()

// let res = arr.map((i)=>i*2)
// console.log(res)

        //flatMap

let users = [
    { name: "Alice", phones: ["111-111", "222-222"] },
    { name: "Bob",   phones: ["333-333"] },
    { name: "Carol", phones: ["444-444", "555-555", "666-666"] }
];

// let res = users.map(item=>item.phones).flat()  // instead of using map and flat methods 
// console.log(res)  

// let res = users.flatMap(item=>item.phones)   //  flatmap()
// console.log(res)

        // filter()

// let res = arr.filter(item=>item%2 == 0)
// console.log(res)


        // reduce()

// let res = arr.reduce((acc,item)=>acc+item)
// console.log(res)

        //reduceRight()

// let res = arr.reduceRight((acc,item)=>acc+item)
// console.log(res)


        // every()

// let res = arr.every((item)=>item%2 == 0)
// console.log(res)

        // some()

// let res = arr.some(item=>item%2 == 0)
// console.log(res)


        // from()


