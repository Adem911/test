import * as React from 'react';
import { shallow } from 'enzyme';
import ImageList from './ImageList';
import ImageCard from '../imageCard/ImageCard';



describe('render App component', () => {
  it('renders 4 elements', () => {
    const wrapper = shallow(<ImageList images={""}/>);
    expect(wrapper.find(ImageCard).length).toEqual(0); 


  });
});