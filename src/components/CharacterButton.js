import React from 'react';

const CharacterButton = props => (
    <button className="character-button">
        {props.character}
    </button>
);

export default CharacterButton;