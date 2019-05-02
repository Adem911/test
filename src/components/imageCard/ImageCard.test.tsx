import * as React from 'react';
import { shallow } from 'enzyme';
import ImageCard from '../imageCard/ImageCard';


const minProps = {key: '', image: '', images: ''}
describe('render App component', () => {
  it('renders 4 elements', () => {
    const wrapper = shallow(<ImageCard {...minProps} />);
    expect(wrapper.find('img').length).toEqual(0); 
  });

});