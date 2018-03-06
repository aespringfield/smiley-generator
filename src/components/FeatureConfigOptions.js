import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import AllowButton from './AllowButton';
import RequireButton from './RequireButton';
import { capitalize } from './lib/TextHelper';


const FeatureConfigOptions = props => (
    <div className="feature-config-options">
            <div>
                <h2 className="feature-config-options-header">
                    {capitalize(props.feature.name)}
                </h2>
                <AllowButton />
                <RequireButton />
                <FeatureCharacterOptions characterOptions={props.feature.characterOptions}/>
            </div>
    </div>
);

export default FeatureConfigOptions;
