import React, { Component } from 'react';
import SmileyCreator from '../models/SmileyCreator';
import CONFIG from '../config/smileyConfig';
import FeatureDashboardContainer from './FeatureDashboardContainer';
import GenerateButton from '../components/GenerateButton';
import SmileyViewer from '../components/SmileyViewer';

export default class SmileyCreatorContainer extends Component {
    constructor(props) {
        super(props)
        this.smileyCreator = new SmileyCreator(CONFIG.DEFAULT_FEATURES)
        this.state = {
            smiley: '',
            features: this.smileyCreator.features
        }
    }

    componentWillMount() {
        this.createSmiley();
    }

    componentDidMount() {
        console.log('STATE', this.state)
    }

    createSmiley = () => {
        this.setState({
            smiley: this.smileyCreator.createSmiley()
        })
    }

    updateFeature = (featureIndex, updatedFeature) => {
        const updatedFeatures = this.state.features
        updatedFeatures[featureIndex] = updatedFeature;
        this.setState({
            features: updatedFeatures
        });
    }

    render() {
        return (
            <div>
                <h1 className="main-heading">Generate a smiley!</h1>
                <SmileyViewer
                    smiley={this.state.smiley}
                />
                <GenerateButton 
                    text="Generate New Smiley"
                    createSmiley={this.createSmiley}
                />
                <FeatureDashboardContainer 
                    features={this.state.features}
                    updateFeature={this.updateFeature}
                />
            </div>
        );
    }
}
