import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';
import { capitalize } from './lib/TextHelper';
import FeatureProbabilityInput from './FeatureProbabilityInput';
import FeatureFormContainer from '../containers/FeatureFormContainer';

const FeatureConfigOptions = props => {
    console.log('feature', props.feature)
    const toggleCharacterAllowed = props.updateCharacter('toggleCharacterAllowed');
    // const toggleRequired = props.updateConfig();
    // const toggleAllowed = props.updateConfig('toggleAllowed');
    const requireButtonOpts = {
        text: 'Require',
        class: 'require-button',
        selected: props.feature['required'],
        handleClick: props.updateConfig('toggleRequired')
    }
    const allowButtonOpts = {
        text: 'Allow',
        class: 'allow-button',
        selected: props.feature['allowed'],
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
                        {...allowButtonOpts}
                    />
                    <ConfigButton 
                        {...requireButtonOpts}
                    />
                </div>
                <FeatureCharacterOptions 
                    characters={props.feature.characters}
                    toggleCharacterAllowed={toggleCharacterAllowed}
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
