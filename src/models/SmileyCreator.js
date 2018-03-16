import Feature from './Feature';
import CONFIG from '../config/smileyConfig';

export default class SmileyCreator {
    constructor(features) {
        this.features = features.map(feature => new Feature(feature));
    }

    setFeatures(...features) {
        this.features = features;
    }

    getFeatures() {
        return this.features;
    }

    addFeature(feature) {
        this.features.push(feature);
    }

    keepAllowedFeatures() {
        this.features = this.features.filter(feature => feature.allowed);
    }

    findFeatureIndex(featureName) {
        const featureIndex = this.features.find(feature => feature.name === featureName);
        return featureIndex;
    }

    putFeaturesInOrder() {
        this.features = this.features.sort((featureA, featureB) => {
            let featureAIndex = CONFIG.FEATURE_ORDER.findIndex(element => element === featureA.name);
            let featureBIndex = CONFIG.FEATURE_ORDER.findIndex(element => element === featureB.name);
            return featureAIndex - featureBIndex;
        })
    }
    
    createSmiley() {
        this.keepAllowedFeatures();
        this.putFeaturesInOrder();
        const smiley = this.features.reduce((smiley, feature) => {
            let charsAllowed = feature.characters.filter(character => character.allowed)
            let randomCharForFeature = charsAllowed[Math.floor(Math.random() * charsAllowed.length)].name;  
            return smiley += randomCharForFeature;
        }, '');
        console.log('smiley', smiley);
        return smiley;
    }
}
