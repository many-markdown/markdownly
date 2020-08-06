import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor.jsx';
import AppProvider from '../../providers/AppProvider';

describe('Editor component', () => {
  it('renders Editor', () => {
    const wrapper = shallow(<AppProvider><Editor /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
