interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    startTrail():string,
    getCoupon(coupName: string, off?:number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
//Loose form of classes

const harsh: User = {
    dbId: 23234352,
    email:"hsr@gm.com",
    userId: 23454,
    githubToken:"HYGEBugasdyi655768y3",

    startTrail: () => {
        return ''},

    getCoupon: (name:"Harsh", offer: 1) => {
        return 11
    }
}

const newHarsh: Admin = {
    dbId: 23234352,
    email:"hsr@gm.com",
    userId: 23454,
    githubToken:"HYGEBugasdyi655768y3",
    role: "admin",

    startTrail: () => {
        return ''},

    getCoupon: (name:"Harsh", offer: 1) => {
        return 11
    }
}