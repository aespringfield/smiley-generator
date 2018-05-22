import React, { Component } from 'react';
import FeatureConfigOptions from '../components/FeatureConfigOptions';

export const FeaturesContext = React.createContext({
    features: [],
    updateFeatures: () => {}
});

export default class FeatureDashboardContainer extends Component {
    constructor(props) {
        super(props)
        this.featuresContext = {
            features: props.features,
            updateFeatures: props.updateFeatures
        }
    }

    updateCharacter = (featureIndex) => {
        return (callback) => {
            return (characterIndex) => {
                return () => {
                    this.props.features[featureIndex][callback].call(this.props.features[featureIndex], characterIndex);
                    this.props.updateFeatures(this.props.features);
                }
            }
        }
    }

    updateConfig = (featureIndex) => {
        return (callback) => {
            return (value) => {
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
                {console.log('feature dashboard props', this.props)}
                <FeaturesContext.Provider value={this.featuresContext}>
                    {this.props.features.map((feature, index) =>
                        <FeatureConfigOptions 
                            key={feature.shortid} 
                            feature={feature}
                            features={this.props.features}
                            featureIndex={index}
                            // toggleCharacterAllowed={this.props.toggleCharacterAllowed}
                            // logStuff={this.props.logStuff}
                            updateConfig={this.updateConfig(index)}
                            updateCharacter={this.updateCharacter(index)}
                            updateFeatures={this.props.updateFeatures}
                        />
                    )}
                </FeaturesContext.Provider>
            </div>
        );
    }
}
