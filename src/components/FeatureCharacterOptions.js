import React from 'react';
import CharacterButton from './CharacterButton';

const FeatureCharacters = props => (
    <div className="feature-character-options">
        {props.characters.map((character, index) =>
            <CharacterButton 
                key={index} 
                character={character}
                toggleAllowed={props.toggleCharacterAllowed(index)}
            />
        )}
    </div>
);

export default FeatureCharacters;