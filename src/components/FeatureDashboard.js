import React from 'react';
import FeatureConfigOptions from './FeatureConfigOptions';

const FeatureDashboard = props => (
    <div className="feature-dashboard">
        Generate a smiley!
        {console.log('feature dashboard props',props)}
        {props.features.map((feature, index) => 
            <FeatureConfigOptions key={index} feature={feature} />
        )}
    </div>
);

export default FeatureDashboard;