import React from 'react';
import classNames from 'classnames';

const CharacterButton = props => {
    const character = props.character;
    const buttonClasses = classNames(
        'character-button',
        {'selected': character.allowed}
    )

    // const targleAllowed = (features, featureIndex, characterIndex) => {
    //     const feature = features[featureIndex];
    //     feature.toggleCharacterAllowed(characterIndex);
    // }

    // Below are 3 slightly different implentations (two commented out in handleClick). 
    // Both are a little too chunky, maybe, in terms of what the user of the character button has to do?
    const treegleAllowed = () => {
        props.features[props.featureIndex].toggleCharacterAllowed(props.characterIndex);
        props.updateFeatures(props.features);
    }

    const handleClick = (event) => {
        // props.toggleAllowed();
        // props.targleAllowed(props.characterIndex, props.featureIndex);
        treegleAllowed();
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
