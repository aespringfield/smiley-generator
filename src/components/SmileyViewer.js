import React from 'react';

const SmileyViewer = props => (
    <div className="smiley-viewer">
        {props.smiley ? props.smiley : ''}
    </div>
);

export default SmileyViewer;
