export default class Feature {
    constructor(name, allowed, required, possibleCharacters) {
        this.name = name;
        this.allowed = allowed;
        this.required = required;
        this.possibleCharacters = possibleCharacters;
    }
}