import React from 'react';

const ConfigButton = props => (
    <div className="button-container">
        <button className="config-button">
            {props.text}
        </button>
    </div>
)

export default ConfigButton;