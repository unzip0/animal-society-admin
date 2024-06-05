export class User
{
    constructor(
        private id: string,
        private association_id: string | null,
        private name: string,
        private first_last_name: string,
        private second_last_name: string,
        private email: string,
        private role: string,
        private active: boolean,
    ){}

    getId() {
        return this.id;
    }

    getAssociationId() {
        return this.association_id;
    }

    getName() {
        return this.name;
    }

    getFirstLastName() {
        return this.first_last_name;
    }

    getSecondLastName() {
        return this.second_last_name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    getActive() {
        return this.active;
    }
}