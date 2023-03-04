/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa {
  export namespace Joao {
    const data = 1 + 1;

    export let nome = "Joao";
    export const calc = () => {
      return data;
    };
  }

  export namespace Maria {
    const data = 1 + 1;

    export let nome = "Maria";
    export const calc = () => {
      return data;
    };
  }
}
