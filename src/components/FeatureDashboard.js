import React from 'react';
import FeatureConfigOptions from './FeatureConfigOptions';

const FeatureDashboard = props => (
    <div className="feature-dashboard">
        <h1>Generate a smiley!</h1>
        {console.log('feature dashboard props',props)}
        {props.features.map((feature, index) => 
            <FeatureConfigOptions key={index} feature={feature} />
        )}
    </div>
);

export default FeatureDashboard;