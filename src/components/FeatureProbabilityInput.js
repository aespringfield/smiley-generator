import React from 'react';

const FeatureProbabilityInput = props => {
  const handleChange = event => {
    const input = event.target.value;
    props.updateProbability(input)
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
