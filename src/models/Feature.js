export default class Feature {
    constructor(name, allowed, required, characterOptions) {
        this.name = name;
        this.allowed = allowed;
        this.required = required;
        this.characterOptions = characterOptions;
    }
}