let greetings:string = "Harsh"

console.log(greetings.toLowerCase())

//number

let userId = 33445.12983292388564379 // No need to put type inference here, since already assigned

userId.toPrecision(18)

//boolean
let isLoggedIn= false

// any
let hero: string

function getHero() {
    return "THOR"
}

hero =  getHero()
export {}