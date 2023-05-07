const user = {
    name: "Harsh",
    id: 9.02,
};
function greeting(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greeting("Harsh", new Date());

export {};