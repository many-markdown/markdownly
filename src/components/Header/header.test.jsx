import React from 'react';
import { shallow } from 'enzyme';
import AppProvider from '../../providers/AppProvider';
import Header from './Header.jsx';

describe('SaveForm component', () => {
  it('renders SaveForm', () => {
    const wrapper = shallow(<AppProvider><Header /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
