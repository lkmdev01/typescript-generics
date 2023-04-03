const report = <O extends object, N extends object>(salesOld: O, saleNew:N): O & N => {
  // return {...salesOld, ...saleNew}
  // ou faça assim
  return Object.assign({}, salesOld, saleNew)
}

const sales2021_2 = {
  agosto: 122,
  setembro: 433,
  outubro: 342
}

const sales2022_1 = {
  janeiro: 122,
  fevereiro: 433,
  marco: 342
}

console.log(report(sales2021_2, sales2022_1))