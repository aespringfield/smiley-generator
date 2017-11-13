export default class Feature {
    constructor(name, allowed, required, charsAllowed) {
        this.name = name;
        this.allowed = allowed;
        this.required = required;
        this.charsAllowed = charsAllowed;
    }
}