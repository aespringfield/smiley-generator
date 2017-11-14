import React from 'react';
import ReactDOM from 'react-dom';
import FeatureDashboardContainer from './FeatureDashboardContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureDashboardContainer />, div);
});