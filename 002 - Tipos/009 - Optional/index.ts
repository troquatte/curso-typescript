const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `nome: ${nome}, idade: sem valor definido`;
  }

  return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Dener", 31));
console.log(fn("Dener"));

const pessoa: { nome: string; idade?: number } = { nome: "Dener", idade: 31 };
