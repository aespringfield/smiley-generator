import Character from './Character';

export default class Feature extends Character {
    constructor({name, allowed, required, characters}) {
        super(name, allowed)
        this.required = required;
        this.characters = characters.map(character => new Character(character.name, character.allowed));
    }

    findCharacterIndex(characterName) {
        return this.characters.find(character => character.name === characterName);
    }

    toggleCharacterAllowed = (characterIndex) => {
        this.characters[characterIndex].toggleAllowed();
        return this;
    }

    toggleRequired = () => {
        this.required = !this.required;
    }

    toggleAllowed = () => {
        this.allowed = !this.allowed;
    }

    pickCharacter = () => {
        const charsAllowed = this.characters.filter(character => character.allowed);
        return charsAllowed[Math.floor(Math.random() * charsAllowed.length)].name;
    }

    // (smiley, feature) => {
    //     let charsAllowed = feature.characters.filter(character => character.allowed)
    //     let randomCharForFeature = charsAllowed[Math.floor(Math.random() * charsAllowed.length)].name;  
    //     return smiley += randomCharForFeature;
}
