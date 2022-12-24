//arrow function
const product = (a, b) => a * b;
console.log(product(14, 8));

//object
const student = {
  name: "Rakshit",
  age: 18,
  greet() {
    console.log("hi, i am " + this.name);
  },
};
student.greet();
