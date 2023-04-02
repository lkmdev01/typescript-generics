const getProperty = <T,K extends keyof T>(obj:T, key:K): T[K] => {
  return obj[key]
}

let typescriptInfo = {
  name: 'Typescript',
  skills: ['ts','js'],
  level: 'hard',
}

getProperty(typescriptInfo,'name')
getProperty(typescriptInfo,'skills')
getProperty(typescriptInfo,'level')

// outro exemplo
let typescriptInfo2 = {
  title: 'Typescript',
  description: 'this is my description',
  age: 123,
}

getProperty(typescriptInfo2,'title')
getProperty(typescriptInfo2,'description')
getProperty(typescriptInfo2,'age')