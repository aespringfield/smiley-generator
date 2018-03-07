import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';

const FeatureConfigOptions = props => {
    const toggleCharacterAllowed = props.updateCharacter('toggleCharacterAllowed');

    return (
        <div className="feature-config-options">
            <div>
                <h2 className="feature-config-options-header">
                    {props.feature.name}
                </h2>
                <ConfigButton text='Allow'/>
                <ConfigButton text='Require'/>
                <FeatureCharacterOptions 
                    characters={props.feature.characters}
                    toggleCharacterAllowed={toggleCharacterAllowed}
                />
            </div>
        </div>
    )
};

export default FeatureConfigOptions;