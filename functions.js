        //anonymous function
        //automatically called this function

// (function (){
//     console.log('hi')
// })()


            // rest operator in function


// function addition(...x){
//     console.log(x)
//     console.log(x.reduce((a,b)=>a+b))
    
// }
// addition(1,2,3,4,5,6,7,8,9)

            //arrow functions

// let fn = (a,b)=>a+b
// console.log(fn(4,5))

        // this keyword


// function display(){
//     console.log(this)  // here this refers the window object or global
// }
// display()


// let fn = ()=>{
//     console.log(this)
// }
// fn()


                // function invocations

// let obj = {
//         firstName : 'john',
//         lastName : 'Doe',
//         fullName :  ()=>{
//                 console.log(this)
//                 return this.firstName+' '+ this.lastName
//         }
// }

// console.log(obj.fullName())


                //this keyword

// 'use strict'
// console.log(this) // window
// function x(){
//         console.log(this)  // undefined
// }
// x()


                // call()

// const obj = {
//         details : function (city,gender){
//                 return `${this.name} ${city} ${gender}`
//                //  return this.name+' '+city+' '+gender
//         }
// }

// const p1 = {
//         name:'siva'
// }

// const res = obj.details.call(p1,'hyd','male')
// console.log(res)



// const obj = {
//         details : function (gender,loc) {
//                 return `${this.name} ${gender} ${loc}`
//         }
// }

// const p1 = {
//         name : 'siva'
// }

// const res = obj.details.call(p1,'male','hyd')

// console.log(res)


                // apply()


// const obj = {
//         details : function (gender) {
//                 return `${this.name} ${gender}`
//         }
// }
// const p1 = {
//         name : 'siva'
// }
// const res = obj.details.apply(p1,['male'])
// console.log(res)


                // bind()

// const obj = {
//         details : function (loc) {
//                 return `${this.name} ${loc}`
//         }
// }
// const p1 = {
//         name : 'raj'
// }
// const res = obj.details.bind(p1,'bangaluru') // it will return an functions
// console.log(res())


// const obj = {
//         details : function(loc){
//                 console.log(this.name,this.age,loc)
//         }
// }
// const p1 = {
//         name: 'revi',
//         age : 34
// }
// obj.details.call(p1,'hyd')

                //closures


// function outerfn(){
//         let x = 10;
//         function innerfn(){
//                 return x
//         }
//         return innerfn
// }

// let gv = outerfn()
// console.log(gv)










































// siddu.s@algofusiontech.com

