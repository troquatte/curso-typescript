/*
  Classes, métodos e campos no TypeScript podem ser abstratos.

  Um método abstrato ou campo abstrato é aquele que não teve 
  uma implementação fornecida.  

  O papel das classes abstratas é servir como uma classe base para 
  subclasses que implementam todos os membros abstratos. 
  
  Quando uma classe não possui membros abstratos, ela é chamada de concreta.
*/

abstract class Pessoa {
  protected nome: string = "";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }

  protected abstract profissao: string;
  public abstract qualSuaProfissao(): string;
  public abstract qualSeuSalario(salario: number): number;
}

class Maria extends Pessoa {
  protected profissao: string = "Programadora";

  constructor() {
    super("Maria", 31);
  }

  public qualSuaProfissao(): string {
    // Validações
    return `Sua Profissão é ${this.profissao}`;
  }

  public qualSeuSalario(salario: number): number {
    // Validações
    return salario;
  }
}

class Dener extends Pessoa {
  protected profissao: string = "Programador";

  constructor() {
    super("Dener", 31);
  }

  public qualSuaProfissao(): string {
    // Validações
    return `Sua Profissão é ${this.profissao}`;
  }

  public qualSeuSalario(salario: number): number {
    // Validações
    return salario;
  }
}

const maria = new Maria();
console.log(maria.comer("Feijoada"));
