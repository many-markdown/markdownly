import React from 'react';
import { shallow } from 'enzyme';
import SaveForm from './SaveForm.jsx';
import AppProvider from '../../providers/AppProvider';

describe('SaveForm component', () => {
  it('renders SaveForm', () => {
    const wrapper = shallow(<AppProvider><SaveForm /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
