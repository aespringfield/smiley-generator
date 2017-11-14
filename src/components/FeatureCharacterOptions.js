import React from 'react';
import CharacterButton from './CharacterButton';

const FeatureCharacterOptions = props => (
    <div className="feature-character-options">
        {props.characterOptions.map(({character, allowed}, index) =>
            <CharacterButton key={index} character={character}/>
        )}
    </div>
);

export default FeatureCharacterOptions;