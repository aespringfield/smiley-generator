import shortid from 'shortid';

export default class Character {
    constructor(name, allowed) {
        this.name = name;
        this.allowed = allowed;
        this.shortid = shortid.generate();
    }

    toggleAllowed() {
        this.allowed = !this.allowed;
    }
}
