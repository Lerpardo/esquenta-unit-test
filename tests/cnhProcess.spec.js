const cnhProcess = require('../src/cnhProcess');

/*
  Essa função recebe o nome e o ano de nascimento de uma pessoa,
  retornando se ela pode dar entrada na CNH.

  Parâmetros:
    - Uma string e um número. Exemplos: 'Daniel', 2000;

  Comportamento:
    - cnhProcess('Ingrid', 2000) // Retorno: "Ingrid tem 21 anos de idade e pode iniciar o processo."
    - cnhProcess('João', 2010) // Retorno: "João tem 11 anos de idade e não pode iniciar o processo."

  Obs.: Se a pessoa tiver menos de 18 anos ela não pode iniciar o processo.
*/

describe("Testando a Função cnhProcess.", () => {
  const currentYear = new Date().getFullYear();
  const birthSuccess = 2000;
  const birthError = currentYear - 10;
  const ageSuccess = currentYear - birthSuccess;
  const ageError = currentYear - birthError;

  it(`Ao passar os argumentos "Ingrid" e ${birthSuccess}, deve retornar: "Ingrid tem ${ageSuccess} anos de idade e pode iniciar o processo."`, () => {
    expect(cnhProcess("Ingrid", birthSuccess)).toBe(`Ingrid tem ${ageSuccess} anos de idade e pode iniciar o processo.`);
  });

  it(`Ao passar os argumentos "Ronaldo" e ${birthError}, deve retornar: "Ronaldo tem ${ageError} anos de idade e não pode iniciar o processo."`, () => {
    expect(cnhProcess("Ronaldo", birthError)).toBe(`Ronaldo tem ${ageError} anos de idade e não pode iniciar o processo.`);
  });
});
