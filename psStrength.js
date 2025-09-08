/*
3. Password Strength Checker

When a user enters a password:

Validate the password has at least 8 characters.

Check for uppercase letters, lowercase letters, digits, and special characters.

Disallow passwords that have leading or trailing spaces.
*/

function passwordStrength(psw){
    if (psw.length >= 8) console.log('having 8 chars')
    else console.log('not having atleast 8 chars')

    console.log(/[A-Z]/.test(psw))
    console.log(/[a-z]/.test(psw))
    console.log(/[0-9]/.test(psw))
    
}
passwordStrength('Siva@789')

