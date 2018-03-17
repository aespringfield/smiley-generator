import React from 'react';

const GenerateButton = props => {

  const handleClick = (event) => {
    console.log('I\'ve been clicked!');
    props.createSmiley();
  }
  return (
    <div className="generate-button-container">
      <button 
          className="generate-button"
          onClick={(event) => handleClick(event)}
      >
          {props.text}
      </button>
    </div>
  )
}

export default GenerateButton;
