import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview.jsx';

import AppProvider from '../../providers/AppProvider';




describe('Preview component', () => {
  
  it('renders Preview', () => {
    const wrapper = shallow(<AppProvider><Preview /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
