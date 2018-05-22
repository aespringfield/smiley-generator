import React from 'react';
import classNames from 'classnames';

// allow is kind of working but it's probably on both config buttons--need to change. Also doesn't seem to work so well when you try to toggle it back to true.
const ConfigButton = props => {
    const buttonClasses = classNames(
        'character-button',
        props.class,
        {'selected': props.selected}
    )

    const handleClick = (event) => {
        props.targleConfig(props.feature)
    }

    return (
        <div className="button-container">
            <button 
                className={buttonClasses}
                onClick={handleClick}
            >
                {props.text}
            </button>
        </div>
    )
}

export default ConfigButton;
