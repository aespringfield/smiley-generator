import Character from './Character';
import shortid from 'shortid';

export default class Feature extends Character {
    constructor({name, allowed, required, characters}) {
        super(name, allowed)
        this.required = required;
        this.probability = this.required ? 1 : 0.5;
        this.characters = characters.map(character => new Character(character.name, character.allowed));
        this.shortid = shortid.generate();
    }

    findCharacterIndex(characterName) {
        return this.characters.find(character => character.name === characterName);
    }

    setProbability(probability) {
        console.log('in setProbability trying to set probability for', this.name, 'to', probability)
        if (probability >= 0 && probability <= 1) {
            this.probability = probability;
        }

        this.required = this.probability === 1;
    }

    toggleCharacterAllowed = (characterIndex) => {
        this.characters[characterIndex].toggleAllowed();
        return this;
    }

    toggleRequired = () => {
        this.required = !this.required;
        if (this.required) {
            this.probability = 1
        }
    }

    toggleAllowed = () => {
        this.allowed = !this.allowed;
    }

    decideWhetherToUse = () => {
        return this.required || Math.random() < this.probability ? true : false
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
