import React from 'react';
import ReactDOM from 'react-dom';
import FeatureDashboard from './FeatureDashboard';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureDashboard />, div);
});