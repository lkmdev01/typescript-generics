// O "U = boolean" fala que se não ouver definição de tipo no 'U' ele automaticamente vai ser 'boolean'
interface RepositorioInterface<T, U = boolean> {
  findById(id: string): T
  findAll(): T[],
  destroyed(id: string): U
}

const object1: RepositorioInterface<string, object> = {
  findById: function (id: string): string {
    throw new Error("Function not implemented.")
  },
  findAll: function (): string[] {
    throw new Error("Function not implemented.")
  },
  destroyed: function (id: string): object {
    throw new Error("Function not implemented.")
  }
}

class Produto{}
interface ProdutoRepositorioInterface extends RepositorioInterface<Produto, Produto>{}

class ProdutoRepositorio implements ProdutoRepositorioInterface{
  findById(id: string): Produto {
    return new Produto
  }
  findAll(): Produto[] {
    return [
      new Produto
    ]
  }
  destroyed(id: string): Produto {
    return new Produto
  }

}

class User{}
interface UserRepositorioInterface extends RepositorioInterface<User>{}

class UserRepositorio implements UserRepositorioInterface{
  findById(id: string): User {
     return new User
  }

  findAll(): User[] {
    return[
      new User
    ]
  }

  destroyed(id: string): boolean {
    return true
  }
}

export{}