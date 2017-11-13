import React from 'react';
import ReactDOM from 'react-dom';
import SmileyGenerator from './SmileyGenerator';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmileyGenerator />, div);
});

it('should return five', () => {
    const component = shallow(<SmileyGenerator />);
    const instance = component.instance();
    
    // spy on the instance instead of the component
    spyOn(instance, 'returnFive').and.callThrough();

    expect(instance.returnFive()).toEqual(5);
    expect(instance.returnFive).toHaveBeenCalled();
});

it('should show the smiley state property to be an empty string', () => {
    const component = shallow(<SmileyGenerator />);
    const instance = component.instance();
    expect(instance.state.smiley).toEqual('');
  });