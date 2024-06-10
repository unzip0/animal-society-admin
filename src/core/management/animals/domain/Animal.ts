export class Animal 
{
    public constructor(
        private id: string,
        private name: string,
        private species_id: string,
        private race_id: string,
        private age: number,
        private available: boolean
    ){}

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }   

    getSpeciesId() {
        return this.species_id;
    }

    getRaceId() {
        return this.race_id;
    }

    getAge() {
        return this.age;
    }

    getAvailable() {
        return this.available;
    }
}