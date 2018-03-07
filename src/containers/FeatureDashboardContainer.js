import React, { Component } from 'react';
import FeatureConfigOptions from './../components/FeatureConfigOptions';
// import FeatureDashboard from '../models/FeatureDashboard';
// import CONFIG from '../config/smileyConfig';

export default class FeatureDashboardContainer extends Component {
    constructor(props) {
        super(props) //is super & passing in props to constructor necessary?
    }

    // updateFeature = (featureIndex, callback) => {
    //     const updatedFeatures = this.props.features[featureIndex].callback();
    //     this.props.updateFeatures(updatedFeatures);
    // }

    // updateAllowedCharacters(featureIndex) {
    //     return (characterIndex) => {
    //         updateFeature(featureIndex, toggleCharacterAllowed);
    //     }
    // }

    // updateCharacter() {

    // }

    updateCharacter = (featureIndex) => {
        console.log('Feature index', featureIndex)
        return (callback) => {
            return (characterIndex) => {
                console.log('characterIndex', this.characterIndex);
                return () => {
                    const updatedFeatures = this.props.features[featureIndex][callback].call(characterIndex);
                    this.props.updateFeatures(updatedFeatures);
                }
            }
        }
    }

    updateConfig = (featureIndex) => {
        return (callback) => {
            return () => {
                const updatedFeatures = this.props.features[featureIndex][callback].call();
                this.props.updateFeatures(updatedFeatures);
            }
        }
    }


    render() {
        return (
            <div className="feature-dashboard">
                <h1>Generate a smiley!</h1>
                {this.props.features.map((feature, index) => 
                    <FeatureConfigOptions 
                        key={index} 
                        feature={feature}
                        // toggleCharacterAllowed={this.props.toggleCharacterAllowed}
                        // logStuff={this.props.logStuff}
                        updateConfig={this.updateConfig(index)}
                        updateCharacter={this.updateCharacter(index)}
                    />
                )}
            </div>
        );
    }
}