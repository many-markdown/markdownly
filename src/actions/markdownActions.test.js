const { setMarkdown, SET_MARKDOWN, newFile, NEW_FILE } = require('./markdownActions');

describe('actions', () => {
  it('it creates an action that updates markdown', () => {
    const action = setMarkdown('sample markdown');
    expect(action).toEqual({
      type: SET_MARKDOWN,
      payload: 'sample markdown'
    });
  });

  it('it creates an action that creates a new file', () => {

    const fileName = 'file 1';
    const action = newFile(fileName);
    expect(action).toEqual({
      type: NEW_FILE,
      payload: {
        id: expect.any(Number),
        fileName,
        body: ''   
      }
    });
  });
});
