// import Feature from './Feature';
import CONFIG from '../config/smileyConfig';

export default class Smiley {
    constructor(features) {
        this.features = features;
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
        return this.features.reduce((smiley, feature) => {
            let charsAllowed = feature.characterOptions.filter(characterOption => characterOption.allowed)
            let randomCharForFeature = charsAllowed[Math.floor(Math.random() * charsAllowed.length)].character;  
            return smiley += randomCharForFeature;
        }, '');
    }
}