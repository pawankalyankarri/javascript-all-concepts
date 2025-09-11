        // types of creatin objects

        // normal way

// const obj = {
//     name : "anji",
//     age : 29,
//     gender : 'male'
// }


            // using new keyword


// const obj = new Object({
//     name: 'siva',
//     age : 40
// })
// console.log(obj)


            // using Object.create()


// const obj = Object.create({name: '',age: null})
// obj.name = 'vishal'
// obj.age = 45

// console.log(obj)


// const obj = {
//         fname : 'siva',
//         lname : 'raj',
//         age : 45,
//         fullname : function (){
//                 console.log(this.fname,this.lname)
//         }

        
// }

// obj.info = function (){
//         console.log(this.fname,this.lname,this.age)
// }

// obj.fullname()
// obj.info()
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.keys(obj).toString())

// let jsobj = JSON.stringify(obj)
// console.log(jsobj)
// let res = JSON.parse(jsobj)
// console.log(res)


// function Person(n,a,g){
//         this.name = n
//         this.age = a
//         this.gender = g 
// }

// let p1 = new Person('somu',34,'male')
// console.log(p1)
// Person.prototype.nationality = 'English'
// console.log(p1.nationality)
// console.log(p1)
// console.log(Object.getPrototypeOf(p1))



                // destructuring

// let obj = {
//         name : 'siva',
//         age : 34,
//         gender : 'male'
// }

// const {name : n,a,g,loc = 'hyd'} = obj
// console.log(n,loc)



// let st = 'hello'
// let [a,b,...c] = st
// console.log(a)
// console.log(b)
// console.log(c)

                // swaping

// let a = 1;
// let b = 2;

// [a,b] = [b,a]   // way to swap
// console.log(a,b)


                // prototypes

// function Person (n,a,g){
//         this.name = n
//         this.age = a
//         this.gender = g
// }

// const p1 = new Person('ravi',32,'male');
// const p2 = new Person('priya',29,'female')

// console.log(p1,p2)
// Person.prototype.loc = 'hyd'
// console.log(p1.loc)
// console.log(Object.entries(p1))

// let data = JSON.parse(localStorage.getItem('obj'))
// console.log(data)