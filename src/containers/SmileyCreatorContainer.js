import React, { Component } from 'react';
import SmileyCreator from '../models/SmileyCreator';
import CONFIG from '../config/smileyConfig';
import FeatureDashboardContainer from './FeatureDashboardContainer';

export default class SmileyCreatorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            smileyCreator: new SmileyCreator(CONFIG.DEFAULT_FEATURES)
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         smileyCreator: new SmileyCreator(CONFIG.DEFAULT_FEATURES)
    //     })
    // }

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
        return (
            <div>
                <FeatureDashboardContainer 
                    features={this.state.smileyCreator.features}
                    setFeatures={this.setFeatures}
                />
            </div>
        );
    }
}
