import React from 'react';
import ReactDOM from 'react-dom';
import SmileyCreatorContainer from './SmileyCreatorContainer';
import { shallow } from 'enzyme';
import CONFIG from './smileyConfig';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmileyCreatorContainer />, div);
});

describe('SmileyCreatorContainer renders and updates features', () => {
    let instance;
    beforeEach(() => {
        const component = shallow(<SmileyCreatorContainer />);
        instance = component.instance();
    })
    it('mounts with default features', () => {
        const smileyCreator = instance.state.smileyCreator;
        expect(smileyCreator.features).toEqual(CONFIG.DEFAULT_FEATURES);
    });
    it('updates features using setFeatures', () => {
        
    })
})