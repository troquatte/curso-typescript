/*
 As interfaces TypeScript definem os contratos em seu código. 
 Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

let pessoa: IPessoa = {
  nome: "Dener",
  idade: 31,
  cpf: 111111111,
  enabled: () => {
    return true;
  },
};

class Joao implements IPessoa {
  nome: string = "Joao";
  idade: number = 22;

  readonly cpf: number = 11111;

  enabled(): boolean {
    return true;
  }
}

class Maria implements IPessoa {
  nome: string = "Maria";
  idade: number = 16;

  readonly cpf: number = 222222;

  enabled(): boolean {
    return false;
  }
}
