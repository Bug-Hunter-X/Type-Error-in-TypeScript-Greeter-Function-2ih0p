function greeter(people: string[]): string[] {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); // Correct!