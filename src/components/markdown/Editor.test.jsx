import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor.jsx';

describe('Editor component', () => {
  it('renders Editor', () => {
    const wrapper = shallow(<Editor markdown={'# hello there'} updateMarkdown={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

