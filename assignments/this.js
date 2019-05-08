/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding: when "this" refers to Window object.
 * 2. Implicit binding: when "this" binds to the object before the dot operator.
 * 3. New binding: when "new" is used to call function, "this" refers to that new object.
 * 4. Explicit binding: when .call(), .apply() or .bind() is used on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

window.context = "Window";

function windowBind() {
  console.log(`I'm bound to ${this.context}.`);
}
windowBind();

// Principle 2

// code example for Implicit Binding

const people = {
  name: "Tim Apple",
  age: 54,
  wave() {
    console.log(`I am waving to ${this.name}`);
  }
};
people.wave();

// Principle 3

// code example for New Binding

function People(name, age) {
  this.name = name;
  this.age = age;
}

const newbie = new People("Justinas", 31);

// Principle 4

// code example for Explicit Binding

function wave() {
    console.log(`Hey! I am waving to ${this.name}!`);
}
const waveablePerson = {
    name: "Gabe"
}

wave.call(waveablePerson);