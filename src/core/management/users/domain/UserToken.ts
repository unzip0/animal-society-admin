export class UserToken
{
    constructor(
        private token: string,
        private expiresIn: number,
        private type: string,
    ){}

    getToken() {
        return this.token;
    }

    getExpiresIn() {
        return this.expiresIn;
    }

    getType() {
        return this.type;
    }
}