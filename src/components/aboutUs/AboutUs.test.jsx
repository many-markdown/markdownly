import React from 'react';
import { shallow } from 'enzyme';

import AppProvider from '../../providers/AppProvider';
import AboutUs from './AboutUs.jsx';

describe('About us component', () => {
  it('renders About us', () => {
    const wrapper = shallow(<AppProvider><AboutUs /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
