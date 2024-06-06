export class AnimalRace
{
    constructor(
        private id: string,
        private name: string,
        private species_id: string,
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
}