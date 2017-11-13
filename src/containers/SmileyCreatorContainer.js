import React, { Component } from 'react';
import SmileyCreator from './SmileyCreator';
import CONFIG from './smileyConfig';

export default class SmileyCreatorContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState({
            smileyCreator: new SmileyCreator(CONFIG.DEFAULT_FEATURES)
        })
    }

    createSmiley() {
        this.setState({
            smiley: this.smileyCreator.createSmiley()
        })
    }

    setFeatures(features) {
        this.setState(() => {
            this.smileyCreator.setFeatures(features);
        })
    }

    render() {
        return <div></div>
    }
}