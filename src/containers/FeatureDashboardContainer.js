import React, { Component } from 'react';
import FeatureDashboard from '../components/FeatureDashboard';

export default class FeatureDashboardContainer extends Component {
    render() {
        console.log('props.features', this.props.features);
        return (
            <div>
                <FeatureDashboard features={this.props.features}/>
            </div>
        );
    }
}