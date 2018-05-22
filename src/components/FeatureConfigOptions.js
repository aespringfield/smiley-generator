import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';
import { capitalize } from './lib/TextHelper';
import FeatureProbabilityInput from './FeatureProbabilityInput';
import FeatureFormContainer from '../containers/FeatureFormContainer';
// import { FeaturesContext } from '../containers/FeatureDashboardContainer';

const FeatureConfigOptions = props => {
    console.log('feature', props.feature)
    const toggleCharacterAllowed = props.updateCharacter('toggleCharacterAllowed');
    // const toggleRequired = props.updateConfig();
    // const toggleAllowed = props.updateConfig('toggleAllowed');

    const targleConfig = ((features, updater) => {
        return (action) => {
            return (feature) => {
                feature[action].call();
                updater(features);
            }
        }
    })(props.features, props.updateFeatures)
    
    const setProbability = props.updateConfig('setProbability');

    return (
        <div className="feature-config-options">
            <div>
                <h2 className="feature-config-options-header">
                    {capitalize(props.feature.name)}
                </h2>
                <div className="config-buttons-container">
                    <ConfigButton
                        text='Require'
                        class='require-button'
                        selected={props.feature.required}
                        feature={props.feature}
                        targleConfig={targleConfig('toggleRequired')}
                    />
                    <ConfigButton
                        text='Allow'
                        class='allow-button'
                        selected={props.feature.allowed}
                        feature={props.feature}
                        targleConfig={targleConfig('toggleAllowed')}
                    />
                </div>
                <FeatureCharacterOptions 
                    characters={props.feature.characters}
                    toggleCharacterAllowed={toggleCharacterAllowed}
                    featureIndex={props.featureIndex}
                />
                <FeatureFormContainer
                    setProbability={setProbability}
                    feature={props.feature}
                />
            </div>
        </div>
    )
};

export default FeatureConfigOptions;
