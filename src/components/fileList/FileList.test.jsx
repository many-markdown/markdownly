import React from 'react';
import { shallow } from 'enzyme';
import FileList from './FileList.jsx';

import AppProvider from '../../providers/AppProvider';

describe('FileList component', () => {
  it('renders FileList', () => {
    const wrapper = shallow(<AppProvider><FileList /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});

