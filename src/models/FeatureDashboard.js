export default class FeatureDashboard {
    constructor(features) {
        this.features = features.map(feature => new Feature(feature));
    }
}