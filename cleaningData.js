/*
2. Cleaning and Formatting Data from an API

You receive user data from an API in messy format. You need to:

Remove unwanted characters from data fields.

Split full names into first name and last name.

Convert all email addresses to lowercase.

*/


function cleaning(arr){
    res = arr.map(obj=>{
        let splitfn = obj.fullname.split(" ")
        let firstName = splitfn[0]
        let lastName = splitfn[splitfn.length-1]
        console.log('first name',firstName)
        console.log('last name',lastName)

        let lemail = obj.email.toLowerCase()
        console.log(lemail)

    })



}


let rawData = [
    {fullname:'subba raju',email:'SUBBARAJU@gmail.com'},
    {fullname:'gajala washintonDC',email:'gajala@gmail.com'},
    {fullname:'kill bill pande',email:'killbill@gmail.com'},
    {fullname:'ojjas gambira',email:'og@gmail.com'},


]
cleaning(rawData)
