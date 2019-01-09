class Person {
  //don't need this when declaring initial variables and types
  name: string;
  //can initialize values here
  type: string = "cool person";
  age: number = 25;

  //or can initialize in constructor
  //can add new properties in constructor like username below
  //must specify public, private, protected when adding new properties in constructor
  constructor(name: string, public username: string) {
    this.name = name;
    this.username = username;
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("James", "james123")

console.log(person.name, person.username)

person.printAge()




