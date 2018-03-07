import React, { Component } from 'react';
import FeatureConfigOptions from './../components/FeatureConfigOptions';
// import FeatureDashboard from '../models/FeatureDashboard';
// import CONFIG from '../config/smileyConfig';

export default class FeatureDashboardContainer extends Component {

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
                console.log('characterIndex', characterIndex);
                return () => {
                    this.props.features[featureIndex][callback].call(this, characterIndex);
                    this.props.updateFeatures(this.props.features);
                }
            }
        }
    }

    updateConfig = (featureIndex) => {
        return (callback) => {
            return () => {
                this.props.features[featureIndex][callback].call(this);
                this.props.updateFeatures(this.props.features);
            }
        }
    }


    render() {
        console.log('Props in featuredash', this.props)
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
