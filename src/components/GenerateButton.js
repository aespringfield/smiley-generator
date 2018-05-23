import React from 'react';

const GenerateButton = props => {

  const handleClick = (event) => {
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
