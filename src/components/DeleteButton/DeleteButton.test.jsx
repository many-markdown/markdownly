import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from './DeleteButton.jsx';
import AppProvider from '../../providers/AppProvider';

describe('DeleteButton component', () => {
  it('renders DeleteButton', () => {
    const wrapper = shallow(<AppProvider><DeleteButton id={1}/></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
