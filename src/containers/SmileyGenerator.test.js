import React from 'react';
import ReactDOM from 'react-dom';
import SmileyGenerator from './SmileyGenerator';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmileyGenerator />, div);
});