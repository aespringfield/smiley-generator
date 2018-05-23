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

  handleChange = event => {
    const input = event.target.value;
    this.props.setProbability(input)
  }

  updateFormState = (opts) => {
    this.setState({
      ...opts
    })
  }
  
  updateProbability = (input) => {
    this.updateFormState({probability: input})
    if (!input.match(/^(\d*\.?)?\d+$/)) { return } // return if not string matching floating point
    const probability = parseFloat(input);
    if (probability >= 0 && probability <= 1)  {
      this.props.setProbability(probability);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("updating form w props", nextProps)
    this.updateFormState(...nextProps.feature)
  }

  render() {
    return (
      <input 
        type="text"
        value={this.props.probability}
        onChange={(event) => this.handleChange(event)}
      />
    )
  }

}
