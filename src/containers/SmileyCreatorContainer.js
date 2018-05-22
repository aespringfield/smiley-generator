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

    createSmiley = () => {
        this.setState({
            smiley: this.smileyCreator.createSmiley()
        })
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
                    logStuff={this.logStuff}
                    updateFeatures={this.updateFeatures}
                />
            </div>
        );
    }

    updateFeatures = (updatedFeatures) => {
        this.setState({
            features: updatedFeatures
        })
        console.log('NEW STATE', this.state);
    }
    
    // updateCharacter = (featureIndex) => {
    //     const features = this.state.features;
    //     return (callback) => {
    //         return (characterIndex) => {
    //             return () => {
    //                 console.log('in', callback, 'trying to update', features[featureIndex].name, '\n this is', this)
    //                 features[featureIndex][callback].call(features[featureIndex], characterIndex);
    //                 updateFeatures(features);
    //             }
    //         }
    //     }
    // }

    // updateConfig = (featureIndex) => {
    //     const features = this.state.features;
    //     return (callback) => {
    //         return (value) => {
    //             console.log('in', callback, 'trying to update', features[featureIndex].name, '\n this is', features[featureIndex])
    //             features[featureIndex][callback].call(features[featureIndex], value);
    //             updateFeatures(features);
    //         }
    //     }
    // }
 

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
