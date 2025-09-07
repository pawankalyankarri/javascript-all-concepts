let str = 'hello world'

// let res = str.split("").reverse().join("")

let res = str.split(" ")
res = res.map(i=>i[0].toUpperCase()+i.slice(1))
console.log(res)