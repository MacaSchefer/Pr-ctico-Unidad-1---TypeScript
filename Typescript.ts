//Ejercicio 1 

interface Animal{
    nombre: string;
    gritar(): string;
}

//Ejercicio 2

class Perro implements Animal {
    nombre: string;
    constructor (nombre: string){
        this.nombre = nombre;
    }
    gritar(): string {
        return "¡Guau,guau!";
    }
}

class Gato implements Animal {
    nombre: string;
    constructor (nombre: string){
        this.nombre = nombre;
    }
    gritar(): string {
        return "¡Meoww!"
    }
}

class Vaca implements Animal {
    nombre: string;
    constructor (nombre: string) {
        this.nombre = nombre;
    }
    gritar(): string {
        return "¡Muuuu, muuuuuu!"
    }
}

//Ejercicio 3

function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// Ejercicio 4
const perro: Perro = new Perro("Coco");
const vaca: Vaca = new Vaca("Layla");
const gato: Gato = new Gato("Mishifu");

// Ejercicio 5
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);

// Ejercicio 6
enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

// Ejercicio 7

let variable: number | string;
variable = "Messi";
variable = 10;

// Ejercicio 8

interface Fila<T> {
    agregar(elemento: T): void;
    remover() : T | undefined;
}

class FilaCreada <T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}
