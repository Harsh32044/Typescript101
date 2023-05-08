interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    startTrail():string,
    getCoupon(coupName: string, off?:number): number
}
//Loose form of classes

const harsh: User = {
    dbId: 23234352,
    email:"hsr@gm.com",
    userId: 23454,

    startTrail: () => {
        return ''},

    getCoupon: (name:"Harsh", offer: 1) => {
        return 11
    }
}