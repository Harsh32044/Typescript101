import { isEmail } from "./emailType.js";
let newColor;
newColor = "blue";
function createUser3(name, id, email, isActive) {
    if (!(isEmail(email))) {
        throw new Error(`Wrong email address ${email}`);
    }
    const user = {
        _id: id,
        name: name,
        email: email,
        isActive: isActive
    };
    return user;
}
const myUser31 = createUser3("Harsh", 1234, "kusdgfb", false);
console.log(myUser31);
const myUser32 = createUser3("Harsh", 123234, "hrsf@ghgfh.cc", true);
console.log(myUser32);
