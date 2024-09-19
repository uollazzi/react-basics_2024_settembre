let pippo: string | undefined;
// pippo = undefined;

console.log(pippo);

const saluta = (nome: string) => {
    console.log(nome);
}

saluta(pippo ?? "Mario");

// class Persona {
//     nome: string;
//     moglie?: string;

//     constructor(nome: string) {
//         this.nome = nome;
//     }
// }