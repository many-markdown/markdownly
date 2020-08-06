const { setMarkdown } = require('../actions/markdownActions');
import reducer from './appReducer';

describe('app reducer', () => {
  it('handles the SET_MARKDOWN action', () => {
    const state = {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: '# hello there'
      }]
    };
    const action = setMarkdown('the action');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: 'the action'
      }]
    });
    
  });
});
