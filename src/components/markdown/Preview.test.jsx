import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview.jsx';

describe('Preview component', () => {
  it('renders Preview', () => {
    const wrapper = shallow(<Preview markdown={'# hello there'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
