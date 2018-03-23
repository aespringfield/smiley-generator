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
        return this.features.filter(feature => feature.allowed);
    }

    findFeatureIndex(featureName) {
        const featureIndex = this.features.find(feature => feature.name === featureName);
        return featureIndex;
    }

    putFeaturesInOrder() {
        return this.features.sort((featureA, featureB) => {
            let featureAIndex = CONFIG.FEATURE_ORDER.findIndex(element => element === featureA.name);
            let featureBIndex = CONFIG.FEATURE_ORDER.findIndex(element => element === featureB.name);
            return featureAIndex - featureBIndex;
        });
    }
    
    createSmiley() {
        return this.putFeaturesInOrder().reduce((smiley, feature) => {
            if (!feature.allowed || !feature.decideWhetherToUse()) { return smiley }
            return smiley += feature.pickCharacter();
        }, '')
    }
}
