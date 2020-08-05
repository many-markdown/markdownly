const { setMarkdown, SET_MARKDOWN } = require('./markdownActions');

describe('actions', () => {
  it('it creates an action that updates markdown', () => {
    const action = setMarkdown('sample markdown');
    expect(action).toEqual({
      type: SET_MARKDOWN,
      payload: 'sample markdown'
    });
  });
});
