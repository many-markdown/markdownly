import React from 'react';
import { shallow } from 'enzyme';
import AppProvider from '../../providers/AppProvider';
import LandingPage from './LandingPage.jsx';

describe('Landing page component', () => {
  it('renders landing page', () => {
    const wrapper = shallow(<AppProvider><LandingPage /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
