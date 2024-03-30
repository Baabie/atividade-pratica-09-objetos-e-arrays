// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let primeiroAluno = {
  nome: "pedro",
  nota1: 9,
  nota2: 8,
};

let segundoAluno = {
  nome: "joao",
  nota1: 7,
  nota2: 6,
};

function calcularMedia(alunoNota) {
  return (alunoNota.nota1 + alunoNota.nota2) / 2;
}

let mediaPrimeiroAluno = calcularMedia(primeiroAluno);
let mediaSegundoAluno = calcularMedia(segundoAluno);

console.log("Nome: ", primeiroAluno);
console.log("Média: ", mediaPrimeiroAluno);

console.log("Nome: ", segundoAluno);
console.log("Média: ", mediaSegundoAluno);
