import React, { Component } from 'react';
import SmileyCreator from '../models/SmileyCreator';
import CONFIG from '../config/smileyConfig';
import FeatureDashboardContainer from './FeatureDashboardContainer';
import ConfigButton from '../components/ConfigButton';
import SmileyViewer from '../components/SmileyViewer';

export default class SmileyCreatorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...new SmileyCreator(CONFIG.DEFAULT_FEATURES),
        }
    }

    componentDidMount() {
        console.log('STATE', this.state)
    }

    render() {
        return (
            <div>
                <FeatureDashboardContainer 
                    features={this.state.features}
                    toggleCharacterAllowed={this.toggleCharacterAllowed}
                    logStuff={this.logStuff}
                    updateFeatures={this.updateFeatures}
                />
                <ConfigButton text="Generate New Smiley"/>
                <SmileyViewer />
            </div>
        );
    }

    // createSmiley() {
    //     this.setState({
    //         smiley: this.smileyCreator.createSmiley()
    //     })
    // }

    // toggleCharacterAllowed = (featureIndex, characterIndex) => {
    //     // const character = this.smileyCreator[featureIndex][characterIndex];
    //     this.setState((prevState, props) => {
    //         return {smileyCreator: prevState.smileyCreator[featureIndex][characterIndex].toggleAllowed()}
    //     })
    // }

    updateFeatures(updatedFeatures) {
        this.setState({
            features: updatedFeatures
        })
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