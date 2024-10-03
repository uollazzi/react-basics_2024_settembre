// generics
// il modo per passare un tipo come parametro

function saluta(nome: string) {
    console.log(nome);

}

saluta("pippo");

const numeri = Array<boolean>();
numeri.push()

console.log(numeri);


class Lista<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    get(): T[] {
        return this.items;
    }
}

let l = new Lista<string>();
l.add("asd");
console.log(l.get());

let n = new Lista<number>();
n.add(4);

interface Persona {
    nome: string,
    eta: number
}

let pp = new Lista<Persona>();

