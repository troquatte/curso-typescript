enum Mes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Março",
}

const pessoa: { nome: string; mesAniversario: string } = {
  nome: "Dener",
  mesAniversario: Mes.MAR,
};

if (pessoa.mesAniversario === Mes.MAR) {
  console.log(pessoa);
}
