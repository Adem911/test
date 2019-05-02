import * as React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';
import stores from '../../stores';



describe('<SearchBar />', () => {
  it('renders 3 elements', () => {
    const wrapper = mount(<SearchBar images={stores.images}/>);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1); 
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);

  });

  it('hide text when clicked', () => {
    const wrapper = mount(<SearchBar images={stores.images}/>);
    
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h2').length).toEqual(0);

  });
});