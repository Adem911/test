import * as React from 'react';
import { mount } from 'enzyme';
import App from './App';
import stores from '../stores';



describe('render App component', () => {
  it('renders 7 elements', () => {
    const wrapper = mount(<App contacts={stores.contacts} />);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2); 
    expect(wrapper.find('li').length).toEqual(4);   
  });
});