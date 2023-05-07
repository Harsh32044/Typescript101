import { isEmail, Email } from "./emailType.js"
type Color = 'red' | 'green' | 'blue'

let newColor : Color
newColor = "blue"

// function createUser2(user: User) {
//     return `Hello ${user.name}.`
// }

interface Uuser  {
    readonly _id: number, 
    name: string,
    email: Email,
    isActive: boolean
}

function createUser3(name:string, id:number, email: string, isActive: boolean): Uuser {
    if(!(isEmail(email))) {
        throw new Error(`Wrong email address ${email}`)
    }

    const user: Uuser = {
        _id: id,
        name: name,
        email: email as Email,
        isActive: isActive

    }

    return user
}

const myUser31 = createUser3("Harsh", 1234,"kusdgfb",false)
console.log(myUser31)

const myUser32 = createUser3("Harsh", 123234, "hrsf@ghgfh.cc", true)
console.log(myUser32)


//Combining Types

type CardNum = {
    cardnum: string
}

type CardDate = {
    carddt: string
}

type CardDetails = CardNum & CardDate & {
    cvv: number
}

const carddtls: CardDetails = {
    cardnum: "4576754678568790",
    carddt: "12/12/1212",
    cvv: 234
}