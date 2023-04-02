class Person{
  constructor(
    public name: string,
    public age: number,
  ){}
}

const display = <T extends Person, U>(person:T,p2:U): void =>{
  console.log(person.name)
}

const display2 = <T extends Person, U extends T>(person:T,p2:U): void =>{
  console.log(person.name)
}

const display3 = <T extends Person, U extends string|number>(person:T,p2:U): void =>{
  console.log(person.name)
}

const p1 = new Person("Lukas", 20)
display3<Person,string>(p1,'123')

class User extends Person{}
const p2 = new User("Lukas", 20)
display(p2,123)


// Não funciona porque o 'test' não é do tipo
// class Test{}
// const test = new Test()
// display(test,123)