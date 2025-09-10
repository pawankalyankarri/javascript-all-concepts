        // creating a Set

// const s = new Set([1,2,3,4,3,2])
// console.log(s)

        //add()

// const s = new Set()
// console.log(s)
// s.add(10)
// s.add(20)
// console.log(s)

        // iterating each value

// let arr = [...Array(100)].map((i,idx)=>idx+1)
// let s = new Set(arr)
// for (let i of s){
//     console.log(i)
// }
// console.log(s)

// console.log(typeof new Set())

            // instanceof()

// console.log(new Set() instanceof(Set))
// console.log([] instanceof(Array))


// let s = new Set([1,2,3,4,5,6,7,8,9])


// console.log(s.size)
// console.log(s.has(13))
// console.log(s.values())    // .values and .keys both return values
// console.log(s.keys())
// console.log(s.entries())     // [val,val]


// console.log(s.add(10))
// console.log(s.clear())  // it will return undefined after clear
// console.log(s.delete(9))
// console.log(s.entries())
// s.forEach((i)=>console.log(i))
// console.log(s.size)
// console.log(s.has(4))
// console.log(s.clear())
// console.log(s)


            // set theory operations


// let s1 = new Set(['a','b','c'])
// let s2 = new Set(['c','d','e'])

// console.log(s1.union(s2))    // unique values in both
// console.log(s1.intersection(s2))    // common values in both
// console.log(s1.difference(s2))
// console.log(s1.symmetricDifference(s2))
        
// let a = new Set([1,2,3,4])
// let b = new Set([1,2,3,4,5,6,7])

// console.log(a.isSubsetOf(b))
// console.log(a.isSupersetOf(b))
// console.log(b.isSupersetOf(a))
// console.log(a.isDisjointFrom(b))
// console.log(a.isDisjointFrom(s1))


// let p = new WeakSet()
// p.add({name:'siva',age:34})


            //Map


const m = new Map([
    ['apple',500],
    ['banana',300],
    ['orange',150]
])

m.set('papaya',50)
// console.log(m)
// console.log(m.get('orange'))
// console.log(typeof m)

// m.forEach((i)=>console.log(i))

// console.log(m.keys())
// console.log(m.values())
// console.log(m.entries())