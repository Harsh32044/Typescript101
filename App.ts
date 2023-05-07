interface User {
    name:string,
    id:number
}

const user : User = {
    name:"Harsh",
    id:9.02,
}
function greeting(person:string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greeting("Harsh", new Date())
/*Perhaps surprisingly, calling Date() in JavaScript returns a string. On the other hand, 
constructing a Date with new Date() actually gives us what we were expecting. */
// console.log(user)

export {}