import React from 'react';
import classNames from 'classnames';

const CharacterButton = props => {
    const character = props.character;
    const buttonClasses = classNames(
        'character-button',
        {'selected': character.allowed}
    )

    const handleClick = (event) => {
        props.toggleAllowed();
    }

    return (
        <div className="button-container">
            <button 
                className={buttonClasses}
                onClick={handleClick}
            >
                {character.name}
            </button>
        </div>
    );
};

export default CharacterButton;
