import React from 'react';
import CharacterButton from './CharacterButton';

const FeatureCharacters = props => {
    const toggleAllowed = (characterIndex) => {
        return () => props.toggleCharacterAllowed(characterIndex)
    }

    return (
        <div className="feature-character-options">
            {props.characters.map((character, index) => {
                return (
                    <CharacterButton 
                        key={character.shortid} 
                        character={character}
                        toggleAllowed={toggleAllowed(index)}
                    />
                )
            })}
        </div>
    )
}

export default FeatureCharacters;
