// class Student {
//     constructor (n,a){
//         this.name = n
//         this.age = a

//     }
// }

// let s = new Student('siva',32)
// console.log(s)

// class Car {
//   constructor(n, m) {
//     this.name = n;
//     this.mileage = m;
//   }

//   fullName() {
//     return this.name;
//   }
// }

// let c = new Car("mahendra", 20);
// console.log(c.fullName());



// class Person{
//     constructor (n,a,g){
//         this.name = n;
//         this.age = a;
//         this.gender = g;
//     }
//     details (){
//         return `${this.name} ${this.age} ${this.gender}`
//     }
// }

// let p = new Person('karthi',45,'male')
// // console.log(p)
// // console.log(typeof p)

// console.log(p.details())


// class Person {
//     constructor (n,a,g){
//         this.name = n
//         this.age = a
//         this.gender = g
//     }
//     details () {
//         return `${this.name} age is ${this.age} gender is ${this.gender}`
//     }
// }

// const p1 = new Person('surya',50,'male')
// // console.log(p1)
// console.log(p1.details())

            // extend     extending the class and super() method for calling parent class

// class Car {
//     constructor (n){
//         this.name = n
//     }
//     fullname (){
//         return this.name
//     }
// }

// class Bike extends Car {
//     constructor (n,m){
//         super(n)
//         this.model = m

//     }
//     details (){
//         return `${this.name} model is ${this.model}`
//     }
// }

// let b = new Bike('hero',70)
// console.log(b.fullname())


                // get and set methods


class Human{
    constructor (n,a,g){
        this.name = n;
        this.age = a;
        this.gender = g;
    }
    details (){
        return `${this.name}`
    }
}

class Employee extends Human{
    constructor (n,a,g,eid){
        super(n,a,g)
        this.eid = eid
    }
    info(){
        console.log(this.name,this.age,this.gender,this.eid)
    }
    get getage(){
        console.log(this.age)
    }
    set setage(na){
        this.age = na
    }
}

const p = new Employee('raj',31,'male',5)
// console.log(p.details())
// p.info()
// p.getage
p.setage = 22
p.getage
















