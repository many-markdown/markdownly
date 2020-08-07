import React from 'react';
import { shallow } from 'enzyme';
import FileSearcher from './FileSearcher.jsx';

import AppProvider from '../../providers/AppProvider';

describe('FileSearcher component', () => {
  it('renders FileSearcher', () => {
    const wrapper = shallow(<AppProvider><FileSearcher /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});

