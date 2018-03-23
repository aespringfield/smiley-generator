import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';
import { capitalize } from './lib/TextHelper';
import FeatureProbabilityInput from './FeatureProbabilityInput';

const FeatureConfigOptions = props => {
    const toggleCharacterAllowed = props.updateCharacter('toggleCharacterAllowed');
    // const toggleRequired = props.updateConfig();
    // const toggleAllowed = props.updateConfig('toggleAllowed');
    const requireButtonOpts = {
        text: 'Require',
        class: 'require-button',
        selectBy: 'required',
        feature: props.feature,
        handleClick: props.updateConfig('toggleRequired')
    }
    const allowButtonOpts = {
        text: 'Allow',
        class: 'allow-button',
        selectBy: 'allowed',
        feature: props.feature,
        handleClick: props.updateConfig('toggleAllowed')
    }

    const setProbability = props.updateConfig('setProbability');

    return (
        <div className="feature-config-options">
            <div>
                <h2 className="feature-config-options-header">
                    {capitalize(props.feature.name)}
                </h2>
                <div className="config-buttons-container">
                    <ConfigButton 
                        buttonOpts={allowButtonOpts}
                    />
                    <ConfigButton 
                        buttonOpts={requireButtonOpts}
                    />
                </div>
                <FeatureCharacterOptions 
                    characters={props.feature.characters}
                    toggleCharacterAllowed={toggleCharacterAllowed}
                />
                <FeatureProbabilityInput
                    setProbability = {setProbability}
                    probability = {props.feature.probability}
                />
            </div>
        </div>
    )
};

export default FeatureConfigOptions;
