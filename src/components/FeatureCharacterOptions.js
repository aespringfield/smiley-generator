import React from 'react';
import CharacterButton from './CharacterButton';
import { FeaturesContext } from '../containers/FeatureDashboardContainer';

const FeatureCharacters = props => {
    // const doCharacterActionOnFeechurs = (action, features, callback) => {
    //     return (characterIndex, featureIndex) => {
    //         const feature = features[featureIndex];
    //         feature[action].call(feature, characterIndex);
    //         callback()
    //     }
    // }

    // const updateFeechur = (characterIndex, action, features, featureIndex, updateFeatures) => {
    //     const feature = features[featureIndex];
    //     feature[action].call(feature, characterIndex);
    //     updateFeatures();
    // }

    const targleAllowed = (features, updateFeatures) => {
        return (characterIndex, featureIndex) => {
            const feature = features[featureIndex];
            feature.toggleCharacterAllowed(characterIndex);
            updateFeatures(features);
        }
    }

    return (
            <FeaturesContext.Consumer>
                {({features, updateFeatures}) => (
                    <div className="feature-character-options">
                        {props.characters.map((character, index) => {
                            return (
                                <CharacterButton 
                                    key={character.shortid} 
                                    character={character}
                                    characterIndex={index}
                                    features={features}
                                    featureIndex={props.featureIndex}
                                    toggleAllowed={props.toggleCharacterAllowed(index)}
                                    updateFeatures={updateFeatures}
                                    targleAllowed={targleAllowed(features, updateFeatures)}
                                />
                            )
                        })}
                    </div>
                )}
            </FeaturesContext.Consumer>
    );
}

export default FeatureCharacters;
