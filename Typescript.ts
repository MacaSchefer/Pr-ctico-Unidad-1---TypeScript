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