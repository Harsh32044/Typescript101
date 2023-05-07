type User = {
    name: string,
    readonly _id: string
}

type Admin = {
    username: string,
    passcode: string
}

let harsh : User | Admin = {name:"Harsh", _id: "348235"}
harsh = {username: "hrssriv", passcode:"harshsriv"}

// function getDBId(id: string | number) {// string | number => accept the argument if its a string or a number
//     console.log(`DB ID is ${id}`)
// }

getDBId(24) // Number
getDBId("253434") // String

function getDBId(id: string | number) {// string | number => accept the argument if its a string or a number
    //id.toLowerCase() Error because TS is warning, id could be either string or number
    // Need typeof to typecheck id
    if (typeof id === "number"){
        id.toExponential()
    }
    else if (typeof id === "string") {
        id.toLowerCase()
    }
}

const data: number[] = [1,2,3,4]
const dta2: string[] = ["1", "2", "3", "4"]

const dta3: (string | number)[] = [1,'2','3',4]