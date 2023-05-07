//  type User = {
//    name: string,
//    email: string,
//    isActive: boolean
//    creditCardDetails?: number //optional, ? symbol
//  }
 
//  const user: User = {
//     name: "Harsh",
//     email: "jgfjg@jgvh.com",
//     isActive: true
//  }

 function createUser({name: string, isActive: boolean}) {

 }

 let newUser = {
   name: "Harsh",
   isActive: false,
   email: "ytfu@jyty.com"
 }
 createUser({name: "Harsh", isActive: false}) // Giving error, can't pass more info than mentioned in function def
 
 createUser(newUser) // Not giving any error, able to pass a lot of info as optional data apart from mentioned in function def

 const createCourse = ():{name: string, price: number} => {
    return {name:"React", price: 399}
 }