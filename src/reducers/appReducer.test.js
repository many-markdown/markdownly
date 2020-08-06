const { setMarkdown } = require('../actions/markdownActions');
import reducer from './appReducer';

describe('app reducer', () => {
  it('handles the SET_MARKDOWN action', () => {
    const state = {
      markdown: ''
    };
    const action = setMarkdown('the action');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      markdown: 'the action'
    });
    
  });
});
