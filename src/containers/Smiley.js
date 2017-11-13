import { Feature } from './Feature';

export default class Smiley {
    constructor(...features) {
        this.hair = features.find(feature => feature.name === 'hair');
        this.eyes = features.find(feature => feature.name === 'eyes');
        this.nose = features.find(feature => feature.name === 'nose');
        this.mustache = features.find(feature => feature.name === 'mustache');
        this.mouth = features.find(feature => feature.name === 'mouth');
    }
}