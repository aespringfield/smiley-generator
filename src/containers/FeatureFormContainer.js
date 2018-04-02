import React, { Component } from 'react';
import FeatureProbabilityInput from '../components/FeatureProbabilityInput'

export default class FeatureFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.feature
    }
    console.log('form state:', this.state)
  }

  updateFormState = (opts) => {
    this.setState({
      ...opts
    })
  }
  
  updateProbability = (input) => {
    this.updateFormState({probability: input})
    const floatMatcher = /^(\d*\.?)?\d+$/;
    if (!input.match(floatMatcher)) { return }
    const probability = parseFloat(input);
    if (probability >= 0 && probability <= 1)  {
      this.props.setProbability(probability);
    }
  }

  render() {
    return (
      <FeatureProbabilityInput
        probability={this.props.probability}
        updateProbability={this.updateProbability}
      />
    )
  }

}
