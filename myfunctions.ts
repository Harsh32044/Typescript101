function addNum(num1:number, num2: number) : number {
    return num1 + num2
}

let numb = addNum(1, 6)
console.log(numb)

let signUpUser = (userName: string, email: string, password: string, isPaid : boolean = true) => {
    return `Hello ${userName}, as I remember correctly, your email is ${email} and your password is ${password}. ${isPaid ? "You are subscribed!" : "Ohh Snap! You haven't subscribed to us yet.."}`
}

const helloGreet = (s: string):string => {
    return ""
}

let heroes = ["Thor", "IronMan", "Captain America"]

console.log(heroes.map((hero):string => `hero is ${hero}`))

function consoleErr(errmsg: string) : void {
    console.log(errmsg)
}

/** : never -- never returns a value
 * never indicates that a function never executes normally, either throws an exception or 
 * sets up an infinite loop such that further execution of code won't happen
*/



console.log(signUpUser("harshSriv", "hsriv@gn.com", "&*^%%*$^&"))