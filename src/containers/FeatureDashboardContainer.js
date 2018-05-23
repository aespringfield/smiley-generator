import React, { Component } from 'react';
import FeatureConfigOptions from '../components/FeatureConfigOptions';

const FeatureDashboardContainer = (props) => {
    return (
        <div className="feature-dashboard">
            {props.features.map((feature, index) =>
                <FeatureConfigOptions 
                    key={feature.shortid} 
                    feature={feature}
                    featureIndex={index}
                    updateFeature={props.updateFeature}
                />
            )}
        </div>
    );
}

export default FeatureDashboardContainer;
