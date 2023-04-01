// class Exemple{
//   private value: string
  
//   constructor(value: string){
//     this.value = value
//   }

//   getValue(): string{
//     return this.value
//   }
// }

// const ex1 = new Exemple("exemplo de string");
// console.log(ex1.getValue())

// Agora vamos fazer o mesmo só que agora com o "private value: string" com um tipo dinâmico;

class Exemple<T>{
  private value: T
  
  constructor(value: T){
    this.value = value
  }

  getValue(): T{
    return this.value
  }
}

// Se não passar o tipo nesse "Exemple("exemplo de string");" ele pega o valor automaticamente e atribui;
const ex1 = new Exemple<string>("exemplo de string");
const ex2 = new Exemple<number>(123);
const ex3 = new Exemple<boolean>(true);
const ex4 = new Exemple("exemplo de tipo automatico");

console.log(ex1.getValue())
console.log(ex2.getValue())
console.log(ex3.getValue())