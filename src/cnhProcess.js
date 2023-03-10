/*
  Essa função recebe o nome e o ano de nascimento de uma pessoa,
  retornando se ela pode dar entrada na CNH.

  Parâmetros:
    - Uma string e um número. Exemplos: 'Daniel', 2000;

  Comportamento:
    - cnhProcess('Ingrid', 2000) // Retorno: "Ingrid tem 22 anos de idade e pode iniciar o processo."
    - cnhProcess('João', 2010) // Retorno: "João tem 12 anos de idade e não pode iniciar o processo."

  Obs.: Se a pessoa tiver menos de 18 anos ela não pode iniciar o processo.
*/

const cnhProcess = (name,age) => {
  const CURRENT_AGE = 2022 - age
  if(CURRENT_AGE > 18) {
    return `${name} tem ${CURRENT_AGE} anos de idade e pode iniciar o processo.`
  } else {
    return `${name} tem ${CURRENT_AGE} anos de idade e não pode iniciar o processo.`
  }
};

module.exports = cnhProcess;