abstract class Entity<Props>{
  constructor(protected props:Props){} 

  toJSON(): Props{
    return {...this.props}
  }
}

type CategoriaPropriedades = {name: string, description: string};
class Categoria extends Entity<CategoriaPropriedades>{}

const categoria1 = new Categoria({
  name: 'string',
  description: 'string'
})

console.log(categoria1.toJSON())

/********** */

type ProdutoPropriedades = {titulo: string, preco: number};
class Produto extends Entity<ProdutoPropriedades>{}

const produto1 = new Produto({
  titulo: 'Esse é meu titulo',
  preco: 12.11
})

console.log(produto1.toJSON())