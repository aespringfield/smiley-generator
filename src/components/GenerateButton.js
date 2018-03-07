import React from 'react';

const GenerateButton = props => {

  const handleClick = (event) => {
    console.log('I\'ve been clicked!');
    props.createSmiley();
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

export default GenerateButton;
