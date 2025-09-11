function display(arr){
    let uarr = arr.map(item=>item.toUpperCase())
    let res = []
    console.log(uarr)
    uarr.filter(item=>{
        if(item.length >= 3){
            res.push(item.split("").reverse().join(''))
        }
    })
    console.log(res)

}

let arr =  ["hello", "hi", "world", "js"]
// display(arr)




const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];


function saverage(arr){
    let total = 0;
    arr.forEach((obj)=>total+=obj.grade)
    
    let avg = total/arr.length

    console.log(avg)


}

// saverage(students)


let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5]

function duplicates(arr){
    let narr = new Set([...arr])
    let res = Array.from(narr).sort((a,b)=>a-b)
    console.log(res)

}
//  duplicates(nums)


function analytics(arr){
    let maxprice = 0
    let maxpricepName = ''
    arr.find(obj=>{
        if (obj.price>=maxprice){
            maxprice = obj.price
            maxpricepName = obj.name
        }

    })
    console.log(maxpricepName)
    
    let total = 0;
    let instockItems = arr.filter(obj=>obj.inStock)
    instockItems.forEach(obj=>total+=obj.price)
    let avgprice = total/instockItems.length
    console.log(avgprice)


    let pcount = {}
    arr.filter(obj=>{
        if (Object.keys(pcount).includes(obj.category)){
            pcount[obj.category] = pcount[obj.category]+1
        }
        else{
            pcount[obj.category] = 1
        }
    })
    console.log('pc',pcount)
    
    

    let belo500 = arr.some(obj=>obj.category === 'Electronics' && obj.price<500)
    console.log(belo500)

}

let products = [
  { name: "Laptop", category: "Electronics", price: 999, inStock: true },
  { name: "Chair", category: "Furniture", price: 150, inStock: false },
  { name: "Phone", category: "Electronics", price: 699, inStock: true },
  { name: "Desk", category: "Furniture", price: 300, inStock: true }
];

// analytics(products)


function analyze(st){
    let starr = st.split(' ')

    let wordCount = {}
    starr.filter(item=>{
        let word = item.toLowerCase()
        if (Object.keys(wordCount).includes(word)){
            wordCount[word] = wordCount[word]+1
        }else{
            wordCount[word] = 1
        }
    })
    console.log(wordCount)

    
    let filteredObj = starr.filter(item=>item.length>3)
    console.log(filteredObj)

 
    let wordCountarr = Object.entries(wordCount)

   
    for (let i = 0;i < wordCountarr.length;i++){
        for (let j = 0;j<wordCountarr.length-1;j++){
            if (wordCountarr[j][1] < wordCountarr[j+1][1]){
                [wordCountarr[j],wordCountarr[j+1]] = [wordCountarr[j+1],wordCountarr[j]]
            }
        }
    }
    let sortedMap = new Map(wordCountarr)
    console.log(sortedMap)
}

let sentense = "The quick brown fox jumps over the lazy dog. The fox was quick."
// analyze(sentense)



class Library{
    
    constructor (){
        this.arr = []

    }
    addBook(title,author,year,genre){
        this.arr.push(
            {id:this.arr.length+1,
                title : title,
                author : author,
                year : year,
                genre : genre
            }
        )
    }
    findBooksByAuthor(author){
        let books = this.arr.filter(book=>book.author === author)
        return books;
    }
    getBooksInYearRange(syear,eyear){
        let books = this.arr.filter(book=> book.year >= syear && book.year <= eyear  )
        return books
    }
    removeBook(id){
        let res = this.arr.findIndex(book=>book.id === id)
        if (res !== -1){
            this.arr.splice(res,1)
            console.log(this.arr)
            return 'success'
        }
        else{
            return 'failure'
            
        }

    }


}   




const b = new Library()
b.addBook('abc','siva',2023,'drama')
b.addBook('def','raju',2024,'action')
b.addBook('ghi','revi',2020,'thriller')
b.addBook('jkl','revi',2021,'horror')

// console.log(b.findBooksByAuthor('revi'))
// console.log(b.getBooksInYearRange(2020,2023))
// console.log(b.removeBook(4))
// console.log(b.removeBook(4))