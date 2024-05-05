{

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;


        // ! parameter properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('German Shepard', 'dog', 'Ghew ghew')
    const cat = new Animal('Persian Vai', 'cat', 'Mew Mew')


}