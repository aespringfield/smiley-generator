import React from 'react';

// allow is kind of working but it's probably on both config buttons--need to change. Also doesn't seem to work so well when you try to toggle it back to true.
const ConfigButton = props => {
    const handleClick = (event) => {
        props.toggleAllowed();
    }
    return (
        <div className="button-container">
            <button 
                className="config-button"
                onClick={(event) => handleClick(event)}
            >
                {props.text}
            </button>
        </div>
    )
}

export default ConfigButton;
