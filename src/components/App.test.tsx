import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SearchBar from './searchBar/SearchBar';
import ImageList from './imageList/ImageList';
import stores from '../stores/index';

const listLength = stores.images.images.length;

describe('render App component', () => {
  it('renders 3 elements', () => {
    const wrapper = shallow(shallow(<App images={""} />).get(0));
    expect(wrapper.find('button').first().length).toEqual(1);
    expect(wrapper.find(SearchBar).length).toEqual(1);
    expect(wrapper.find(ImageList).length).toEqual(1);

  });


  it('hide text when clicked', () => {
    const wrapper = shallow(shallow(<App images={""} />).get(0));
    
    wrapper.find('button').simulate('click');
    expect(wrapper.find(ImageList).children().length).toEqual(listLength);

  });
  
});