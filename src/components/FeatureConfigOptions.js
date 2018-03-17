import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';
import { capitalize } from './lib/TextHelper';

const FeatureConfigOptions = props => {
    const toggleCharacterAllowed = props.updateCharacter('toggleCharacterAllowed');
    // const toggleRequired = props.updateConfig();
    // const toggleAllowed = props.updateConfig('toggleAllowed');
    const requireButtonOpts = {
        text: 'Require',
        class: 'require-button',
        handleClick: props.updateConfig('toggleRequired')
    }
    const allowButtonOpts = {
        text: 'Allow',
        class: 'allow-button',
        handleClick: props.updateConfig('toggleAllowed')
    }

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
            </div>
        </div>
    )
};

export default FeatureConfigOptions;
