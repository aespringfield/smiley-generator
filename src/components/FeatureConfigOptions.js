import React from 'react';
import FeatureCharacterOptions from './FeatureCharacterOptions';
import ConfigButton from './ConfigButton';
import { capitalize } from './lib/TextHelper';
import FeatureProbabilityInput from './FeatureProbabilityInput';
import FeatureFormContainer from '../containers/FeatureFormContainer';

const FeatureConfigOptions = props => {
    const callFeatureAction = (action) => {
        return () => {
            props.feature[action].call(props.feature);
            props.updateFeature(props.featureIndex, props.feature);
        }
    }

    const callCharacterAction = (action) => {
        return (characterIndex) => {
            props.feature[action].call(props.feature, characterIndex);
            props.updateFeature(props.featureIndex, props.feature);
        }
    }

    const toggleRequired = callFeatureAction('toggleRequired');
    const toggleAllowed = callFeatureAction('toggleAllowed');
    const toggleCharacterAllowed = callCharacterAction('toggleCharacterAllowed');

    const setProbability = (probability) => {
        props.feature.setProbability(probability);
        props.updateFeature(props.featureIndex, props.feature);
    }

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
                        toggleConfig={toggleRequired}
                    />
                    <ConfigButton
                        text='Allow'
                        class='allow-button'
                        selected={props.feature.allowed}
                        toggleConfig={toggleAllowed}
                    />
                </div>
                <FeatureCharacterOptions 
                    characters={props.feature.characters}
                    toggleCharacterAllowed={toggleCharacterAllowed}
                    featureIndex={props.featureIndex}
                    updateFeature={props.updateFeature}
                />
                <FeatureFormContainer
                    setProbability={setProbability}
                    feature={props.feature}
                    updateFeature={props.updateFeature}
                />
            </div>
        </div>
    )
};

export default FeatureConfigOptions;
