/*
1. User Input Validation and Formatting (Form Handling)

When a user submits a form (name, email, phone number), you need to:

Remove extra spaces from each input.

Validate if the email contains "@".

Ensure the username is at least 5 characters.

Capitalize the first letter of the name.

Mask the phone number to display only the last 4 digits.

*/

function handleForm(name,email,mobile){
    console.log(name.trim(),email.trim(),String(mobile).trim(),mobile.toString().trim())
    
    if (email.includes('@'))console.log('email is having @')
    else console.log('email not having @')

    if(name.length >= 5) console.log('it has 5 or more than 5')
    else console.log('not having atleast 5 chars')

    let cName = name[0].toUpperCase()+name.slice(1)
    console.log(cName)

    let Mmobile = '*'.repeat(mobile.toString().length - 4) + mobile.toString().slice(-4)
    console.log(Mmobile)

    

    
    
}

handleForm('siva','siva@gmail.com',1234567890)

