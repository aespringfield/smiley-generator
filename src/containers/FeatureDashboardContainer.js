import React, { Component } from 'react';
import FeatureConfigOptions from '../components/FeatureConfigOptions';

export default class FeatureDashboardContainer extends Component {
    updateCharacter = (featureIndex) => {
        return (callback) => {
            return (characterIndex) => {
                return () => {
                    console.log('in', callback, 'trying to update', this.props.features[featureIndex].name, '\n this is', this)
                    this.props.features[featureIndex][callback].call(this.props.features[featureIndex], characterIndex);
                    this.props.updateFeatures(this.props.features);
                }
            }
        }
    }

    updateConfig = (featureIndex) => {
        return (callback) => {
            return (value) => {
                console.log('in', callback, 'trying to update', this.props.features[featureIndex].name, '\n this is', this.props.features[featureIndex])
                this.props.features[featureIndex][callback].call(this.props.features[featureIndex], value);
                this.props.updateFeatures(this.props.features);
            }
        }
    }
    
    // submitState = (input, featureIndex) => {
    //     const floatMatcher = /^(\d*\.?)?\d+$/; // is a string matching a floating point number
    //     if (!input.match(floatMatcher)) { return }
    //     const probability = parseFloat(input);
    //     if (probability >= 0 && probability <= 1)  {
    //       updateConfig(featureIndex)('setProbability')
    //     }
    // }

    // const handleChange = event => {
    //     console.log('Ih\n handleChange, attempting to set probability to', event.target.value);
    //     const floatMatcher = /^(\d*\.?)?\d+$/;
    //     if (!event.target.value.match(floatMatcher)) { return }
    //     console.log('match float is true')
    //     const probability = parseFloat(event.target.value);
    //     if (probability >= 0 && probability <= 1)  {
    //       props.setProbability(probability);
    //     }
    //   }
    

    render() {
        return(
            <div className="feature-dashboard">
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
