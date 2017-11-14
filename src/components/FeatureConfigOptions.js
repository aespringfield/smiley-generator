import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';

const FeatureConfigOptions = props => (
    <div className="feature-config-options">
            <div>
                <h2 className="feature-config-options-header">
                    {props.feature.name}
                </h2>
                {<FeatureCharacterOptions characterOptions={props.feature.characterOptions}/>}
            </div>
    </div>
);

export default FeatureConfigOptions;