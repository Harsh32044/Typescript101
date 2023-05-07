// const user : (string | number)[] = [1,"hc"]

let user: [string, number, boolean] //tuple
type MyTuple = [string, number, boolean] //Defining tuple via type
let userr: MyTuple = ["Harsh",23,true]
user = ["harsh", 124, true] //fixed order and fixed length

type RGB = [number, number, number]

//U can change the values inside a tuple 
//as long as u don't change the type

//user[1] was 124, but can be changed to 12 by simply
//user[1] =  12
