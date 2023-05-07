function addNum(num1, num2) {
    return num1 + num2;
}
let numb = addNum(1, 6);
console.log(numb);
let signUpUser = (userName, email, password, isPaid = true) => {
    return `Hello ${userName}, as I remember correctly, your email is ${email} and your password is ${password}. ${isPaid ? "You are subscribed!" : "Ohh Snap! You haven't subscribed to us yet.."}`;
};
const helloGreet = (s) => {
    return "";
};
let heroes = ["Thor", "IronMan", "Captain America"];
console.log(heroes.map((hero) => `hero is ${hero}`));
function consoleErr(errmsg) {
    console.log(errmsg);
}
function handleErr(errmsg) {
    throw new Error(errmsg);
}
/** : never -- never returns a value
 * never indicates that a function never executes normally, either throws an exception or
 * sets up an infinite loop such that further execution of code won't happen
*/
console.log(signUpUser("harshSriv", "hsriv@gn.com", "&*^%%*$^&"));
