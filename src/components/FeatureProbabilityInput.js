import React from 'react';

const FeatureProbabilityInput = props => {
  const handleChange = event => {
    props.setProbability(event.target.value);
  }

  return (
    <input 
      type="text"
      value={props.probability}
      onChange={(event) => handleChange(event)}
    />
  )
}

export default FeatureProbabilityInput;
