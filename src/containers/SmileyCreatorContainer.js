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
            ...this.smileyCreator
        }
    }

    createSmiley = () => {
        console.log('createSmiley', this.smileyCreator.createSmiley)
        this.setState({
            smiley: this.smileyCreator.createSmiley()
        })
        console.log('New state', this.state)
    }

    componentWillMount() {
        this.createSmiley();
    }

    componentDidMount() {
        console.log('STATE', this.state)
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
                    toggleCharacterAllowed={this.toggleCharacterAllowed}
                    logStuff={this.logStuff}
                    updateFeatures={this.updateFeatures}
                />
            </div>
        );
    }

    // toggleCharacterAllowed = (featureIndex, characterIndex) => {
    //     // const character = this.smileyCreator[featureIndex][characterIndex];
    //     this.setState((prevState, props) => {
    //         return {smileyCreator: prevState.smileyCreator[featureIndex][characterIndex].toggleAllowed()}
    //     })
    // }

    updateFeatures = (updatedFeatures) => {
        this.setState({
            features: updatedFeatures
        })
        console.log('NEW STATE', this.state);
    }
    

    logStuff = (event) => {
        console.log('EVENT:', event);
        console.log('TARGET:', event.target);
        console.log('PROPS:', event.target.props);
    }

    // setFeatures(features) {
    //     this.setState(() => {
    //         this.smileyCreator.setFeatures(features);
    //     })
    // }
}
