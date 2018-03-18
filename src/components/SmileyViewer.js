import React from 'react';

const SmileyViewer = props => (
    <div className="smiley-viewer-container">
        <div className="smiley-viewer">
            {props.smiley ? props.smiley : ''}
        </div>
    </div>
);

export default SmileyViewer;
