export default class Character {
    constructor(name, allowed) {
        this.name = name;
        this.allowed = allowed;
    }

    toggleAllowed() {
        this.allowed = !this.allowed;
    }
}